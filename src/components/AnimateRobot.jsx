"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Float, useAnimations } from "@react-three/drei";

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
      <primitive object={scene} scale={2.5} position={[0, -1.5, 0]} />
    </group>
  );
}

export default function AnimateRobot() {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="w-full h-full min-h-[600px]  bg-transparent">
      <Canvas camera={{ position: [12, 6, 2], fov: 45 }}>
        {/* 💡 Basic lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        <pointLight position={[-3, 4, -3]} intensity={0.8} color="#ffffff" />

        {/* 🤖 Floating robot with original colors */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <RobotModel />
        </Float>

        {/* 🎮 Orbit controls */}
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
