import React from "react";
import "./Home.css";

import { GiLightBulb } from "react-icons/gi";

export default function Home({ handleClick, item }) {
  return (
    <main className="main-home">
      <div className="main-home-container">
        <GiLightBulb className="main-icon" onClick={() => handleClick()} />
        {item && <h3 className="concept-heading">{item.name}</h3>}
        {item && <p className="concept-description">{item.description}</p>}
      </div>
    </main>
  );
}
