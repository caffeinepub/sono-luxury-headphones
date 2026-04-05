import { useScrollReveal } from "../hooks/useScrollReveal";

const FEATURES = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#cc0000"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <title>Active Noise Cancellation</title>
        <path d="M9 9a3 3 0 1 1 4.74 2.474L12 13h-1v1h-1v-2.5L12 10" />
        <circle cx="12" cy="12" r="10" />
        <path d="M12 17h.01" />
      </svg>
    ),
    title: "Hybrid Active Noise Cancellation",
    description:
      "30 dB attenuation. Feedforward + feedback mics in each ear cup.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#cc0000"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <title>Hi-Res Audio</title>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    title: "Hi-Res Audio Certified",
    description:
      "Tested and certified by Japan Audio Society. 40 kHz response.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#cc0000"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <title>Battery</title>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "60-Hour Battery",
    description:
      "Up to 60 hours playback with ANC off. 10-minute quick charge for 4 hours.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#cc0000"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <title>Spatial Audio</title>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
    title: "Spatial Audio",
    description:
      "HRTF-personalized 3D audio field. Head-tracked for total immersion.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#cc0000"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <title>Multipoint Connection</title>
        <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Multipoint Connection",
    description:
      "Seamlessly switch between 3 devices. Zero re-pairing required.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#cc0000"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <title>Adaptive EQ</title>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Adaptive EQ",
    description:
      "Built-in mics continuously tune the sound profile to fit your ear.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#cc0000"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <title>SONO Studio App</title>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "SONO Studio App",
    description:
      "Fine-tune every parameter. EQ, ANC levels, spatial presets — all in one place.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#cc0000"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <title>Premium Materials</title>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Premium Materials",
    description:
      "Aerospace aluminum, nappa leather, titanium. Built to outlast a decade.",
  },
];

export function Features() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="features"
      className={`py-32 relative ${
        isVisible ? "section-visible" : "section-hidden"
      }`}
      style={{ background: "#070707" }}
      data-ocid="features.section"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="uppercase text-[#cc0000] tracking-[0.3em] mb-4"
            style={{ fontSize: "10px", fontWeight: 400 }}
          >
            Capabilities
          </p>
          <h2
            className="uppercase text-[#ededed]"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 200,
              letterSpacing: "0.14em",
            }}
          >
            BUILT WITHOUT COMPROMISE
          </h2>
          <div className="sono-divider mt-6" />
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="feature-tile rounded-2xl p-6"
              style={{
                background: "#0a0a0a",
                transitionDelay: `${i * 0.06}s`,
              }}
              data-ocid={`features.item.${i + 1}`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3
                className="text-[#ededed] mb-2"
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "0.03em",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-[#9a9a9a]"
                style={{ fontSize: "10.5px", lineHeight: 1.7, fontWeight: 300 }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
