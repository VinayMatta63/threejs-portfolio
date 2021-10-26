import React, { useRef, useState } from "react";
import { PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Raycaster, SpriteMaterial, Vector3 } from "three";
import Plate from "../helpers/plate";
import SpriteComponent from "../helpers/SpriteComponent";

import {
  openProfileTab,
  openProjectGithub,
  openProjectTab,
} from "../helpers/helpers";

const CameraControls = ({ icon }) => {
  const [show, setShow] = useState(false);
  const [ascend, setAscend] = useState(false);
  const [obj, setObj] = useState(null);
  const [visit, setVisit] = useState(null);
  const [contact, setContact] = useState(null);
  const z = 79;
  const z_sub = 8;
  let moveForward = false;
  let moveBackward = false;
  let moveLeft = false;
  let moveRight = false;
  let canJump = false;
  const controlsRef = useRef(null);
  const objects = [];
  let raycaster;
  const sf = useRef(null);
  const iic = useRef(null);
  const chat = useRef(null);
  const museum = useRef(null);
  const ttt = useRef(null);
  const gh = useRef(null);
  const li = useRef(null);
  const lc = useRef(null);
  const cc = useRef(null);
  const hr = useRef(null);
  const arrow = useRef(null);
  const arrow1 = useRef(null);
  const contactRef = useRef(null);

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
    switch (e.code) {
      case "KeyF":
        setAscend(!ascend);
        onObject = [];
        break;
      default:
        break;
    }
    if (onObject[0]) {
      switch (e.code) {
        case "KeyE":
          openProfileTab(gh, li, lc, cc, hr, onObject[0]);
          break;
        case "KeyV":
          openProjectTab(sf, iic, chat, museum, ttt, onObject[0]);
          break;
        case "KeyG":
          openProjectGithub(sf, iic, chat, museum, ttt, onObject[0]);
          break;
        case "KeyB":
          if (onObject[0].object?.uuid === sf.current.uuid) setObj("sf");
          if (onObject[0].object?.uuid === iic.current.uuid) setObj("iic");
          if (onObject[0].object?.uuid === chat.current.uuid) setObj("chat");
          if (onObject[0].object?.uuid === ttt.current.uuid) setObj("ttt");
          if (onObject[0].object?.uuid === museum.current.uuid)
            setObj("museum");
          break;

        default:
          setObj(null);
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
    !objects.includes(ttt.current) && objects.push(ttt.current);
    !objects.includes(gh.current) && objects.push(gh.current);
    !objects.includes(li.current) && objects.push(li.current);
    !objects.includes(lc.current) && objects.push(lc.current);
    !objects.includes(cc.current) && objects.push(cc.current);
    !objects.includes(hr.current) && objects.push(hr.current);
    !objects.includes(contactRef.current) && objects.push(contactRef.current);

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
    if (
      onObject.length > 0 &&
      onObject[0].object &&
      (onObject[0].object.uuid === gh.current.uuid ||
        onObject[0].object.uuid === li.current.uuid ||
        onObject[0].object.uuid === lc.current.uuid ||
        onObject[0].object.uuid === cc.current.uuid ||
        onObject[0].object.uuid === hr.current.uuid)
    )
      setVisit(true);
    else setVisit(false);
    if (
      onObject.length > 0 &&
      onObject[0].object &&
      onObject[0].object.uuid === contactRef.current.uuid
    ) {
      contact && window.open("https://vinay-matta.web.app/contact", "contact");
      setContact(false);
    } else {
      setContact(true);
    }
    setShow(onObject.length > 0);

    const elapsedTime = clock.getElapsedTime();
    const delta = elapsedTime - prevTime;
    prevTime = elapsedTime;
    if (arrow.current) {
      arrow.current.position.y += Math.sin(elapsedTime * 10) * 0.1;
    }
    if (arrow1.current) {
      arrow1.current.position.y += Math.sin(elapsedTime * 10) * 0.1;
    }
    velocity.x -= velocity.x * delta * 3.5;
    velocity.z -= velocity.z * delta * 3.5;
    velocity.y -= 9.8 * 100 * delta; // 100.0 = mass

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize();

    if (moveForward || moveBackward) velocity.z -= direction.z * 50 * delta;
    if (moveLeft || moveRight) velocity.x -= direction.x * 50 * delta;
    controlsRef.current.moveRight(-velocity.x * delta);
    controlsRef.current.moveForward(-velocity.z * delta);
    if (!ascend)
      controlsRef.current.getObject().position.y += velocity.y * delta;
    // new behavior
    else controlsRef.current.getObject().position.y = 40; // new behavior

    if (controlsRef.current.getObject().position.y < 10) {
      velocity.y = 0;
      controlsRef.current.getObject().position.y = 5;
      canJump = true;
    }
    if (
      controlsRef.current.getObject().position.x > 200 ||
      controlsRef.current.getObject().position.z > 200 ||
      controlsRef.current.getObject().position.x < -200 ||
      controlsRef.current.getObject().position.z < -200
    ) {
      controlsRef.current.getObject().position.x = 0;
      controlsRef.current.getObject().position.z = 25;
    }
  });
  const material = new SpriteMaterial({ map: icon });
  controlsRef.current &&
    window.addEventListener("touchstart", (e) => {
      controlsRef.current.lock();
    });

  return (
    <>
      <PointerLockControls ref={controlsRef} selector="#selector" />
      <Plate ref={sf} position={[-120 + 10, 0.01, -10]} />
      <Plate ref={iic} position={[-60 - 10, 0.01, -40]} />
      <Plate ref={chat} position={[-120 + 10, 0.01, -70]} />
      <Plate ref={museum} position={[-60 - 10, 0.01, -140]} />
      <Plate ref={ttt} position={[-120 + 10, 0.01, -140]} />
      {[hr, cc, lc, li, gh].map((ref, index) => (
        <Plate
          ref={ref}
          position={[-3, 0.01, z - z_sub * index]}
          args={[5, 5]}
        />
      ))}
      <Plate ref={contactRef} position={[0, 0.5, -8]} args={[5, 5]} />
      {show ? (
        visit ? (
          <SpriteComponent controlsRef={controlsRef} type="links" />
        ) : (
          <SpriteComponent controlsRef={controlsRef} obj={obj} />
        )
      ) : (
        <>
          <sprite
            material={material}
            position={[-120 + 10, 10, -10]}
            scale={[10, 10, 10]}
            ref={arrow}
          />
          <sprite
            material={material}
            position={[-3, 10, z - z_sub * 4]}
            scale={[10, 10, 10]}
            ref={arrow1}
          />
        </>
      )}
    </>
  );
};

export default CameraControls;
