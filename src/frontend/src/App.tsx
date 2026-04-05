import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { CTA } from "./components/CTA";
import { ChatAssistant } from "./components/ChatAssistant";
import { Design } from "./components/Design";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Lifestyle } from "./components/Lifestyle";
import { Nav } from "./components/Nav";
import { SoundExperience } from "./components/SoundExperience";

// Lazy-load the 3D section
const Product3D = lazy(() =>
  import("./components/Product3D").then((m) => ({ default: m.Product3D })),
);

// ==========================================
// LOADER COMPONENT
// ==========================================
function Loader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"fadeIn" | "hold" | "fadeOut">("fadeIn");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("fadeOut"), 1800);
    const t3 = setTimeout(() => onDone(), 2700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      style={{
        background: "#000000",
        opacity: phase === "fadeOut" ? 0 : 1,
        transition:
          phase === "fadeOut"
            ? "opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1)"
            : "none",
        pointerEvents: phase === "fadeOut" ? "none" : "all",
      }}
    >
      <div
        style={{
          opacity: phase === "fadeIn" ? 0 : phase === "hold" ? 1 : 0,
          transform: phase === "fadeIn" ? "scale(0.97)" : "scale(1)",
          transition:
            phase === "hold"
              ? "opacity 0.8s ease, transform 0.8s ease"
              : phase === "fadeOut"
                ? "opacity 0.5s ease"
                : "none",
        }}
      >
        <div
          className="uppercase text-[#ededed] tracking-[0.5em]"
          style={{
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 200,
            letterSpacing: "0.5em",
            textShadow: "0 0 40px rgba(204,0,0,0.3)",
          }}
        >
          SONO
        </div>
        <div
          className="mt-2 text-center"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(204,0,0,0.7), transparent)",
            boxShadow: "0 0 8px rgba(204,0,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}

// ==========================================
// CUSTOM CURSOR
// ==========================================
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const haloPos = useRef({ x: -100, y: -100 });
  const mousePos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      haloPos.current.x += (mousePos.current.x - haloPos.current.x) * 0.12;
      haloPos.current.y += (mousePos.current.y - haloPos.current.y) * 0.12;
      if (haloRef.current) {
        haloRef.current.style.left = `${haloPos.current.x}px`;
        haloRef.current.style.top = `${haloPos.current.y}px`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".sono-card") ||
        target.closest(".sono-btn")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onEnter, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${hovering ? "hovering" : ""}`}
      />
      <div
        ref={haloRef}
        className={`cursor-halo ${hovering ? "hovering" : ""}`}
      />
    </>
  );
}

// ==========================================
// MAIN APP
// ==========================================
export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{ background: "#000000", overflowX: "hidden" }}
    >
      {/* Loader overlay */}
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      {/* Custom cursor */}
      <CustomCursor />

      {/* Main content */}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Nav />
        <main>
          <Hero />
          <SoundExperience />
          <Design />
          <Lifestyle />
          <Features />
          <Suspense
            fallback={
              <div
                className="flex items-center justify-center"
                style={{ height: "600px", background: "#000" }}
                data-ocid="product.loading_state"
              >
                <div
                  className="uppercase text-[#555] tracking-[0.2em]"
                  style={{ fontSize: "10px" }}
                >
                  Loading Experience...
                </div>
              </div>
            }
          >
            <Product3D />
          </Suspense>
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
