"use client";

import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ─── constants ─────────────────────────────────────── */
const STAR_COUNT = 4000;
const STAR_COUNT_FAR = 2500;
const PARALLAX_STRENGTH = 0.08;
const SHOOTING_INTERVAL_MIN = 4000;
const SHOOTING_INTERVAL_MAX = 9000;

/* ─── helpers ───────────────────────────────────────── */
function randRange(a: number, b: number) {
  return a + Math.random() * (b - a);
}

/* ─── Star field layer ───────────────────────────────── */
function StarLayer({
  count,
  radius,
  size,
  speed,
  mouse,
  depthMultiplier,
}: {
  count: number;
  radius: number;
  size: number;
  speed: number;
  mouse: React.MutableRefObject<[number, number]>;
  depthMultiplier: number;
}) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = randRange(radius * 0.4, radius);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count, radius]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * speed;
    ref.current.rotation.x = t * speed * 0.4;
    // parallax
    ref.current.position.x = -mouse.current[0] * PARALLAX_STRENGTH * depthMultiplier;
    ref.current.position.y = mouse.current[1] * PARALLAX_STRENGTH * depthMultiplier;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
        vertexColors={false}
      />
    </Points>
  );
}

/* ─── Nebula fog (large blurred sprites) ─────────────── */
function NebulaClouds({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const ref = useRef<THREE.Group>(null!);

  const clouds = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        randRange(-12, 12),
        randRange(-6, 6),
        randRange(-18, -8),
      ] as [number, number, number],
      scale: randRange(4, 9),
      colorIdx: i % 3,
      opacity: randRange(0.04, 0.1),
      speed: randRange(0.0002, 0.0007),
      rotDir: Math.random() > 0.5 ? 1 : -1,
    }));
  }, []);

  const colors = ["#0a1a3a", "#12073a", "#021a12"];

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.x = -mouse.current[0] * 0.04;
    ref.current.position.y = mouse.current[1] * 0.04;
    ref.current.children.forEach((child, i) => {
      child.rotation.z = t * clouds[i].speed * clouds[i].rotDir;
    });
  });

  return (
    <group ref={ref}>
      {clouds.map((c, i) => (
        <mesh key={i} position={c.position}>
          <planeGeometry args={[c.scale, c.scale]} />
          <meshBasicMaterial
            color={colors[c.colorIdx]}
            transparent
            opacity={c.opacity}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Planet ─────────────────────────────────────────── */
function Planet({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const planetRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!planetRef.current) return;
    planetRef.current.rotation.y = state.clock.elapsedTime * 0.025;
    if (groupRef.current) {
      groupRef.current.position.x = 5.5 - mouse.current[0] * 0.06;
      groupRef.current.position.y = -1.8 + mouse.current[1] * 0.06;
    }
  });

  return (
    <group ref={groupRef} position={[5.5, -1.8, -6]}>
      {/* Atmosphere glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.62, 32, 32]} />
        <meshBasicMaterial
          color="#0a3020"
          transparent
          opacity={0.18}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>
      {/* Planet body */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[1.4, 64, 64]} />
        <meshStandardMaterial
          color="#0c1a12"
          roughness={0.85}
          metalness={0.15}
          emissive="#061a0c"
          emissiveIntensity={0.08}
        />
      </mesh>
      {/* Rim light */}
      <mesh>
        <sphereGeometry args={[1.48, 32, 32]} />
        <meshBasicMaterial
          color="#a8ff72"
          transparent
          opacity={0.045}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

/* ─── Shooting stars (imperative — avoids JSX line_ issues) ── */
const MAX_SHOOTING = 6;

function ShootingStars() {
  const groupRef = useRef<THREE.Group>(null!);

  // pre-build pool of line objects
  const pool = useMemo(() => {
    return Array.from({ length: MAX_SHOOTING }, () => {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(6);
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color("#c8f542"),
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });
      return new THREE.Line(geo, mat);
    });
  }, []);

  type StarState = {
    poolIdx: number;
    ox: number; oy: number; oz: number;
    dx: number; dy: number;
    progress: number;
    length: number;
    speed: number;
    active: boolean;
  };

  const active = useRef<StarState[]>([]);
  const nextShot = useRef(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    function schedule() {
      const delay = randRange(SHOOTING_INTERVAL_MIN, SHOOTING_INTERVAL_MAX);
      timeout = setTimeout(() => {
        // find free pool slot
        const usedIdx = new Set(active.current.map((s) => s.poolIdx));
        let slot = -1;
        for (let i = 0; i < MAX_SHOOTING; i++) {
          if (!usedIdx.has(i)) { slot = i; break; }
        }
        if (slot !== -1) {
          const angle = randRange(-0.55, -0.25);
          active.current.push({
            poolIdx: slot,
            ox: randRange(-14, 10),
            oy: randRange(3, 7),
            oz: randRange(-12, -4),
            dx: Math.cos(angle) * 1.2,
            dy: Math.sin(angle) * 1.2,
            progress: 0,
            length: randRange(1.8, 3.5),
            speed: randRange(0.07, 0.12),
            active: true,
          });
        }
        schedule();
      }, delay);
    }
    schedule();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!groupRef.current) return;
    pool.forEach((line) => groupRef.current.add(line));
    return () => { pool.forEach((line) => groupRef.current?.remove(line)); };
  }, [pool]);

  useFrame(() => {
    active.current.forEach((star) => {
      if (!star.active) return;
      star.progress += star.speed;
      const line = pool[star.poolIdx];
      const positions = line.geometry.attributes.position as THREE.BufferAttribute;
      const tail = Math.max(0, star.progress - star.length);
      positions.setXYZ(0, star.ox + star.dx * tail, star.oy + star.dy * tail, star.oz);
      positions.setXYZ(1, star.ox + star.dx * star.progress, star.oy + star.dy * star.progress, star.oz);
      positions.needsUpdate = true;
      (line.material as THREE.LineBasicMaterial).opacity =
        Math.sin(Math.min(1, star.progress / (star.length + 0.01)) * Math.PI) * 0.85;

      if (star.progress > star.length + 16) {
        star.active = false;
        (line.material as THREE.LineBasicMaterial).opacity = 0;
      }
    });
    active.current = active.current.filter((s) => s.active);
  });

  return <group ref={groupRef} />;
}

