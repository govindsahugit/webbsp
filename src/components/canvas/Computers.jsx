import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={
          window.innerWidth < 480
            ? 0.4
            : window.innerWidth < 768
            ? 0.55
            : window.innerWidth < 1024
            ? 0.65
            : 0.75
        }
        position={
          window.innerWidth < 480
            ? [0, -1.5, -0.5]
            : window.innerWidth < 768
            ? [0, -2, -0.8]
            : window.innerWidth < 1024
            ? [0, -2.5, -1.2]
            : [0, -3.25, -1.5]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
