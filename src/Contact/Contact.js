import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import axios from "axios";
import { useState } from "react";
import "./Contact.css";
import ContactModel from "./ContactModel";
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [disabled, setDisabled] = useState(false);
    const submitEmail = async (e) => {
        e.preventDefault();
        setDisabled(true);
        axios({
            method: "POST",
            url: "https://vinay-matta-server.herokuapp.com/send",
            // url: "http://localhost:3001/send",
            headers: { "Content-Type": "application/json" },
            data: { name: name, email: email, subject: subject, message: message },
        }).then((response) => {
            console.log(response);
            if (response.data.flag === "success") {
                alert("Message Sent.");
                resetForm();
                setDisabled(false);
            }
            else if (response.data.flag === "fail") {
                alert(response.data.data);
                setDisabled(false);
            }
        });
    };
    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
    };
    const messageModel = useGLTF("/models/message.glb");
    return (_jsxs("div", { className: "section", children: [_jsx(Canvas, { style: {
                    height: "100vh",
                    width: "50vw",
                }, camera: { fov: 45, near: 0.1, far: 1000, position: [0, 0, 8] }, id: "canvas-contact", children: _jsx(ContactModel, { messageModel: messageModel }) }), _jsx(Loader, { containerStyles: {
                    background: "radial-gradient(circle farthest-corner at center top,#071021,#19324a)",
                }, innerStyles: {
                    backgroundColor: "salmon",
                    width: "50vw",
                }, barStyles: {
                    backgroundColor: "lightgreen",
                }, dataInterpolation: (p) => `Loading ${Math.round(p)}%`, initialState: (active) => active, dataStyles: {
                    color: "#fafafa",
                    fontSize: "25px",
                    fontFamily: "Raleway",
                    fontWeight: "500",
                } }), _jsx("div", { className: "container", children: _jsxs("div", { className: "right", children: [_jsx("h2", { className: "title", children: "Contact Me" }), _jsx("p", { className: "tag", children: "Leave a message for me. I will be more than happy to hear from you :)" }), _jsx("hr", {}), _jsxs("form", { id: "contact-form", onSubmit: (e) => submitEmail(e), method: "POST", children: [_jsx("div", { className: "form-group", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-md-6", children: _jsx("input", { placeholder: "Name", id: "name", type: "text", className: "form-control", required: true, value: name, onChange: (e) => setName(e.target.value) }) }), _jsx("div", { className: "col-md-6", children: _jsx("input", { placeholder: "Email", id: "email", type: "email", className: "form-control", "aria-describedby": "emailHelp", required: true, value: email, onChange: (e) => setEmail(e.target.value) }) })] }) }), _jsx("div", { className: "form-group", children: _jsx("input", { placeholder: "Subject", id: "subject", type: "text", className: "form-control", required: true, value: subject, onChange: (e) => setSubject(e.target.value) }) }), _jsx("div", { className: "form-group", children: _jsx("textarea", { placeholder: "Message", id: "message", className: "form-control", rows: 3, required: true, value: message, onChange: (e) => setMessage(e.target.value) }) }), _jsx("button", { type: "submit", className: "primary-btn submit", disabled: disabled, children: "Submit" })] })] }) })] }));
};
export default Contact;
