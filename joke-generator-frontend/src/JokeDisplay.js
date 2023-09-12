import React from "react";
import "./JokeDisplay.css";

function JokeDisplay({ joke }) {
  return (
    <div>
      <h2>Generated Joke:</h2>
      <p>{joke}</p>
    </div>
  );
}

export default JokeDisplay;
