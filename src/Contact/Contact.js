import axios from "axios";
import React, { useState } from "react";

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

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title">Contact Me</h2>
              <p>
                Let us know what you think! In order to provide better service,
                please do not hesitate to give us your feedback. Thank you.
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
                    rows="1"
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
      </div>
    </div>
  );
};

export default Contact;
