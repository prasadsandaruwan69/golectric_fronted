"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Float,
  useAnimations,
} from "@react-three/drei";

function RobotModel() {
  const group = useRef();
  const { scene, animations } = useGLTF("/robot.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // ✅ Keep original GLTF materials — don't modify
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.play();
    }
  }, [scene, actions]);

  return (
    <group ref={group}>
      {/* ↓↓↓  make robot go slightly down  ↓↓↓ */}
      <primitive object={scene} scale={2.5} position={[0, -2.8, 0]} />
    </group>
  );
}

export default function AnimateRobot() {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="w-full h-[500px] sm:h-[650px] bg-transparent mt-32">
      <Canvas camera={{ position: [12, 5, 2], fov: 45 }}>
        {/* 💡 Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        <pointLight position={[-3, 4, -3]} intensity={0.8} color="#ffffff" />

        {/* 🤖 Floating robot */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <RobotModel />
        </Float>

        {/* 🎮 Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={autoRotate}
          autoRotateSpeed={1.2}
          onStart={() => setAutoRotate(false)}
          onEnd={() => setTimeout(() => setAutoRotate(true), 3000)}
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
