import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

export const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();

  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  let screenScale = null,
    screenPosition = null;

  if (window.innerWidth < 768) {
    screenScale = [1.5, 1.5, 1.5];
    screenPosition = [10, -1.5, 0];
  } else {
    screenScale = [3, 3, 3];
    screenPosition = [0, -4, -4];
  }

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref} position={screenPosition} scale={screenScale}>
      <primitive object={scene} />
    </mesh>
  );
};
