import { forwardRef } from "react";
import Squid from "../models/SquidModel";
import { Group } from "three";
import { GroupProps } from "@react-three/fiber";

interface GameProps extends GroupProps {
  squidDoll: any;
}

const Game = forwardRef<Group, GameProps>(({ squidDoll, ...props }, group) => {
  return (
    <group {...props}>
      <Squid ref={group} squidDoll={squidDoll} />
    </group>
  );
});

export default Game;
