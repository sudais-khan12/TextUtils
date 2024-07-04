import React, { useState } from "react";

export default function TextForm(props) {
  // States .......
  const [text, setText] = useState("");
  let upperCase = () => {
    setText(text.toUpperCase());
  };

  let lowerCase = () => {
    setText(text.toLowerCase());
  };

  let reverse = () => {
    setText(text.split("").reverse().join(""));
  };

  let clearAll = () => {
    setText("");
  };

  // Two Way Binding .....

  let handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter Text Here"
            value={text}
            id="text"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="btn btn-primary" onClick={upperCase}>
          UpperCase
        </div>
        <div className="btn btn-secondary mx-1" onClick={lowerCase}>
          LowerCase
        </div>
        <div className="btn btn-info me-1" onClick={reverse}>
          Reverse
        </div>
        <div className="btn btn-danger my-1 " onClick={clearAll}>
          Clear All
        </div>
      </div>
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>
          <b>{text.split(" ").length}</b> Words and <b>{text.length}</b>{" "}
          Characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes Expected to Read
        </p>
      </div>

      <div className="container">
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
