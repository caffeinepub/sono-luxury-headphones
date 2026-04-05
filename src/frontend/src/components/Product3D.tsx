import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Headphone 3D model built from primitives
function HeadphonesModel({
  mouseX,
  mouseY,
  scrollProgress,
}: {
  mouseX: number;
  mouseY: number;
  scrollProgress: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const redLightRef = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (!groupRef.current) return;

    // Smooth mouse-driven rotation
    targetRotX.current += (-mouseY * 0.4 - targetRotX.current) * 0.04;
    targetRotY.current += (mouseX * 0.5 - targetRotY.current) * 0.04;

    groupRef.current.rotation.x = targetRotX.current;
    groupRef.current.rotation.y =
      targetRotY.current + Math.sin(Date.now() * 0.0003) * 0.05;

    // Scroll-driven ambient intensity
    if (ambientRef.current) {
      ambientRef.current.intensity +=
        (scrollProgress * 1.2 - ambientRef.current.intensity) * 0.05;
    }
    if (redLightRef.current) {
      redLightRef.current.intensity +=
        (scrollProgress * 3 - redLightRef.current.intensity) * 0.05;
    }
  });

  const metalMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#1a1a1a"),
    metalness: 1.0,
    roughness: 0.1,
    envMapIntensity: 1.0,
  });

  const cushionMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#0d0d0d"),
    metalness: 0.0,
    roughness: 0.9,
  });

  const redAccentMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#cc0000"),
    metalness: 0.6,
    roughness: 0.2,
    emissive: new THREE.Color("#ff0000"),
    emissiveIntensity: 0.8,
  });

  const bandMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#141414"),
    metalness: 0.9,
    roughness: 0.15,
  });

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight ref={ambientRef} intensity={0} />
      <pointLight
        ref={redLightRef}
        position={[2, 2, 2]}
        color={new THREE.Color("#ff2200")}
        intensity={0}
        distance={10}
      />
      <pointLight
        position={[-2, -1, 3]}
        color={new THREE.Color("#8080ff")}
        intensity={scrollProgress * 1.5}
        distance={8}
      />
      <pointLight
        position={[0, 3, 1]}
        color={new THREE.Color("#ffffff")}
        intensity={scrollProgress * 0.8}
        distance={6}
      />

      {/* === HEADBAND (arc at top) === */}
      <mesh position={[0, 1.1, 0]} material={bandMat}>
        <torusGeometry args={[1.05, 0.065, 12, 60, Math.PI]} />
        {/* Rotate so the arc opens downward */}
      </mesh>

      {/* Headband padding (slightly thicker torus) */}
      <mesh position={[0, 1.1, 0]} material={cushionMat}>
        <torusGeometry args={[1.05, 0.04, 8, 60, Math.PI * 0.55]} />
      </mesh>

      {/* === LEFT CONNECTING ARM === */}
      <mesh
        position={[-1.05, 0.2, 0]}
        rotation={[0, 0, 0.15]}
        material={metalMat}
      >
        <cylinderGeometry args={[0.04, 0.04, 0.95, 12]} />
      </mesh>

      {/* === RIGHT CONNECTING ARM === */}
      <mesh
        position={[1.05, 0.2, 0]}
        rotation={[0, 0, -0.15]}
        material={metalMat}
      >
        <cylinderGeometry args={[0.04, 0.04, 0.95, 12]} />
      </mesh>

      {/* === LEFT EAR CUP ASSEMBLY === */}
      <group position={[-1.12, -0.45, 0]}>
        {/* Main cup body */}
        <mesh material={metalMat}>
          <cylinderGeometry args={[0.42, 0.42, 0.18, 40]} />
        </mesh>
        {/* Cup face (speaker grille) */}
        <mesh position={[0, 0.1, 0]} material={metalMat}>
          <cylinderGeometry args={[0.38, 0.38, 0.02, 40]} />
        </mesh>
        {/* Ear cushion ring */}
        <mesh
          position={[0, -0.07, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material={cushionMat}
        >
          <torusGeometry args={[0.36, 0.1, 12, 40]} />
        </mesh>
        {/* Red accent ring */}
        <mesh
          position={[0, 0.0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material={redAccentMat}
        >
          <torusGeometry args={[0.415, 0.018, 8, 40]} />
        </mesh>
        {/* Inner ring glow detail */}
        <mesh
          position={[0, 0.09, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material={redAccentMat}
        >
          <torusGeometry args={[0.25, 0.008, 8, 40]} />
        </mesh>
      </group>

      {/* === RIGHT EAR CUP ASSEMBLY === */}
      <group position={[1.12, -0.45, 0]}>
        {/* Main cup body */}
        <mesh material={metalMat}>
          <cylinderGeometry args={[0.42, 0.42, 0.18, 40]} />
        </mesh>
        {/* Cup face */}
        <mesh position={[0, 0.1, 0]} material={metalMat}>
          <cylinderGeometry args={[0.38, 0.38, 0.02, 40]} />
        </mesh>
        {/* Ear cushion ring */}
        <mesh
          position={[0, -0.07, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material={cushionMat}
        >
          <torusGeometry args={[0.36, 0.1, 12, 40]} />
        </mesh>
        {/* Red accent ring */}
        <mesh
          position={[0, 0.0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material={redAccentMat}
        >
          <torusGeometry args={[0.415, 0.018, 8, 40]} />
        </mesh>
        {/* Inner ring glow detail */}
        <mesh
          position={[0, 0.09, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material={redAccentMat}
        >
          <torusGeometry args={[0.25, 0.008, 8, 40]} />
        </mesh>
      </group>
    </group>
  );
}

function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();
  const targetZ = useRef(7);

  useFrame(() => {
    const newZ = 7 - scrollProgress * 2.5;
    targetZ.current += (newZ - targetZ.current) * 0.04;
    (camera as THREE.PerspectiveCamera).position.z = targetZ.current;
  });

  return null;
}

export function Product3D() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>(0.1);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth) * 2 - 1);
      setMouseY(-((e.clientY / window.innerHeight) * 2 - 1));
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (windowH - rect.top) / (windowH + rect.height)),
      );
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="product"
      className={`py-32 relative ${
        isVisible ? "section-visible" : "section-hidden"
      }`}
      style={{ background: "#000000" }}
      data-ocid="product.section"
    >
      {/* Ambient glow behind canvas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(60,0,0,${scrollProgress * 0.35}) 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="uppercase text-[#cc0000] tracking-[0.3em] mb-4"
            style={{ fontSize: "10px", fontWeight: 400 }}
          >
            Interactive
          </p>
          <h2
            className="uppercase text-[#ededed] mb-4"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 200,
              letterSpacing: "0.14em",
            }}
          >
            EXPERIENCE THE PRODUCT
          </h2>
          <div className="sono-divider mb-4" />
          <p
            className="text-[#9a9a9a]"
            style={{
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.12em",
            }}
          >
            Move your mouse to explore
          </p>
        </div>

        {/* 3D Canvas */}
        <div
          ref={containerRef}
          className="product-canvas-container mx-auto rounded-3xl overflow-hidden"
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "480px",
            background: "#000",
            border: "1px solid rgba(255,255,255,0.05)",
            boxShadow: `0 0 80px rgba(180,0,0,${scrollProgress * 0.2}), 0 30px 80px rgba(0,0,0,0.8)`,
          }}
          data-ocid="product.canvas_target"
        >
          <Canvas
            camera={{ position: [0, 0, 7], fov: 45 }}
            style={{ background: "transparent" }}
            dpr={[1, 2]}
          >
            <fog attach="fog" args={["#000000", 8, 20]} />
            <CameraController scrollProgress={scrollProgress} />
            <HeadphonesModel
              mouseX={mouseX}
              mouseY={mouseY}
              scrollProgress={scrollProgress}
            />
            <Environment preset="night" />
          </Canvas>
        </div>

        {/* Specs below canvas */}
        <div className="flex justify-center gap-12 mt-12">
          {[
            { label: "Driver Size", value: "40mm" },
            { label: "Weight", value: "245g" },
            { label: "Connection", value: "BT 5.4" },
          ].map((spec) => (
            <div key={spec.label} className="text-center">
              <div
                className="text-[#ededed] mb-1"
                style={{
                  fontSize: "20px",
                  fontWeight: 200,
                  letterSpacing: "0.06em",
                }}
              >
                {spec.value}
              </div>
              <div
                className="uppercase text-[#9a9a9a] tracking-[0.18em]"
                style={{ fontSize: "9px", fontWeight: 400 }}
              >
                {spec.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
