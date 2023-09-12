import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./JokeForm.css";

function JokeForm({ onGenerateJoke }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make an API request to your Spring Boot backend
    const response = await fetch(`http://localhost:8080/joke?keyword=${keyword}`);
    const data = await response.json();
    console.log(data);
    // Call the callback function to display the joke
    onGenerateJoke(data.choices[0].message.content);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="keyword">
        <Form.Label>Keyword:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate Joke
      </Button>
    </Form>
  );
}

export default JokeForm;
