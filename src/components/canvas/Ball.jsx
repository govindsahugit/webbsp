import React from "react";
import { SectionWrapper } from "../../hoc";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Decal,
  useTexture,
  Float,
  Preload,
} from "@react-three/drei";
import Loader from "../Loader";
import { Suspense } from "react";

const Ball = ({ ImgUrl }) => {
  const [decal] = useTexture([ImgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-2}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => (
  <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<Loader />}>
      <OrbitControls enableZoom={false} />
      <Ball ImgUrl={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;
