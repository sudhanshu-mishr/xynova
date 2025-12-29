
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

// Fix: Augment the JSX namespace for both global and React scopes to resolve Three.js intrinsic element errors.
// This ensures that elements like <group>, <mesh>, and various geometries/materials are recognized by the compiler.
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

const Pen = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Smooth hover tilt effect
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Default floating animation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, t * 0.2, 0.1);

    if (hovered) {
      const mouseX = (state.mouse.x * Math.PI) / 8;
      const mouseY = (state.mouse.y * Math.PI) / 8;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouseY, 0.1);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, mouseX, 0.1);
    } else {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.1);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, 0.1);
    }
  });

  return (
    // @ts-ignore - Fix: Property 'group' does not exist on type 'JSX.IntrinsicElements'
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={1.2}
    >
      {/* Main Body */}
      {/* @ts-ignore - Fix: Property 'mesh' does not exist on type 'JSX.IntrinsicElements' */}
      <mesh position={[0, 0, 0]}>
        {/* @ts-ignore - Fix: Property 'cylinderGeometry' does not exist on type 'JSX.IntrinsicElements' */}
        <cylinderGeometry args={[0.15, 0.15, 6, 32]} />
        {/* @ts-ignore - Fix: Property 'meshPhysicalMaterial' does not exist on type 'JSX.IntrinsicElements' */}
        <meshPhysicalMaterial
          color="#0f172a"
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Grip Section */}
      {/* @ts-ignore - Fix: Property 'mesh' does not exist on type 'JSX.IntrinsicElements' */}
      <mesh position={[0, -1.5, 0]}>
        {/* @ts-ignore - Fix: Property 'cylinderGeometry' does not exist on type 'JSX.IntrinsicElements' */}
        <cylinderGeometry args={[0.16, 0.16, 1.5, 32]} />
        {/* @ts-ignore - Fix: Property 'meshPhysicalMaterial' does not exist on type 'JSX.IntrinsicElements' */}
        <meshPhysicalMaterial color="#1e293b" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Tapered Tip */}
      {/* @ts-ignore - Fix: Property 'mesh' does not exist on type 'JSX.IntrinsicElements' */}
      <mesh position={[0, -3.4, 0]}>
        {/* @ts-ignore - Fix: Property 'cylinderGeometry' does not exist on type 'JSX.IntrinsicElements' */}
        <cylinderGeometry args={[0.15, 0.02, 0.8, 32]} />
        {/* @ts-ignore - Fix: Property 'meshPhysicalMaterial' does not exist on type 'JSX.IntrinsicElements' */}
        <meshPhysicalMaterial color="#94a3b8" metalness={1} roughness={0.1} />
      </mesh>

      {/* Actual Nib */}
      {/* @ts-ignore - Fix: Property 'mesh' does not exist on type 'JSX.IntrinsicElements' */}
      <mesh position={[0, -3.85, 0]}>
        {/* @ts-ignore - Fix: Property 'sphereGeometry' does not exist on type 'JSX.IntrinsicElements' */}
        <sphereGeometry args={[0.02, 16, 16]} />
        {/* @ts-ignore - Fix: Property 'meshStandardMaterial' does not exist on type 'JSX.IntrinsicElements' */}
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={2} />
      </mesh>

      {/* Top Cap / Button */}
      {/* @ts-ignore - Fix: Property 'mesh' does not exist on type 'JSX.IntrinsicElements' */}
      <mesh position={[0, 3, 0]}>
        {/* @ts-ignore - Fix: Property 'cylinderGeometry' does not exist on type 'JSX.IntrinsicElements' */}
        <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
        {/* @ts-ignore - Fix: Property 'meshPhysicalMaterial' does not exist on type 'JSX.IntrinsicElements' */}
        <meshPhysicalMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Pen Clip */}
      {/* @ts-ignore - Fix: Property 'mesh' does not exist on type 'JSX.IntrinsicElements' */}
      <mesh position={[0.18, 1.8, 0]}>
        {/* @ts-ignore - Fix: Property 'boxGeometry' does not exist on type 'JSX.IntrinsicElements' */}
        <boxGeometry args={[0.05, 1.5, 0.1]} />
        {/* @ts-ignore - Fix: Property 'meshPhysicalMaterial' does not exist on type 'JSX.IntrinsicElements' */}
        <meshPhysicalMaterial color="#94a3b8" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
};

export const PenViewer = () => {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
        {/* Fix: Ambient, spot, and point lights are standard Three.js intrinsic elements */}
        {/* @ts-ignore - Fix: Property 'ambientLight' does not exist on type 'JSX.IntrinsicElements' */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore - Fix: Property 'spotLight' does not exist on type 'JSX.IntrinsicElements' */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        {/* @ts-ignore - Fix: Property 'pointLight' does not exist on type 'JSX.IntrinsicElements' */}
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Pen />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          minDistance={5}
          maxDistance={15}
        />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
        />
      </Canvas>
    </div>
  );
};
