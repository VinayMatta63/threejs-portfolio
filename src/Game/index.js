import React, { forwardRef } from "react";
import Squid from "../Squid";

const Game = forwardRef(({ position }, group) => {
  return (
    <group position={position}>
      <Squid ref={group} />
    </group>
  );
});

export default Game;
