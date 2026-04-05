import { useScrollReveal } from "../hooks/useScrollReveal";

export function CTA() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="cta"
      className={`relative overflow-hidden ${
        isVisible ? "section-visible" : "section-hidden"
      }`}
      style={{
        background: "#000000",
        paddingTop: "160px",
        paddingBottom: "160px",
      }}
      data-ocid="cta.section"
    >
      {/* Red glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 80%, rgba(80,0,0,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8 text-center relative">
        <p
          className="uppercase text-[#cc0000] tracking-[0.3em] mb-8"
          style={{ fontSize: "10px", fontWeight: 400 }}
        >
          The SONO Pro
        </p>

        <h2
          className="uppercase text-[#ededed] mb-8"
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 200,
            letterSpacing: "0.1em",
            lineHeight: 1.1,
            textShadow: "0 0 80px rgba(204,0,0,0.12)",
          }}
        >
          EXPERIENCE
          <br />
          THE SOUND.
        </h2>

        <div className="sono-divider mb-8" />

        <p
          className="text-[#9a9a9a] mb-12 max-w-sm mx-auto"
          style={{ fontSize: "13px", fontWeight: 300, lineHeight: 1.8 }}
        >
          The SONO Pro. Starting at ₹89,900. Free express shipping. 30-day
          returns.
        </p>

        <div className="flex items-center justify-center gap-5">
          <a
            href="#product"
            className="sono-btn sono-btn-red"
            data-ocid="cta.primary_button"
          >
            Order Now
          </a>
          <a
            href="#product"
            className="sono-btn"
            data-ocid="cta.secondary_button"
          >
            Explore Model
          </a>
        </div>

        {/* Decorative line */}
        <div
          className="mt-20 mx-auto"
          style={{
            width: "1px",
            height: "80px",
            background:
              "linear-gradient(to bottom, rgba(204,0,0,0.5), transparent)",
            boxShadow: "0 0 8px rgba(204,0,0,0.3)",
          }}
        />
      </div>
    </section>
  );
}
