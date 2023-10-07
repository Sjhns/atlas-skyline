import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SimpleMars } from "../planets/simple-mars";
import { useState } from "react";

export const PlanetPainel = () => {
  const [showPoints, setShowPoints] = useState(false);

  return (
    <div className="w-full relative">
      <Canvas
        camera={{
          position: [0, 0, 26],
        }}
      >
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          minDistance={25}
          maxDistance={700}
          zoomSpeed={2}
          panSpeed={0.5}
          rotateSpeed={0.4}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />

        <ambientLight intensity={2} />

        <SimpleMars position={[0, 0, 0]} />
      </Canvas>

      <div className="absolute w-full bottom-0 flex items-center justify-end p-8">
        <button
          onClick={() => setShowPoints(!showPoints)}
          className="bg-[#111B52] text-white py-3 px-7 rounded-3xl border font-bold uppercase hover:opacity-90"
        >
          Configurações
        </button>
      </div>
    </div>
  );
};
