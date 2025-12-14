export const LOADER_CONFIG = {
  containerStyles: {
    background:
      "radial-gradient(circle farthest-corner at center top,#071021,#19324a)",
  },
  innerStyles: {
    backgroundColor: "salmon",
    width: "50vw",
  },
  barStyles: {
    backgroundColor: "lightgreen",
  },
  dataInterpolation: (p: number) => `Loading ${Math.round(p)}%`,
  initialState: (active: boolean) => active,
  dataStyles: {
    color: "#fafafa",
    fontSize: "25px",
    fontFamily: "Raleway",
    fontWeight: "500",
  },
};
