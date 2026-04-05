import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Models", href: "#design" },
  { label: "Technology", href: "#sound" },
  { label: "Design", href: "#design" },
  { label: "Experience", href: "#product" },
  { label: "Store", href: "#cta" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Models");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur border-b border-white/[0.04]" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.88)" : "transparent",
      }}
      data-ocid="nav.panel"
    >
      <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-[#ededed] text-base font-light tracking-[0.3em] uppercase hover:text-white transition-colors"
          style={{ fontWeight: 300, letterSpacing: "0.32em" }}
          data-ocid="nav.link"
        >
          SONO
        </a>

        {/* Nav links */}
        <div
          className="hidden md:flex items-center gap-8"
          data-ocid="nav.panel"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`text-[10px] font-light tracking-[0.18em] uppercase transition-all duration-300 relative group ${
                active === link.label
                  ? "text-[#ededed]"
                  : "text-[#9a9a9a] hover:text-[#ededed]"
              }`}
              data-ocid="nav.link"
            >
              {link.label}
              {active === link.label && (
                <span
                  className="absolute -bottom-[2px] left-0 right-0 h-px"
                  style={{
                    background: "#cc0000",
                    boxShadow: "0 0 6px rgba(204,0,0,0.7)",
                  }}
                />
              )}
              <span
                className="absolute -bottom-[2px] left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(204,0,0,0.5)" }}
              />
            </a>
          ))}
        </div>

        {/* Utility icons */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              type="button"
              className="text-[#9a9a9a] hover:text-[#ededed] transition-colors p-1"
              aria-label="Cart"
              data-ocid="nav.button"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                role="img"
                aria-label="Cart icon"
              >
                <title>Cart</title>
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </button>
            <span
              className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full"
              style={{
                background: "#cc0000",
                boxShadow: "0 0 4px rgba(204,0,0,0.8)",
              }}
            />
          </div>
          <button
            type="button"
            className="text-[#9a9a9a] hover:text-[#ededed] transition-colors p-1"
            aria-label="Search"
            data-ocid="nav.button"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              role="img"
              aria-label="Search icon"
            >
              <title>Search</title>
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
