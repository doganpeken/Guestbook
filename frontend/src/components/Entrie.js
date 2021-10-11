import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const host = "http://guestbook-deployment";

function Entrie({ setView }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${host}/guestbook/entries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        visitor: name,
        title,
        text,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then(() => {
        setView("entrielist");
      });
  }

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          setView("entrielist");
        }}
      >
        Back
      </Button>
      <h2>Entrie</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default Entrie;
