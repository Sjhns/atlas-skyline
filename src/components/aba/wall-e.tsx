import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Robot = () => {
  const { scene, animations } = useGLTF("/3d/robot-draco.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (!actions.Idle) return;

    actions.Idle.play();
    scene.traverse(
      (obj: any) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  }, [actions, scene]);

  return <primitive object={scene} />;
};

export const WallE = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute flex flex-col right-0 top-0 p-7 space-y-5">
        <div className="">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Processamento
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[100%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">100%</span>
          </div>
        </div>

        <div className="">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Armazenamento
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[30%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">30%</span>
          </div>
        </div>

        <div className="">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Poder de fogo
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[70%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">1500%</span>
          </div>
        </div>

        <div className="mb-10">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Capacidade analítica
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[80%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">80%</span>
          </div>
        </div>

        <div className="mb-10">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Capacidade de manobra
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[70%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">
              9000 km/h
            </span>
          </div>
        </div>

        <div className="mb-10">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Aceleração máxima
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[70%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">
              20 m/s²
            </span>
          </div>
        </div>

        {/* -------------------------- */}
      </div>

      {/* -------------------------- */}

      <div className="absolute flex flex-col left-0 top-0 p-7 space-y-9">
        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              All Systems check
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Rendezvous burn
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              prepare rendezvous burn
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-green-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Thermal shield
            </span>
            <span className="text-sm font-bold text-gray-300 block">
              Applied
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Burn go/no-go
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-orange-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Power completion
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Awaiting
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Station deck check
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>
      </div>

      {/* -------------------------- */}

      <>
        <Canvas
          shadows
          camera={{
            fov: 40,
            position: [0, 7, 12],
          }}
        >
          {/* <CameraShake
              maxYaw={0.1} // Max amount camera can yaw in either direction
              maxPitch={0.1} // Max amount camera can pitch in either direction
              maxRoll={0.1} // Max amount camera can roll in either direction
              yawFrequency={0.1} // Frequency of the the yaw rotation
              pitchFrequency={0.1} // Frequency of the pitch rotation
              rollFrequency={0.1} // Frequency of the roll rotation
              intensity={1} // initial intensity of the shake
              decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
            /> */}
          <Robot />
          {/* <Stage>
            </Stage> */}
          <ambientLight intensity={2} />
          <OrbitControls />
        </Canvas>
      </>
    </div>
  );
};
