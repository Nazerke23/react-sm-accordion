import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ question, selectedID, setselectedID }) => {
  const isOpen = question.id === selectedID;

  return (
    <div style={{ margin: "20px", padding: "5px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{question.title}</h3>
        <button
          onClick={() =>
            isOpen ? setselectedID(null) : setselectedID(question.id)
          }
          className="btn"
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <h3 style={{ color: "gray", fontSize: "15px" }}>{question.info}</h3>
      )}
    </div>
  );
};

export default Question;
