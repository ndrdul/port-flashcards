import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import Flashcard from "./Flashcard";
import "./app.css";
import SAMPLE_FLASHCARDS from "./portData";
import portInfoData from "./portInfo";
import Card from "./components/Card";

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
      <button className="button" onClick={() => setRandomCard(drawCard())}>
        Random Card
      </button>
      <Flashcard flashcard={randomCard} />
      <Card data={portInfoData} />
    </div>
  );
};

export default App;
