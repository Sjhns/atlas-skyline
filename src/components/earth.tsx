"use client";

// import EarthNightMap from "@/texture/earth/8k_earth_nightmap.jpg";
import EarthDayMap from "@/texture/earth/8k_earth_daymap.jpg";
import EarthNormalMap from "@/texture/earth/8k_earth_normal_map.jpg";
import EarthSpecularMap from "@/texture/earth/8k_earth_specular_map.jpg";
import EarthCloudsMap from "@/texture/earth/8k_earth_clouds.jpg";

import * as THREE from "three";

import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";


type EarthProps = {
  handlePlanetClick: (planetName: "earth" | "mars" | "moon") => void;
}

export const Earth = ({handlePlanetClick}: EarthProps) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [
      EarthDayMap.src,
      EarthNormalMap.src,
      EarthSpecularMap.src,
      EarthCloudsMap.src,
    ]
  ); // useLoader é um gancho que carrega recursos assincronamente. Aqui, carregamos as texturas da Terra.

  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6; // 6 segundos para dar uma volta completa
    cloudsRef.current.rotation.y = elapsedTime / 6;
    // earthRef.current.rotation.x += 0.0001;
    // earthRef.current.rotation.z += 0.0001;
  });

  return (
    <>


      {/* <ambientLight intensity={4} /> */}
      {/*
        A luz ambiente é uma luz difusa que afeta todas as malhas na cena igualmente.
        */}

      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={40} />
      {/*
        A luz pontual é uma luz que irradia em todas as direções a partir de um único ponto. A luz pontual é usada para simular uma fonte de luz, como uma lâmpada. A propriedade color é usada para definir a cor da luz. A propriedade position é usada para definir a posição da luz. A propriedade intensity é usada para definir a intensidade da luz. A intensidade é a quantidade de luz emitida pela luz. O valor padrão é 1. Um valor de 0 significa que a luz não emite luz e um valor de 1 significa que a luz emite luz na intensidade total.
        */}

      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />

      {/* 
        
        A propriedade radius é usada para definir o raio da esfera que circunda as estrelas. O raio é a distância do centro da esfera até a superfície da esfera. A propriedade depth é usada para definir a profundidade da esfera. A profundidade é a distância do centro da esfera até o plano de corte. O plano de corte é o plano que define o limite da cena. A propriedade count é usada para definir o número de estrelas. A propriedade factor é usada para definir o tamanho das estrelas. A propriedade saturation é usada para definir a saturação das estrelas. A propriedade fade é usada para definir se as estrelas desaparecem quando se aproximam do plano de corte ou não. Se definido como true, as estrelas desaparecem quando se aproximam do plano de corte. Se definido como false, as estrelas não desaparecem quando se aproximam do plano de corte.
        
        */}

      <mesh ref={cloudsRef} 

      onClick={() => handlePlanetClick("earth")}
      
      >
        <sphereGeometry args={[2.005, 32 * 2, 32 * 2]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          transparent={true}
          depthWrite={true}
          side={THREE.DoubleSide} // significa que a malha será renderizada em ambos os lados do triângulo. Isso significa que a malha será renderizada mesmo se estivermos olhando para o lado de trás do triângulo. Exigi maior poder de processamento, mas é necessário para renderizar as nuvens.
        />
        {/* 
        
        A propriedade opacity é usada para definir a opacidade da malha. O valor padrão é 1. Um valor de 0 significa que a malha é completamente transparente e um valor de 1 significa que a malha é completamente opaca. A propriedade transparent é usada para definir se a malha é transparente ou não. Se definido como true, a malha é transparente. Se definido como false, a malha é opaca. A propriedade depthWrite é usada para definir se a malha escreve no buffer de profundidade ou não. Se definido como true, a malha escreve no buffer de profundidade. Se definido como false, a malha não escreve no buffer de profundidade. O buffer de profundidade é usado para determinar quais objetos estão mais próximos da câmera. Se a malha não escrever no buffer de profundidade, ela será renderizada por último, independentemente de sua posição na cena. Isso significa que a malha será renderizada por cima de todas as outras malhas, independentemente de sua posição na cena.
        */}
      </mesh>

      <mesh ref={earthRef}>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5} // significa a velocidade de movimento da câmera
          rotateSpeed={0.4} // velocidade de rotação
          // target={}
        />

        <sphereGeometry args={[2, 32 * 2, 32 * 2]} />
        {/* 
            
            O primeiro argumento é o raio da esfera, o segundo é o número de segmentos ao longo da largura e o terceiro é o número de segmentos ao longo da altura. Em termos simples, quanto maior o número de segmentos, mais suave será a esfera. 
            */}

        <meshPhongMaterial specularMap={specularMap} />
        {/*

        A propriedade specularMap é usada para definir o mapa de especularidade da malha. O mapa de especularidade é uma textura que define a cor especular da malha. A cor especular é a cor que aparece quando a luz é refletida na malha.
        */}

        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        {/* 
        
        A propriedade map é usada para definir a textura da malha. Ou seja, a textura é a imagem que será aplicada à malha.

        A propriedade normalMap é usada para definir o mapa normal da malha. O mapa normal é uma textura que define a normal da malha. A normal é a direção perpendicular à superfície da malha. A propriedade metalness é usada para definir o metal da malha. O metal é a quantidade de metal na malha. A propriedade roughness é usada para definir a aspereza da malha. A aspereza é a quantidade de aspereza na malha. Quanto menor o valor, mais suave é a malha. Quanto maior o valor, mais áspera é a malha.
        */}
      </mesh>
    </>
  );
};
