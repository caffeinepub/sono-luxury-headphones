import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [subVisible, setSubVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setHeadlineVisible(true), 200);
    const t2 = setTimeout(() => setSubVisible(true), 800);
    const t3 = setTimeout(() => setCtaVisible(true), 1300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY * 0.4;
        parallaxRef.current.style.transform = `translateY(${y}px) translateZ(0)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#000000" }}
      data-ocid="hero.section"
    >
      {/* Animated background layers */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 parallax-slow"
        style={{ zIndex: 1 }}
      >
        {/* Deep red backlight glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(74,0,0,0.55) 0%, rgba(42,0,0,0.3) 40%, transparent 75%)",
            animation: "heroGlow 8s ease-in-out infinite",
          }}
        />
        {/* Upper ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 15%, rgba(30,0,0,0.4) 0%, transparent 70%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>

      {/* Product image */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 2 }}
      >
        <div
          className="relative"
          style={{
            width: "min(640px, 70vw)",
            opacity: headlineVisible ? 1 : 0,
            transition: "opacity 2s ease",
          }}
        >
          {/* Red glow behind headphone image */}
          <div
            style={{
              position: "absolute",
              inset: "-20%",
              background:
                "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(130,0,0,0.35) 0%, transparent 70%)",
              animation: "heroGlow 6s ease-in-out infinite",
              zIndex: 0,
            }}
          />
          <img
            src="/assets/generated/sono-headphones-hero.dim_1200x900.jpg"
            alt="SONO Premium Headphones"
            className="w-full h-auto relative"
            style={{
              zIndex: 1,
              filter: "brightness(0.92) contrast(1.08)",
              mixBlendMode: "lighten",
            }}
          />
        </div>
      </div>

      {/* Text content */}
      <div
        className="relative flex flex-col items-center text-center px-8"
        style={{ zIndex: 10, marginTop: "auto", paddingBottom: "120px" }}
      >
        <div
          className="mb-6"
          style={{
            opacity: headlineVisible ? 1 : 0,
            transform: headlineVisible ? "scale(1)" : "scale(0.96)",
            transition:
              "opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <h1
            className="uppercase text-[#ededed]"
            style={{
              fontSize: "clamp(42px, 7vw, 88px)",
              fontWeight: 200,
              letterSpacing: "0.1em",
              lineHeight: 1.05,
              textShadow: "0 0 80px rgba(204,0,0,0.15)",
            }}
          >
            HEAR BEYOND
            <br />
            <span style={{ color: "#f5f5f5" }}>SOUND.</span>
          </h1>
        </div>

        <div
          style={{
            opacity: subVisible ? 1 : 0,
            transform: subVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1s ease, transform 1s ease",
            transitionDelay: "0.1s",
          }}
        >
          <p
            className="uppercase tracking-[0.22em] text-[#9a9a9a] mb-10"
            style={{
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.22em",
            }}
          >
            Precision.&nbsp;&nbsp;Power.&nbsp;&nbsp;Pure Experience.
          </p>
        </div>

        <div
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <a href="#sound" className="sono-btn" data-ocid="hero.primary_button">
            Discover SONO
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 10 }}
      >
        <span
          className="text-[#9a9a9a] uppercase tracking-[0.2em]"
          style={{ fontSize: "9px", fontWeight: 300 }}
        >
          Scroll
        </span>
        <div
          className="animate-scroll-bounce"
          style={{
            width: "1px",
            height: "32px",
            background:
              "linear-gradient(to bottom, rgba(204,0,0,0.7), transparent)",
          }}
        />
      </div>
    </section>
  );
}
