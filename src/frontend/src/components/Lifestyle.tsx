import { useScrollReveal } from "../hooks/useScrollReveal";

const SCENES = [
  {
    label: "NIGHT CITY",
    title: "The City Disappears",
    description: "30 dB of silence in a world that never stops.",
    image: "/assets/generated/lifestyle-city.dim_800x600.jpg",
  },
  {
    label: "IN TRANSIT",
    title: "Your Journey, Reimagined",
    description: "40-hour battery. Anywhere you go.",
    image: "/assets/generated/lifestyle-travel.dim_800x600.jpg",
  },
  {
    label: "THE STUDIO",
    title: "Hear What Artists Intended",
    description: "Hi-Res Audio certified. Studio-grade clarity.",
    image: "/assets/generated/lifestyle-studio.dim_800x600.jpg",
  },
];

export function Lifestyle() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="lifestyle"
      className={`py-32 relative ${
        isVisible ? "section-visible" : "section-hidden"
      }`}
      style={{ background: "#000000" }}
      data-ocid="lifestyle.section"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="uppercase text-[#cc0000] tracking-[0.3em] mb-4"
            style={{ fontSize: "10px", fontWeight: 400 }}
          >
            Experience
          </p>
          <h2
            className="uppercase text-[#ededed]"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 200,
              letterSpacing: "0.14em",
            }}
          >
            DESIGNED FOR LIFE
          </h2>
          <div className="sono-divider mt-6" />
        </div>

        {/* Scene cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SCENES.map((scene, i) => (
            <div
              key={scene.label}
              className="relative overflow-hidden rounded-2xl group sono-card"
              style={{
                height: "380px",
                background: "#111",
                transitionDelay: `${i * 0.15}s`,
              }}
              data-ocid={`lifestyle.card.${i + 1}`}
            >
              {/* Background image */}
              <img
                src={scene.image}
                alt={scene.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "brightness(0.6) contrast(1.1)" }}
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.85) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span
                  className="block uppercase text-[#cc0000] tracking-[0.2em] mb-2"
                  style={{ fontSize: "8px", fontWeight: 500 }}
                >
                  {scene.label}
                </span>
                <h3
                  className="text-[#ededed] mb-2"
                  style={{
                    fontSize: "16px",
                    fontWeight: 300,
                    letterSpacing: "0.06em",
                  }}
                >
                  {scene.title}
                </h3>
                <p
                  className="text-[#9a9a9a]"
                  style={{ fontSize: "11px", fontWeight: 300 }}
                >
                  {scene.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
