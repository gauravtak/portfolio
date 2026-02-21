import { useEffect, useRef } from "react";

// ---------------------------------------------------------------------------
// PuzzleCanvas — animated sliding-puzzle built on HTML5 Canvas
// ---------------------------------------------------------------------------

const COLS = 4;
const ROWS = 4;
const TOTAL = COLS * ROWS;
const BLANK = TOTAL - 1; // bottom-right is the blank tile

// Violet → Cyan palette matching the site's gradient
const GRADIENT_START = "#7c3aed"; // violet-600
const GRADIENT_END = "#22d3ee"; // cyan-400

interface Tile {
    id: number;    // 0-based solved position
    pos: number;   // 0-based current position in grid
}

function shuffleArr(arr: number[]): number[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/** Ensure the permutation is solvable for a 4×4 grid */
function makeSolvable(ids: number[]): number[] {
    const arr = shuffleArr(ids);
    let inv = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === BLANK) continue;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] !== BLANK && arr[i] > arr[j]) inv++;
        }
    }
    const blankRow = Math.floor(arr.indexOf(BLANK) / COLS);
    const rowFromBottom = ROWS - blankRow; // 1-indexed from bottom
    // Solvability rule for even-width grids
    if ((inv % 2 === 0) !== (rowFromBottom % 2 === 1)) {
        // swap first two non-blank tiles to flip parity
        const a = arr.indexOf(0);
        const b = arr.indexOf(1);
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    return arr;
}

function initTiles(): Tile[] {
    const ids = Array.from({ length: TOTAL }, (_, i) => i);
    const shuffled = makeSolvable(ids);
    return shuffled.map((id, pos) => ({ id, pos }));
}

function getNeighbours(pos: number): number[] {
    const r = Math.floor(pos / COLS);
    const c = pos % COLS;
    const nb: number[] = [];
    if (r > 0) nb.push(pos - COLS);
    if (r < ROWS - 1) nb.push(pos + COLS);
    if (c > 0) nb.push(pos - 1);
    if (c < COLS - 1) nb.push(pos + 1);
    return nb;
}

export default function PuzzleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // ----- state -----
        let tiles = initTiles();
        let moveTimer = 0;
        const MOVE_INTERVAL = 420; // ms between auto moves
        let animReq = 0;
        let lastTime = 0;

        // Smooth animation state per tile: {pos: number, x: number, y: number, tx: number, ty: number}
        type AnimTile = {
            id: number;
            x: number; y: number;
            tx: number; ty: number;
        };
        let animTiles: AnimTile[] = [];

        const resize = () => {
            const parent = canvas.parentElement!;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            syncAnimTiles(true);
        };

        const tileW = () => canvas.width / COLS;
        const tileH = () => canvas.height / ROWS;

        function posToXY(pos: number) {
            return {
                x: (pos % COLS) * tileW(),
                y: Math.floor(pos / COLS) * tileH(),
            };
        }

        function syncAnimTiles(snap = false) {
            // build animTiles from tiles
            animTiles = tiles.map((t) => {
                const { x, y } = posToXY(t.pos);
                const existing = animTiles.find((a) => a.id === t.id);
                if (existing && !snap) {
                    return { ...existing, tx: x, ty: y };
                }
                return { id: t.id, x, y, tx: x, ty: y };
            });
        }

        function lerp(a: number, b: number, t: number) {
            return a + (b - a) * t;
        }

        function makeAutoMove() {
            const blankTile = tiles.find((t) => t.id === BLANK)!;
            const neighbours = getNeighbours(blankTile.pos);
            const swapPos = neighbours[Math.floor(Math.random() * neighbours.length)];
            const swapTile = tiles.find((t) => t.pos === swapPos)!;
            // swap positions
            const tmp = blankTile.pos;
            blankTile.pos = swapTile.pos;
            swapTile.pos = tmp;
            syncAnimTiles(false);
        }

        // ctx and canvas are guaranteed non-null past early returns above
        const ctx2 = ctx;
        const canvas2 = canvas;

        function drawTile(id: number, x: number, y: number) {
            const w = tileW();
            const h = tileH();
            if (id === BLANK) return; // blank tile is invisible

            // Background gradient color per tile — interpolate violet → cyan
            const t = id / (TOTAL - 2);
            const r1 = parseInt(GRADIENT_START.slice(1, 3), 16);
            const g1 = parseInt(GRADIENT_START.slice(3, 5), 16);
            const b1 = parseInt(GRADIENT_START.slice(5, 7), 16);
            const r2 = parseInt(GRADIENT_END.slice(1, 3), 16);
            const g2 = parseInt(GRADIENT_END.slice(3, 5), 16);
            const b2 = parseInt(GRADIENT_END.slice(5, 7), 16);
            const cR = Math.round(r1 + (r2 - r1) * t);
            const cG = Math.round(g1 + (g2 - g1) * t);
            const cB = Math.round(b1 + (b2 - b1) * t);

            const pad = 2;
            ctx2.save();
            ctx2.fillStyle = `rgba(${cR},${cG},${cB},0.18)`;
            ctx2.fillRect(x + pad, y + pad, w - pad * 2, h - pad * 2);

            // Border
            ctx2.strokeStyle = `rgba(${cR},${cG},${cB},0.55)`;
            ctx2.lineWidth = 1;
            ctx2.strokeRect(x + pad, y + pad, w - pad * 2, h - pad * 2);

            // Number label
            const label = (id + 1).toString();
            const fontSize = Math.round(Math.min(w, h) * 0.28);
            ctx2.fillStyle = `rgba(${cR},${cG},${cB},0.85)`;
            ctx2.font = `600 ${fontSize}px 'Inter', system-ui, sans-serif`;
            ctx2.textAlign = "center";
            ctx2.textBaseline = "middle";
            ctx2.fillText(label, x + w / 2, y + h / 2);

            // Subtle inner highlight
            const shine = ctx2.createLinearGradient(x + pad, y + pad, x + pad, y + h - pad);
            shine.addColorStop(0, "rgba(255,255,255,0.07)");
            shine.addColorStop(1, "rgba(255,255,255,0.00)");
            ctx2.fillStyle = shine;
            ctx2.fillRect(x + pad, y + pad, w - pad * 2, h - pad * 2);

            ctx2.restore();
        }

        function draw() {
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

            // Faint grid background
            ctx2.save();
            const w = tileW();
            const h = tileH();
            for (let r = 0; r < ROWS; r++) {
                for (let c = 0; c < COLS; c++) {
                    ctx2.fillStyle = "rgba(255,255,255,0.015)";
                    ctx2.fillRect(c * w + 1, r * h + 1, w - 2, h - 2);
                }
            }
            ctx2.restore();

            // Draw tiles at their animated position
            for (const at of animTiles) {
                drawTile(at.id, at.x, at.y);
            }
        }

        function loop(ts: number) {
            const dt = ts - lastTime;
            lastTime = ts;

            // Lerp animation
            const speed = 0.14;
            for (const at of animTiles) {
                at.x = lerp(at.x, at.tx, speed + 0.06);
                at.y = lerp(at.y, at.ty, speed + 0.06);
            }

            // Auto-move timer
            moveTimer += dt;
            if (moveTimer >= MOVE_INTERVAL) {
                moveTimer = 0;
                makeAutoMove();
            }

            draw();
            animReq = requestAnimationFrame(loop);
        }

        // Init
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas.parentElement!);

        lastTime = performance.now();
        animReq = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(animReq);
            ro.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: "block" }}
        />
    );
}
