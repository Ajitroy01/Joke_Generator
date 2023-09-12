import React, { useState } from "react";
import NavBar from "./NavBar";
import JokeForm from "./JokeForm";
import JokeDisplay from "./JokeDisplay";

function App() {
  const [generatedJoke, setGeneratedJoke] = useState("");

  const handleGenerateJoke = (joke) => {
    setGeneratedJoke(joke);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <JokeForm onGenerateJoke={handleGenerateJoke} />
        <JokeDisplay joke={generatedJoke} />
      </div>
    </div>
  );
}

export default App;

