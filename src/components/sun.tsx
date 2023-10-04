import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import SunMap from "@/texture/sun/sunmap.jpg"; // Importe a textura base correta para Saturno
import SunSpecMap from "@/texture/sun/sunspecmap.jpg"; // Importe a textura para os anéis de Saturno
import { TextureLoader } from "three";
import SceneBackground1 from "@/texture/background/8k_stars_milky_way.jpg";


export const Sun = () => {
  const sunRef = useRef<THREE.Mesh>(null!);

  const [colorMap, sunSpecMap] = useLoader(TextureLoader, [
    SunMap.src,
    SunSpecMap.src,
  ]);

  useFrame(({ clock }) => {
    // Rotação suave do Sol
    const elapsedTime = clock.getElapsedTime();
    sunRef.current.rotation.y = elapsedTime / 20; // Ajuste a velocidade de rotação conforme necessário
  });

  const { scene } = useThree();
  const texture = useLoader(TextureLoader, SceneBackground1.src);
  texture.encoding = THREE.SRGBColorSpace;
  scene.background = texture;

  return (
    <>
      <mesh ref={sunRef} position={[0, 0, 0]}>
      <sphereGeometry args={[70, 32 * 2, 32 * 2]} /> {/* Tamanho do Sol */}
      <meshStandardMaterial
        map={colorMap}
        emissiveMap={sunSpecMap}
        emissiveIntensity={2}
        emissive={"#FFD700"}
        side={THREE.DoubleSide} // A face interna também será visível
        
      />
    </mesh>
    </>
  );
};
