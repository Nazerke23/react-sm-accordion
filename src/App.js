import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [selectedID, setselectedID] = useState("");
  //2

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Questions</h1>
      {data.map((question) => (
        <div
          key={question.info}
          style={{
            width: "700px",
            margin: "auto",
            background: "white",
          }}
        >
          <SingleQuestion
            selectedID={selectedID}
            setselectedID={setselectedID}
            question={question}
          />
        </div>
      ))}
    </>
  );
}

export default App;
