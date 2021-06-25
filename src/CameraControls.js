import React, { useRef } from "react";
import { PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const CameraControls = () => {
  let moveForward = false;
  let moveBackward = false;
  let moveLeft = false;
  let moveRight = false;
  let canJump = false;
  const controlsRef = useRef(null);

  let prevTime = 0;
  const velocity = new Vector3();
  const direction = new Vector3();
  const onKeyDown = function (event) {
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        moveForward = true;
        break;

      case "ArrowLeft":
      case "KeyA":
        moveLeft = true;
        break;

      case "ArrowDown":
      case "KeyS":
        moveBackward = true;
        break;

      case "ArrowRight":
      case "KeyD":
        moveRight = true;
        break;

      case "Space":
        if (canJump === true) velocity.y += 5;
        canJump = false;
        break;
      default:
        break;
    }
  };

  const onKeyUp = function (event) {
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        moveForward = false;
        break;

      case "ArrowLeft":
      case "KeyA":
        moveLeft = false;
        break;

      case "ArrowDown":
      case "KeyS":
        moveBackward = false;
        break;

      case "ArrowRight":
      case "KeyD":
        moveRight = false;
        break;
      default:
        break;
    }
  };

  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);
  const welcome = document.getElementById("selector");
  const canvas = document.getElementById("canvas");

  useFrame(({ clock }) => {
    controlsRef.current.addEventListener("lock", () => {
      welcome.style.display = "none";
      canvas.style.display = "block";
    });
    controlsRef.current.addEventListener("unlock", function () {
      welcome.style.display = "flex";
      canvas.style.display = "none";
    });
    const elapsedTime = clock.getElapsedTime();
    const delta = elapsedTime - prevTime;
    prevTime = elapsedTime;
    velocity.x -= velocity.x * delta * 5;
    velocity.z -= velocity.z * delta * 5;

    velocity.y -= 9.8 * 100 * delta; // 100.0 = mass

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize(); // this ensures consistent movements in all directions

    if (moveForward || moveBackward) velocity.z -= direction.z * 50 * delta;
    if (moveLeft || moveRight) velocity.x -= direction.x * 50 * delta;
    controlsRef.current.moveRight(-velocity.x * delta);
    controlsRef.current.moveForward(-velocity.z * delta);

    controlsRef.current.getObject().position.y += velocity.y * delta; // new behavior

    if (controlsRef.current.getObject().position.y < 10) {
      velocity.y = 0;
      controlsRef.current.getObject().position.y = 5;
      //   setCanJump(true);
    }
  });

  return (
    <>
      <PointerLockControls ref={controlsRef} selector="#selector" />
    </>
  );
};

export default CameraControls;