/* ─── Emerald accent particles ────────────────────────── */
function AccentParticles({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i++) {
      arr[i * 3] = randRange(-14, 14);
      arr[i * 3 + 1] = randRange(-8, 8);
      arr[i * 3 + 2] = randRange(-14, -2);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = t * 0.003;
    ref.current.position.x = -mouse.current[0] * 0.05;
    ref.current.position.y = mouse.current[1] * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c8f542"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

/* ─── Lighting ───────────────────────────────────────── */
function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.05} />
      <pointLight position={[-8, 4, -4]} color="#0a3a2a" intensity={1.2} />
      <pointLight position={[8, -4, -6]} color="#0a1a3a" intensity={0.8} />
    </>
  );
}

/* ─── Full scene ─────────────────────────────────────── */
function GalaxyScene() {
  const mouse = useRef<[number, number]>([0, 0]);
  const targetMouse = useRef<[number, number]>([0, 0]);

  // smooth mouse lerp
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targetMouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ];
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    mouse.current[0] += (targetMouse.current[0] - mouse.current[0]) * 0.04;
    mouse.current[1] += (targetMouse.current[1] - mouse.current[1]) * 0.04;
  });

  return (
    <>
      <SceneLighting />
      {/* far dim stars */}
      <StarLayer
        count={STAR_COUNT_FAR}
        radius={28}
        size={0.022}
        speed={0.00005}
        mouse={mouse}
        depthMultiplier={0.4}
      />
      {/* mid stars */}
      <StarLayer
        count={STAR_COUNT}
        radius={18}
        size={0.035}
        speed={0.00009}
        mouse={mouse}
        depthMultiplier={0.7}
      />
      {/* close bright stars */}
      <StarLayer
        count={800}
        radius={10}
        size={0.055}
        speed={0.00015}
        mouse={mouse}
        depthMultiplier={1}
      />
      <NebulaClouds mouse={mouse} />
      <Planet mouse={mouse} />
      <AccentParticles mouse={mouse} />
      <ShootingStars />
    </>
  );
}

/* ─── Camera / canvas wrapper ────────────────────────── */
function CameraRig() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, 5);
    camera.near = 0.1;
    camera.far = 100;
    (camera as THREE.PerspectiveCamera).fov = 70;
    camera.updateProjectionMatrix();
  }, [camera]);
  return null;
}

/* ─── Exported component ─────────────────────────────── */
export function GalaxyBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="galaxy-background"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "#020202",
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: false,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <CameraRig />
        <Suspense fallback={null}>
          <GalaxyScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
