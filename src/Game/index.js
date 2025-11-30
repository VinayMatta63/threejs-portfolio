import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import Squid from "./Squid";
const Game = forwardRef(({ position, squidDoll }, group) => {
    return (_jsx("group", { position: position, children: _jsx(Squid, { ref: group, squidDoll: squidDoll }) }));
});
Game.displayName = "Game";
export default Game;
