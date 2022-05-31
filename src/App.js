import React from "react";
import "./app.css";

import SAMPLE_FLASHCARDS from "./data/portData";
import portInfoData from "./data/portInfo";

import Card from "./components/Card";

const App = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <Card data={portInfoData} buttonTitle={"Random Protocol"} />
      </div>

      <div className="grid-item">
        <Card data={SAMPLE_FLASHCARDS} buttonTitle={"Random Port"} />
      </div>
    </div>
  );
};

export default App;
