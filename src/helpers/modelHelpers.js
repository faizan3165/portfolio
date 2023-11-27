export const adjustIslandForScreenSize = () => {
  let screenScale = null,
    screenPosition = [0, -6.5, -43],
    islandRotation = [0.1, 4.7077, 0];

  if (window.innerWidth < 768) {
    screenScale = [0.9, 0.9, 0.9];
  } else {
    screenScale = [1, 1, 1];
  }

  return [screenScale, screenPosition, islandRotation];
};
