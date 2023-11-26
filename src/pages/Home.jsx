import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Loader } from "../components";
import { Island, Sky } from "../models";

import { adjustIslandForScreenSize } from "../helpers/modelHelpers";

const Home = () => {
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div>

      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />

          <ambientLight intensity={0.5} />

          <hemisphereLight
            intensity={1}
            skyColor={"#b1e1ff"}
            groundColor={"#000000"}
          />

          <Sky />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
