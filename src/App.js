import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import Flashcard from "./Flashcard";
import "./app.css";
import SAMPLE_FLASHCARDS from "./portData";

//let randomCard = SAMPLE_FLASHCARDS[Math.floor(Math.random()*SAMPLE_FLASHCARDS.length)];

const drawCard = () => {
  return SAMPLE_FLASHCARDS[
    Math.floor(Math.random() * SAMPLE_FLASHCARDS.length)
  ];
};

const App = () => {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [randomCard, setRandomCard] = useState(drawCard());
  

  return (
    <div>
      <button onClick={() => setRandomCard(drawCard())}>Random Card</button>
      <Flashcard flashcard={randomCard} />
      {/* <FlashcardList flashcards={flashcards} />{" "} */}
      
    </div>
  );
};

export default App;
