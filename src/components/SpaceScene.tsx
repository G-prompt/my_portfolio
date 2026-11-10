import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Ship() {
  const shipRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!shipRef.current) {
      return;
    }

    const t = clock.getElapsedTime();
    shipRef.current.position.x = Math.sin(t * 0.8) * 5.5;
    shipRef.current.position.y = Math.cos(t * 1.1) * 1.6;
    shipRef.current.position.z = -10 + Math.sin(t * 1.3) * 2.5;
    shipRef.current.rotation.z = Math.sin(t * 0.8) * 0.35;
    shipRef.current.rotation.x = -0.35;
    shipRef.current.rotation.y = Math.sin(t * 0.5) * 0.8 + 1.4;
  });

  return (
    <group ref={shipRef}>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.8, 3.8, 8, 18]} />
        <meshStandardMaterial color="#dfe7f6" emissive="#7dd3fc" emissiveIntensity={0.8} metalness={0.9} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0.8, 0.2]} rotation={[0, 0, Math.PI / 2]}>
        <sphereGeometry args={[0.8, 24, 24]} />
        <meshStandardMaterial color="#dff6ff" emissive="#93c5fd" emissiveIntensity={1.4} metalness={0.5} roughness={0.15} />
      </mesh>

      <mesh position={[-1.9, 0, 0]} rotation={[0, 0, -0.8]}>
        <coneGeometry args={[0.9, 1.8, 20]} />
        <meshStandardMaterial color="#a5b4fc" emissive="#818cf8" emissiveIntensity={0.8} metalness={0.7} roughness={0.25} />
      </mesh>

      <mesh position={[1.9, 0, 0]} rotation={[0, 0, 0.8]}>
        <coneGeometry args={[0.9, 1.8, 20]} />
        <meshStandardMaterial color="#a5b4fc" emissive="#818cf8" emissiveIntensity={0.8} metalness={0.7} roughness={0.25} />
      </mesh>

      <mesh position={[0, -1.5, -0.2]}>
        <boxGeometry args={[0.6, 0.7, 1.2]} />
        <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={2.2} />
      </mesh>
    </group>
  );
}

function WarpRings() {
  const ringRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ringRef.current) {
      return;
    }

    ringRef.current.rotation.z = clock.getElapsedTime() * 0.2;
  });

  return (
    <group ref={ringRef}>
      {Array.from({ length: 7 }).map((_, index) => (
        <mesh key={index} position={[0, 0, -12 - index * 2.2]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[5 + index * 1.4, 0.06, 10, 120]} />
          <meshStandardMaterial color={index % 2 === 0 ? '#93c5fd' : '#c4b5fd'} emissive={index % 2 === 0 ? '#7dd3fc' : '#a78bfa'} emissiveIntensity={1.5} transparent opacity={0.55} />
        </mesh>
      ))}
    </group>
  );
}

function NebulaCloud() {
  return (
    <group>
      <mesh position={[-8, 3, -18]}>
        <sphereGeometry args={[4.5, 32, 32]} />
        <meshStandardMaterial color="#a78bfa" emissive="#8b5cf6" emissiveIntensity={0.85} transparent opacity={0.5} />
      </mesh>
      <mesh position={[8, -2, -16]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.85} transparent opacity={0.45} />
      </mesh>
      <mesh position={[0, -6, -20]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshStandardMaterial color="#f472b6" emissive="#ec4899" emissiveIntensity={0.7} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function Starfield() {
  const pointsRef = useRef<THREE.Points>(null);

  const starGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(1800 * 3);

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 80;
      positions[i + 1] = (Math.random() - 0.5) * 35;
      positions[i + 2] = (Math.random() - 0.5) * 55;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.z = clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={pointsRef} geometry={starGeometry}>
      <pointsMaterial color="#e2e8f0" size={0.16} sizeAttenuation transparent opacity={0.9} />
    </points>
  );
}

function SpaceScene() {
  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 52 }} dpr={[1, 2]}>
      <color attach="background" args={['#040816']} />
      <ambientLight intensity={0.8} />
      <pointLight position={[0, 0, 10]} intensity={26} color="#93c5fd" />
      <pointLight position={[-10, 5, -12]} intensity={20} color="#c084fc" />
      <pointLight position={[10, -4, -12]} intensity={20} color="#22d3ee" />

      <Starfield />
      <NebulaCloud />
      <WarpRings />
      <Ship />
    </Canvas>
  );
}

export default SpaceScene;
