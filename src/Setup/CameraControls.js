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
  const sf = useRef(null);
  const iic = useRef(null);
  const chat = useRef(null);
  const museum = useRef(null);

  let onObject = [];

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
  document.addEventListener("keypress", (e) => {
    if (onObject[0]) {
      switch (e.code) {
        case "KeyV":
          if (onObject[0].object.uuid === sf.current.uuid)
            window.open("https://social-freaks.vercel.app/", "_blank");
          if (onObject[0].object.uuid === iic.current.uuid)
            window.open("https://iicdcrustm.com/home/", "_blank");
          if (onObject[0].object.uuid === chat.current.uuid)
            window.open("https://whats-clone-1c76b.web.app/", "_blank");
          if (onObject[0].object.uuid === museum.current.uuid)
            window.open("https://museum-counsel.herokuapp.com/", "_blank");
          break;
        case "KeyG":
          if (onObject[0].object.uuid === sf.current.uuid)
            window.open(
              "https://github.com/VinayMatta63/Social-Freaks",
              "_blank"
            );
          if (onObject[0].object.uuid === iic.current.uuid)
            window.open("https://github.com/VinayMatta63/web", "_blank");
          if (onObject[0].object.uuid === chat.current.uuid)
            window.open("https://github.com/VinayMatta63/Chat-App", "_blank");
          if (onObject[0].object.uuid === museum.current.uuid)
            window.open(
              "https://github.com/VinayMatta63/Museum-Counsel",
              "_blank"
            );
          break;
        default:
          break;
      }
    }
  });
  const welcome = document.getElementById("selector");
  const canvas = document.getElementById("canvas");

  raycaster = new Raycaster(new Vector3(), new Vector3(0, -1, 0), 0, 10);

  useFrame(({ clock }) => {
    !objects.includes(sf.current) && objects.push(sf.current);
    !objects.includes(iic.current) && objects.push(iic.current);
    !objects.includes(chat.current) && objects.push(chat.current);
    !objects.includes(museum.current) && objects.push(museum.current);

    controlsRef.current.addEventListener("lock", () => {
      welcome.style.display = "none";
      canvas.style.display = "block";
    });
    controlsRef.current.addEventListener("unlock", function () {
      welcome.style.display = "flex";
      canvas.style.display = "none";
    });

    raycaster.ray.origin.copy(controlsRef.current.getObject().position);

    onObject = raycaster.intersectObjects(objects);

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
      <mesh
        position={[-120 + 10, 0.1, -10]}
        rotation={[-Math.PI / 2, 0, 0]}
        ref={sf}
      >
        <planeBufferGeometry args={[6, 6]} />
        <meshStandardMaterial attach="material" color={0xc34cff} />
      </mesh>
      <mesh
        position={[-60 - 10, 0.1, -40]}
        rotation={[-Math.PI / 2, 0, 0]}
        ref={iic}
      >
        <planeBufferGeometry args={[6, 6]} />
        <meshStandardMaterial attach="material" color={0xc34cff} />
      </mesh>
      <mesh
        position={[-120 + 10, 0.1, -70]}
        rotation={[-Math.PI / 2, 0, 0]}
        ref={chat}
      >
        <planeBufferGeometry args={[6, 6]} />
        <meshStandardMaterial attach="material" color={0xc34cff} />
      </mesh>
      <mesh
        position={[-60 - 10, 0.1, -135]}
        rotation={[-Math.PI / 2, 0, 0]}
        ref={museum}
      >
        <planeBufferGeometry args={[6, 6]} />
        <meshStandardMaterial attach="material" color={0xc34cff} />
      </mesh>
    </>
  );
};

export default CameraControls;
