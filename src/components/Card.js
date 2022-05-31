import React, { useState } from "react";

const Card = ({ data }) => {
  const [flip, setFlip] = useState(false);
  const [singleCard, setSingleCard] = useState(
    data[Math.floor(Math.random() * data.length)]
  );

  return (
    <div className="singleCard">
      <button
        className="button"
        onClick={() =>
          setSingleCard(data[Math.floor(Math.random() * data.length)])
        }
      >
        Click
      </button>
      <div
        className={`card ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="front">{singleCard.question}</div>
        <div className="back">{singleCard.answer}</div>
      </div>
    </div>
  );
};

export default Card;
