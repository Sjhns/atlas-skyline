"use client";

import { Canvas } from "@react-three/fiber";
import { SimpleMars } from "../planets/simple-mars";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { SimpleEarth } from "../planets/simple-earth";

export const ChoosePlanet = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    });
  }, [controls]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls}
        exit={{ opacity: 0, scale: 0.8 }}
        className="absolute top-0 w-full"
      >
        <div className="w-full flex items-center justify-center flex-col pt-5">
          <h3 className="text-white text-2xl font-extralight">
            Escolha um planeta para explorar
          </h3>
        </div>
      </motion.div>

      {/* <div className="w-full"> */}

      <Canvas
        camera={{
          position: [0, 0, 50],
          fov: 75,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 1000,
        }}
      >
        <OrbitControls
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
          // minAzimuthAngle={-Math.PI / 2}
          // maxAzimuthAngle={Math.PI / 2}
          minDistance={10}
          zoomSpeed={2}
          panSpeed={0.5}
          //   rotateSpeed={0.4}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
        <ambientLight intensity={2} />

        <SimpleMars position={[-20, 0, 0]} />
        <SimpleEarth position={[20, 0, 0]} />
      </Canvas>
    </>
  );
};

// </div>
