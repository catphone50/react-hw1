import React from "react";

function ParagraphsComponent({ texts }) {
  return (
    <div>
      {texts.map((text, index) => {
        return (
          <div key={index} className="TextSection">
            <h2>{text.title}</h2>
            <p>{text.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ParagraphsComponent;
