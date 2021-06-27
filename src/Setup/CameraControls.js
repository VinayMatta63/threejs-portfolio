import React, { useRef } from "react";
import { PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Raycaster, Vector3 } from "three";

const CameraControls = () => {
  let moveForward = false;
  let moveBackward = false;
  let moveLeft = false;
  let moveRight = false;
  // let sprint = false;
  let canJump = false;
  const controlsRef = useRef(null);
  const objects = [];
  let raycaster;

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
        if (canJump === true) velocity.y += 350;
        canJump = false;
        break;
      case "ShiftLeft":
        velocity.x *= 15;
        velocity.z *= 15;
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
      case "ShiftLeft":
        velocity.x /= 15;
        velocity.z /= 15;
        break;
      default:
        break;
    }
  };

  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);
  const welcome = document.getElementById("selector");
  const canvas = document.getElementById("canvas");

  raycaster = new Raycaster(new Vector3(), new Vector3(0, -1, 0), 0.1, 100);

  useFrame(({ clock }) => {
    controlsRef.current.addEventListener("lock", () => {
      welcome.style.display = "none";
      canvas.style.display = "block";
    });
    controlsRef.current.addEventListener("unlock", function () {
      welcome.style.display = "flex";
      canvas.style.display = "none";
    });

    raycaster.ray.origin.copy(controlsRef.current.getObject().position);
    raycaster.ray.direction.copy(
      controlsRef.current.getDirection(new Vector3(0, 0, 0))
    );
    // raycaster.ray.origin.y -= 5;

    const intersections = raycaster.intersectObjects(objects);
    // console.log(intersections, raycaster);
    const onObject = intersections.length > 0;

    const elapsedTime = clock.getElapsedTime();
    const delta = elapsedTime - prevTime;
    prevTime = elapsedTime;
    velocity.x -= velocity.x * delta * 4;
    velocity.z -= velocity.z * delta * 4;

    velocity.y -= 9.8 * 100 * delta; // 100.0 = mass

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize(); // this ensures consistent movements in all directions

    if (moveForward || moveBackward) velocity.z -= direction.z * 50 * delta;
    if (moveLeft || moveRight) velocity.x -= direction.x * 50 * delta;
    controlsRef.current.moveRight(-velocity.x * delta);
    controlsRef.current.moveForward(-velocity.z * delta);
    if (onObject === true) {
      velocity.y = Math.max(0, velocity.y);
      canJump = true;
    }

    controlsRef.current.getObject().position.y += velocity.y * delta; // new behavior

    if (controlsRef.current.getObject().position.y < 10) {
      velocity.y = 0;
      controlsRef.current.getObject().position.y = 5;
      canJump = true;
    }
  });

  return (
    <>
      <PointerLockControls ref={controlsRef} selector="#selector" />
    </>
  );
};

export default CameraControls;
