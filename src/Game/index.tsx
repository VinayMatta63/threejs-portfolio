import React, { forwardRef } from "react";
import { Group } from "three";
import Squid from "./Squid";

interface GameProps {
  position?: [number, number, number];
  squidDoll?: any;
}

const Game = forwardRef<Group, GameProps>(({ position, squidDoll }, group) => {
  return (
    <group position={position}>
      <Squid ref={group} squidDoll={squidDoll} />
    </group>
  );
});

Game.displayName = "Game";

export default Game;
