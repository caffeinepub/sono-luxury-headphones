import { useScrollReveal } from "../hooks/useScrollReveal";

const BAR_COUNT = 48;

const BAR_DELAYS = Array.from({ length: BAR_COUNT }, (_, i) =>
  ((Math.sin(i * 0.5) * 0.5 + 0.5) * 2).toFixed(2),
);
const BAR_DURATIONS = Array.from({ length: BAR_COUNT }, (_, i) =>
  (0.6 + Math.sin(i * 0.3 + 1) * 0.4).toFixed(2),
);
const BAR_HEIGHTS = Array.from({ length: BAR_COUNT }, (_, i) =>
  (20 + Math.sin(i * 0.7) * 15 + Math.cos(i * 0.3) * 10).toFixed(0),
);

export function SoundExperience() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="sound"
      className={`py-32 relative overflow-hidden ${
        isVisible ? "section-visible" : "section-hidden"
      }`}
      style={{ background: "#000000" }}
      data-ocid="sound.section"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(40,0,0,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8 relative">
        {/* Section label */}
        <div className="text-center mb-16">
          <p
            className="uppercase text-[#cc0000] tracking-[0.3em] mb-4"
            style={{ fontSize: "10px", fontWeight: 400 }}
          >
            Sound Architecture
          </p>
          <h2
            className="uppercase text-[#ededed] mb-6"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 200,
              letterSpacing: "0.14em",
            }}
          >
            MASTERFULLY CRAFTED
          </h2>
          <div className="sono-divider mb-6" />
          <p
            className="text-[#9a9a9a] max-w-md mx-auto"
            style={{
              fontSize: "13px",
              fontWeight: 300,
              lineHeight: 1.8,
              letterSpacing: "0.04em",
            }}
          >
            Every note rendered with surgical precision. From the deepest
            sub-bass to the most delicate high frequencies — nothing is lost.
          </p>
        </div>

        {/* Equalizer visualization */}
        <div
          className="relative flex items-end justify-center gap-0.5 mx-auto"
          style={{ height: "80px", maxWidth: "700px" }}
          aria-hidden="true"
        >
          {BAR_HEIGHTS.map((height, i) => {
            const isCenter = Math.abs(i - BAR_COUNT / 2) < BAR_COUNT * 0.15;
            const barId = `eq-bar-${i}`;
            return (
              <div
                key={barId}
                className="eq-bar"
                style={{
                  width: "10px",
                  height: `${height}px`,
                  borderRadius: "2px 2px 0 0",
                  background: isCenter
                    ? "linear-gradient(to top, #cc0000, rgba(204,0,0,0.4))"
                    : "linear-gradient(to top, rgba(204,0,0,0.6), rgba(204,0,0,0.1))",
                  boxShadow: isCenter ? "0 0 8px rgba(204,0,0,0.4)" : "none",
                  animationDuration: `${BAR_DURATIONS[i]}s`,
                  animationDelay: `${BAR_DELAYS[i]}s`,
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.4s ease ${i * 0.01}s`,
                }}
              />
            );
          })}

          {/* Baseline line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(204,0,0,0.4), transparent)",
            }}
          />
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { value: "40 kHz", label: "Frequency Range" },
            { value: "0.001%", label: "THD at 1kHz" },
            { value: "32 Ω", label: "Impedance" },
          ].map((stat) => (
            <div key={stat.label} className="text-center pt-8">
              <div
                className="text-[#ededed] mb-1"
                style={{
                  fontSize: "22px",
                  fontWeight: 200,
                  letterSpacing: "0.06em",
                }}
              >
                {stat.value}
              </div>
              <div
                className="uppercase text-[#9a9a9a] tracking-[0.18em]"
                style={{ fontSize: "9px", fontWeight: 400 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
