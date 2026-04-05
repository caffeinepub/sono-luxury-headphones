const FOOTER_LINKS = {
  Products: ["SONO Pro", "SONO Studio", "SONO Sport", "Accessories"],
  Company: ["About", "Careers", "Press", "Sustainability"],
  Support: ["FAQ", "Warranty", "Contact", "Stores"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

const SOCIAL_PATHS: Record<string, string> = {
  twitter:
    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.732-8.845L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  youtube:
    "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        background: "#070707",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
      data-ocid="footer.panel"
    >
      <div className="max-w-[1200px] mx-auto px-8 py-20">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div
              className="text-[#ededed] uppercase tracking-[0.3em] mb-4"
              style={{ fontSize: "16px", fontWeight: 200 }}
            >
              SONO
            </div>
            <p
              className="text-[#9a9a9a]"
              style={{
                fontSize: "11px",
                fontWeight: 300,
                lineHeight: 1.8,
                maxWidth: "180px",
              }}
            >
              The pinnacle of personal audio. Engineered without compromise.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://twitter.com"
                className="text-[#555] hover:text-[#ededed] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <title>Twitter</title>
                  <path d={SOCIAL_PATHS.twitter} />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="text-[#555] hover:text-[#ededed] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <title>Instagram</title>
                  <path d={SOCIAL_PATHS.instagram} />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                className="text-[#555] hover:text-[#ededed] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <title>YouTube</title>
                  <path d={SOCIAL_PATHS.youtube} />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <div
                className="uppercase text-[#ededed] tracking-[0.18em] mb-5"
                style={{ fontSize: "9px", fontWeight: 500 }}
              >
                {category}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="https://sono.audio"
                      className="text-[#9a9a9a] hover:text-[#ededed] transition-colors"
                      style={{ fontSize: "11px", fontWeight: 300 }}
                      data-ocid="footer.link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p
            className="text-[#555]"
            style={{
              fontSize: "10px",
              fontWeight: 300,
              letterSpacing: "0.06em",
            }}
          >
            © {year} SONO. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-[#9a9a9a] transition-colors"
            style={{
              fontSize: "10px",
              fontWeight: 300,
              letterSpacing: "0.06em",
            }}
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
