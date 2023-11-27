import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import { HomeInfo, Loader } from "../components";
import { Bird, Island, Sky, Plane } from "../models";

import {
  adjustIslandForScreenSize,
  adjustPlaneForScreenSize,
} from "../helpers/modelHelpers";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const { planePosition, planeScale } = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
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

          <Bird />

          <Sky isRotating={isRotating} />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
