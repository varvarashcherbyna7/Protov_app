import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import "./MainScreen.css";

export default function MainScreen(): ReactElement {
  const navigate = useNavigate();

  const handleProvenance = () => {
    navigate("/enter-info", { state: "Provenance" });
  };

  const handleVerifyOwner = () => {
    navigate("/enter-info", { state: "Verify owner" });
  };

  return (
    <div className="main">
      <h1 className="main__title">Protov</h1>
      <div className="main__nav">
        <button className="main__nav-button">Add</button>
        <button onClick={handleProvenance} className="main__nav-button">
          Provenance
        </button>
        <button onClick={handleVerifyOwner} className="main__nav-button">
          Verify owner
        </button>
        <button className="main__nav-button">Verify object</button>
        <button className="main__nav-button">Transact</button>
      </div>
    </div>
  );
}
