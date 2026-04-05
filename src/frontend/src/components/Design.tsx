import { useScrollReveal } from "../hooks/useScrollReveal";

const MATERIALS = [
  {
    name: "Aerospace Aluminum",
    subtitle: "6061-T6 Series",
    description:
      "CNC-machined from a single billet. The same alloy used in aerospace components — forged for weight, strength, and beauty.",
    image: "/assets/generated/material-aluminum.dim_600x400.jpg",
    tag: "STRUCTURE",
  },
  {
    name: "Full-Grain Leather",
    subtitle: "Nappa Grade",
    description:
      "Each ear cushion is wrapped in premium nappa leather sourced from Italian tanneries. Supple, breathable, and enduring.",
    image: "/assets/generated/material-leather.dim_600x400.jpg",
    tag: "COMFORT",
  },
  {
    name: "Grade-5 Titanium",
    subtitle: "Ti-6Al-4V",
    description:
      "The headband core is reinforced with titanium alloy — 3× stronger than steel at half the weight. Built to outlast generations.",
    image: "/assets/generated/material-titanium.dim_600x400.jpg",
    tag: "DURABILITY",
  },
];

export function Design() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="design"
      className={`py-32 relative overflow-hidden ${
        isVisible ? "section-visible" : "section-hidden"
      }`}
      style={{ background: "#070707" }}
      data-ocid="design.section"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="uppercase text-[#cc0000] tracking-[0.3em] mb-4"
            style={{ fontSize: "10px", fontWeight: 400 }}
          >
            Materials
          </p>
          <h2
            className="uppercase text-[#ededed]"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 200,
              letterSpacing: "0.14em",
            }}
          >
            DESIGNED TO ENDURE
          </h2>
          <div className="sono-divider mt-6" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MATERIALS.map((mat, i) => (
            <div
              key={mat.name}
              className="sono-card rounded-2xl overflow-hidden"
              style={{
                background: "#121214",
                transitionDelay: `${i * 0.12}s`,
              }}
              data-ocid={`design.card.${i + 1}`}
            >
              {/* Image area */}
              <div
                className="relative overflow-hidden"
                style={{ height: "200px" }}
              >
                <img
                  src={mat.image}
                  alt={mat.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ filter: "brightness(0.85) contrast(1.1)" }}
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(18,18,20,0.9) 100%)",
                  }}
                />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="uppercase tracking-[0.18em] text-[#cc0000]"
                    style={{ fontSize: "8px", fontWeight: 500 }}
                  >
                    {mat.tag}
                  </span>
                </div>
              </div>

              {/* Text area */}
              <div className="p-6">
                <div
                  className="text-[#9a9a9a] uppercase tracking-[0.14em] mb-1"
                  style={{ fontSize: "9px", fontWeight: 400 }}
                >
                  {mat.subtitle}
                </div>
                <h3
                  className="text-[#ededed] mb-3"
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                  }}
                >
                  {mat.name}
                </h3>
                <p
                  className="text-[#9a9a9a]"
                  style={{
                    fontSize: "11px",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {mat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
