import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
  ];

  return (
    <header className="border-b border-white/10 bg-black/20 px-5 py-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 border border-white/10 bg-white/5 flex items-center justify-center font-bold">
            GT
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white/90">
              Gaurav Tak
            </p>
            <p className="text-xs text-white/50">
              Full-Stack Software Engineer
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`border border-white/10 bg-white/[0.03] px-4 py-2 text-sm transition ${location.pathname === item.to
                  ? "text-white border-violet-400/40 bg-white/[0.06]"
                  : "text-white/80 hover:bg-white/[0.06] hover:text-white hover:border-violet-400/30"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
