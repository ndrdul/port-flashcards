import React, { useState } from "react";
import "./app.css";

import SAMPLE_FLASHCARDS from "./data/portData";
import portInfoData from "./data/portInfo";

import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card data={portInfoData} buttonTitle={"Random Protocol"} />
      <Card data={SAMPLE_FLASHCARDS} buttonTitle={"Random Port"} />
    </div>
  );
};

export default App;
