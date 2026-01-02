import { useControls } from "leva";

const useDefaults = () => {
  const physics = useControls("Physics", {
    debug: {
      label: "Debug",
      value: true,
    },
  });

  const effects = useControls("Effects", {
    enabled: {
      label: "Enabled",
      value: true,
    },
    bloomIntensity: {
      label: "Bloom Intensity",
      value: 2,
      step: 0.1,
      min: 0,
      max: 5,
    },
    bloomThreshold: {
      label: "Bloom Threshold",
      value: 0.25,
      step: 0.01,
      min: 0,
      max: 1,
    },
    bloomSmoothing: {
      label: "Bloom Smoothing",
      value: 3.5,
      step: 0.1,
      min: 0,
      max: 10,
    },
    bloomHeight: {
      label: "Bloom Height",
      value: 100,
      step: 10,
      min: 0,
      max: 500,
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

  return { physics, floor, camera, player, effects };
};

export default useDefaults;
