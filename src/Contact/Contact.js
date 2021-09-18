import { Loader } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import axios from "axios";
import React, { useState } from "react";
import Particles from "react-particles-js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./Contact.css";
import ContactModel from "./ContactModel";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitEmail = async (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://vinay-matta-server.herokuapp.com/send",
      // url: "http://localhost:3001/send",
      headers: { "Content-Type": "application/json" },
      data: { name: name, email: email, subject: subject, message: message },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };
  const [messageModel] = useLoader(GLTFLoader, ["/models/message.glb"]);

  return (
    <div className="section">
      <Canvas
        style={{
          height: "100vh",
          width: "50vw",
        }}
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 8] }}
        id="canvas-contact"
        // shadows
      >
        <ContactModel messageModel={messageModel} />
      </Canvas>

      <Loader
        containerStyles={{
          background:
            "radial-gradient(circle farthest-corner at center top,#071021,#19324a)",
        }} // Flex layout styles
        innerStyles={{
          backgroundColor: "salmon",
          width: "50vw",
        }} // Inner container styles
        barStyles={{
          backgroundColor: "lightgreen",
        }} // Loading-bar styles
        dataInterpolation={(p) => `Loading ${Math.round(p)}%`}
        initialState={(active) => active}
        dataStyles={{
          color: "#fafafa",
          fontSize: "25px",
          fontFamily: "Raleway",
          fontWeight: "500",
        }}
      />

      <div className="container">
        <Particles
          id="particles"
          params={{
            particles: {
              number: {
                value: 500,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: "#91fff8",
                // value: "#daf277",
              },
              opacity: {
                value: 0.5,
                anim: {
                  enable: true,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: true,
                  speed: 5,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                speed: 0.4,
              },
            },
          }}
        />
        <div className="right">
          <h2 className="title">Contact Me</h2>
          <p className="tag">
            Leave a message for me. I will be more than happy to hear from you
            :)
          </p>
          <hr />
          <form
            id="contact-form"
            onSubmit={(e) => submitEmail(e)}
            method="POST"
          >
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <input
                    placeholder="Name"
                    id="name"
                    type="text"
                    className="form-control"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    placeholder="Email"
                    id="email"
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                placeholder="Subject"
                id="subject"
                type="text"
                className="form-control"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Message"
                id="message"
                className="form-control"
                rows="3"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="primary-btn submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
