import React, { useRef, useState } from "react";
import { PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Raycaster, SpriteMaterial, Vector3 } from "three";
import { Html } from "@react-three/drei";

const CameraControls = ({ icon }) => {
  const [show, setShow] = useState(false);
  const [obj, setObj] = useState(null);
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
  const arrow = useRef(null);

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
        case "KeyB":
          if (onObject[0].object?.uuid === sf.current.uuid) setObj("sf");
          if (onObject[0].object?.uuid === iic.current.uuid) setObj("iic");
          if (onObject[0].object?.uuid === chat.current.uuid) setObj("chat");
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
    setShow(onObject.length > 0);

    const elapsedTime = clock.getElapsedTime();
    const delta = elapsedTime - prevTime;
    prevTime = elapsedTime;
    if (arrow.current) {
      arrow.current.position.y += Math.sin(elapsedTime * 10) * 0.1;
    }
    velocity.x -= velocity.x * delta * 4;
    velocity.z -= velocity.z * delta * 4;
    velocity.y -= 9.8 * 100 * delta; // 100.0 = mass

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize();

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
      <mesh
        position={[-120 + 10, 0.01, -10]}
        rotation={[-Math.PI / 2, 0, 0]}
        ref={sf}
      >
        <planeBufferGeometry args={[6, 6]} />
        <meshStandardMaterial
          attach="material"
          color={0xffffff}
          roughness={1}
        />
      </mesh>
      <mesh
        position={[-60 - 10, 0.01, -40]}
        rotation={[-Math.PI / 2, 0, 0]}
        ref={iic}
      >
        <planeBufferGeometry args={[6, 6]} />
        <meshStandardMaterial
          attach="material"
          color={0xffffff}
          roughness={1}
        />
      </mesh>
      <mesh
        position={[-120 + 10, 0.01, -70]}
        rotation={[-Math.PI / 2, 0, 0]}
        ref={chat}
      >
        <planeBufferGeometry args={[6, 6]} />
        <meshStandardMaterial
          attach="material"
          color={0xffffff}
          roughness={1}
        />
      </mesh>
      <mesh
        position={[-60 - 10, 0.01, -135]}
        rotation={[-Math.PI / 2, 0, 0]}
        ref={museum}
      >
        <planeBufferGeometry args={[6, 6]} />
        <meshStandardMaterial
          attach="material"
          color={0xffffff}
          roughness={1}
        />
      </mesh>
      {show ? (
        <Html
          sprite
          style={{
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.3)",
            fontSize: "30px",
            padding: "100px 200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          position={[
            controlsRef.current.getObject().position.x < -100
              ? controlsRef.current.getObject().position.x - 20
              : controlsRef.current.getObject().position.x + 20,
            controlsRef.current.getObject().position.y - 2,
            controlsRef.current.getObject().position.z,
          ]}
          transform
        >
          {obj ? (
            (obj === "sf" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Social Freaks</h2>
                <p>
                  An all-in-one next-js social media, youtube trailer playing,
                  shopping and chatting platform using next-auth, Redux,
                  Styled-components, firebase firestore, TMDB, stripe payments,
                  pwa and more.
                </p>
                <p
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Visit (Press V)</span>
                  <span>Github (Press G)</span>
                </p>
                <span>Move out of Plate to Exit</span>
              </div>
            )) ||
            (obj === "iic" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>IIC DCRUST Web App</h2>
                <p>
                  The Web Application of Institute Innovation Cell, an MIC
                  envisioned society for helping budding innovative minds.
                  Worked on this project as the team leader of front-end team.It
                  uses React.js, Styled-components and Material-UI for styling
                  as main front-end components.
                </p>
                <p
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Visit (Press V)</span>
                  <span>Github (Press G)</span>
                </p>
                <span>Move out of Plate to Exit</span>
              </div>
            )) ||
            (obj === "chat" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Chat App</h2>
                <p>
                  A React js Chat App with whatsapp-web like features including
                  emoji picker ,speech to text input and more. Backend
                  functionality of this app is implemented using MongoDB,
                  ExpressJS, NodeJS and made real-time using pusher.
                </p>
                <p
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Visit (Press V)</span>
                  <span>Github (Press G)</span>
                </p>
                <span>Move out of Plate to Exit</span>
              </div>
            )) ||
            (obj === "museum" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Museum Counsel</h2>
                <p>
                  A Web Application which gives its user the information about
                  museums in India including reviews and location. It uses Basic
                  web technologies like HTML, CSS, Bootstrap, JS, ExpressJS,
                  NodeJS, MongoDB and Ejs.
                </p>
                <p
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Visit (Press V)</span>
                  <span>Github (Press G)</span>
                </p>
                <span>Move out of Plate to Exit</span>
              </div>
            ))
          ) : (
            <>
              <span>Press B for brief introduction</span>
              <span>Press V to visit Project</span>
              <span>Press G to visit Project Github</span>
              <span>Move out of Plate to Exit</span>
            </>
          )}
        </Html>
      ) : (
        <sprite
          material={material}
          position={[-120 + 10, 10, -10]}
          scale={[10, 10, 10]}
          ref={arrow}
        />
      )}
    </>
  );
};

export default CameraControls;
