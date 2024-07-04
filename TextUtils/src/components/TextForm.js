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

  let copy = () => {
    navigator.clipboard.writeText(text);
  };

  let removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  let capitalFirstLetter = () => {
    let newText = text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    setText(newText);
  };

  let manageText = () => {
    let newText = text
      .split(".")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(".");
    setText(newText);
  };

  let clearAll = () => {
    setText("");
  };

  // Two Way Binding .....

  let handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWords = (text) => {
    let trimmedText = text.trim();
    return trimmedText.length === 0 ? 0 : trimmedText.split(/\s+/).length;
  };

  const countCharacters = (text) => {
    return text.replace(/\s/g, "").length;
  };
  return (
    <>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
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
        <div className="btn btn-primary mx-1" onClick={lowerCase}>
          LowerCase
        </div>
        <div className="btn btn-primary me-1" onClick={reverse}>
          Reverse
        </div>
        <div className="btn btn-primary me-1 my-2" onClick={copy}>
          Copy
        </div>
        <div className="btn btn-primary me-1" onClick={removeExtraSpaces}>
          {" "}
          Remove Spaces{" "}
        </div>
        <div className="btn btn-primary me-1" onClick={capitalFirstLetter}>
          Capital First
        </div>
        <div className="btn btn-primary me-1" onClick={manageText}>
          Manage
        </div>
        <div className="btn btn-danger " onClick={clearAll}>
          Clear All
        </div>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h3>Text Summary</h3>
        <p>
          <b>{countWords(text)}</b> Words and <b>{countCharacters(text)}</b>{" "}
          Characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes Expected to Read
        </p>
      </div>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
