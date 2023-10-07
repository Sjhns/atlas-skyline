import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SimpleMars } from "../planets/simple-mars";


export const PlanetPainel = () => {
  return (
    <div className="w-full">
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
          panSpeed={0.5} // significa a velocidade de movimento da câmera
          rotateSpeed={0.4} // velocidade de rotação
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
        {/* <pointLight color="#f6f3e a" position={[-5, 5, 20]} intensity={100} />
          <pointLight color="#f6f3ea" position={[-5, 0, 20]} intensity={100} />
          <pointLight color="#f6f3ea" position={[-5, -5, 20]} intensity={100} />
          <pointLight color="#f6f3ea" position={[-5, -10, 20]} intensity={100} /> */}
        <ambientLight intensity={2} />
        {/* <SimpleEarth position={[0, 0, 0]} /> */}
        <SimpleMars position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};
