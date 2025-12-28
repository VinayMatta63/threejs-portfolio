import { useControls } from "leva";

const useDefaults = () => {
  const physics = useControls("Physics", {
    debug: {
      label: "Debug",
      value: true,
    },
  });

  const floor = useControls("Floor", {
    xWrap: {
      label: "xWrap",
      value: 200,
      step: 10,
      min: 0,
      max: 400,
    },
    yWrap: {
      label: "yWrap",
      value: 200,
      step: 10,
      min: 0,
      max: 400,
    },
  });

  const camera = useControls("Camera", {
    cameraDistance: {
      label: "Distance",
      value: 35,
      step: 0.5,
      min: 0,
      max: 100,
    },
    cameraHeight: {
      label: "Height",
      value: 20,
      step: 0.5,
      min: 0,
      max: 100,
    },
    lookAhead: {
      label: "Angle",
      value: -2,
      step: 0.5,
      min: -20,
      max: 20,
    },
    cameraSmoothing: {
      label: "Smoothing",
      value: 6,
      step: 0.5,
      min: 0,
      max: 20,
    },
  });

  const player = useControls("Player", {
    scale: {
      label: "Scale",
      value: 2,
      step: 0.1,
      min: 1,
      max: 5,
    },
    movementSpeed: {
      label: "Speed",
      value: 12,
      step: 0.5,
      min: 5,
      max: 15,
    },
    sprintMultiplier: {
      label: "Sprint Multiplier",
      value: 1.8,
      step: 0.1,
      min: 1,
      max: 3,
    },
  });

  return { physics, floor, camera, player };
};

export default useDefaults;
