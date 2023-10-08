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

        <SimpleMars position={[0, 2, 0]} />
      </Canvas>

      <div className="absolute w-full bottom-0 flex items-end justify-end p-8">
        <div className="mr-10">
          <h3 className="font-bold">target latitude</h3>

          <span className="font-bold">26&deg; 30&apos; 0&quot; N</span>
        </div>

        <div className="mr-16">
          <h3 className="font-bold">target longitude</h3>

          <span className="font-bold">26&deg; 30&apos; 0&quot; N</span>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <div className="flex flex-col items-center justify-center">
            <span className="text-xs font-bold uppercase">camera</span>

            <span className="text-xs font-bold uppercase">Vg-RT754 Skyline 8000</span>
          </div>

          <button
            onClick={() => setShowPoints(!showPoints)}
            className="bg-[#111B52] text-white py-3 px-7 rounded-3xl border font-bold uppercase hover:opacity-90"
          >
            Configurações
          </button>
        </div>
      </div>
    </div>
  );
};
