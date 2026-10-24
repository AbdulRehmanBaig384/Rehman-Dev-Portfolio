"use client";

import { Component, useEffect, useRef, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { MathUtils, type Group, type Mesh } from "three";

type HeroSceneProps = {
  active: boolean;
  onReady: () => void;
  onFailure: () => void;
};

class SceneBoundary extends Component<{ children: ReactNode; onFailure: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onFailure(); }
  render() { return this.state.failed ? null : this.props.children; }
}

function SceneLifecycle({ onReady, onFailure }: Pick<HeroSceneProps, "onReady" | "onFailure">) {
  const gl = useThree((state) => state.gl);
  useEffect(() => {
    const canvas = gl.domElement;
    const readyFrame = requestAnimationFrame(onReady);
    const contextLost = (event: Event) => {
      event.preventDefault();
      cancelAnimationFrame(readyFrame);
      onFailure();
    };
    canvas.addEventListener("webglcontextlost", contextLost);
    return () => {
      cancelAnimationFrame(readyFrame);
      canvas.removeEventListener("webglcontextlost", contextLost);
    };
  }, [gl, onReady, onFailure]);
  return null;
}

function Sculpture({ active }: { active: boolean }) {
  const parallax = useRef<Group>(null);
  const knot = useRef<Mesh>(null);
  const orbit = useRef<Group>(null);

  useFrame(({ pointer }, elapsed) => {
    if (!active) return;
    // A capped delta prevents jumps after a hidden tab or a suspended frame loop.
    const delta = Math.min(elapsed, 0.035);
    if (parallax.current) {
      parallax.current.rotation.x = MathUtils.damp(parallax.current.rotation.x, pointer.y * 0.18, 3.5, delta);
      parallax.current.rotation.y = MathUtils.damp(parallax.current.rotation.y, pointer.x * 0.27, 3.5, delta);
    }
    if (knot.current) {
      knot.current.rotation.y += delta * 0.105;
      knot.current.rotation.x += delta * 0.025;
    }
    if (orbit.current) orbit.current.rotation.z += delta * 0.035;
  });

  return (
    <group ref={parallax}>
      <Float enabled={active} speed={1.15} rotationIntensity={0.14} floatIntensity={0.3} floatingRange={[-0.13, 0.13]}>
        <mesh ref={knot} rotation={[0.35, -0.3, -0.35]}>
          <torusKnotGeometry args={[1.12, 0.33, 160, 24, 2, 3]} />
          <meshPhysicalMaterial color="#b2b2b5" metalness={0.96} roughness={0.24} clearcoat={1} clearcoatRoughness={0.18} envMapIntensity={2.2} />
        </mesh>
      </Float>

      <group ref={orbit} rotation={[0, 0, -0.2]}>
        <mesh rotation={[1.12, 0.4, -0.25]}>
          <torusGeometry args={[2.18, 0.006, 6, 160]} />
          <meshBasicMaterial color="#d1d1d4" transparent opacity={0.38} depthWrite={false} />
        </mesh>
        <mesh rotation={[0.9, -0.7, 0.6]}>
          <torusGeometry args={[2.03, 0.004, 6, 144]} />
          <meshBasicMaterial color="#d1d1d4" transparent opacity={0.22} depthWrite={false} />
        </mesh>
        <mesh position={[1.92, 0.67, 0.14]}>
          <sphereGeometry args={[0.085, 20, 16]} />
          <meshStandardMaterial color="#d1d1d4" metalness={0.8} roughness={0.18} envMapIntensity={2} />
        </mesh>
        <mesh position={[-1.67, -0.88, 0.33]}>
          <sphereGeometry args={[0.055, 16, 12]} />
          <meshStandardMaterial color="#d1d1d4" emissive="#d1d1d4" emissiveIntensity={0.3} metalness={0.7} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroScene({ active, onReady, onFailure }: HeroSceneProps) {
  return (
    <SceneBoundary onFailure={onFailure}>
      <Canvas
        aria-hidden="true"
        camera={{ position: [0, 0, 6.8], fov: 43, near: 0.1, far: 30 }}
        dpr={[1, 1.5]}
        frameloop={active ? "always" : "demand"}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        fallback={<span>Interactive sculpture unavailable.</span>}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.35} color="#d1d1d4" />
        <directionalLight position={[3, 4, 4]} intensity={2.6} color="#d1d1d4" />
        <pointLight position={[-3, 0.5, 2]} intensity={12} color="#c4c4c7" distance={12} decay={2} />
        <pointLight position={[2.4, -1.3, 1]} intensity={9} color="#ededee" distance={10} decay={2} />
        <Environment resolution={128} frames={1}>
          <Lightformer form="rect" intensity={4} color="#d1d1d4" position={[-3, 2, 3]} target={[0, 0, 0]} scale={[3, 6, 1]} />
          <Lightformer form="rect" intensity={3} color="#d1d1d4" position={[4, 1, -2]} target={[0, 0, 0]} scale={[2, 5, 1]} />
          <Lightformer form="rect" intensity={3} color="#d1d1d4" position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5, 2, 1]} />
          <Lightformer form="rect" intensity={1.5} color="#d1d1d4" position={[1, -3, 2]} target={[0, 0, 0]} scale={[2, 3, 1]} />
        </Environment>
        <Sculpture active={active} />
        <SceneLifecycle onReady={onReady} onFailure={onFailure} />
      </Canvas>
    </SceneBoundary>
  );
}
