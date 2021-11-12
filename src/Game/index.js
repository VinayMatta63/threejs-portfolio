import React, { forwardRef } from "react";
import Squid from "./Squid";

const Game = forwardRef(({ position, squidDoll }, group) => {
  return (
    <group position={position}>
      <Squid ref={group} squidDoll={squidDoll} />
    </group>
  );
});

export default Game;
