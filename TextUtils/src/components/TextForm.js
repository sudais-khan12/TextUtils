import React, { useState } from "react";

export default function TextForm(props) {
  // States .......
  const [text, setText] = useState("");
  let upperCase = () => {
    setText(text.toUpperCase());
    props.alert("Converted to UpperCase", "success");
  };

  let lowerCase = () => {
    setText(text.toLowerCase());
    props.alert("Converted to LowerCase", "success");
  };

  let reverse = () => {
    setText(text.split("").reverse().join(""));
    props.alert("Converted to Reverse Case", "success");
  };

  let copy = () => {
    props.alert("Copied to Clipboard", "success");
    navigator.clipboard.writeText(text);
  };

  let removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alert("Extra Spaces Removed", "success");
  };

  let capitalFirstLetter = () => {
    let newText = text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    setText(newText);
    props.alert("Converted to Capital First Letter", "success");
  };

  let manageText = () => {
    let newText = text
      .split(".")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(".");
    setText(newText);
    props.alert("Managed", "success");
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
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={upperCase}
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={lowerCase}
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary me-1"
          onClick={reverse}
        >
          Reverse
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary me-1 my-2"
          onClick={copy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary me-1"
          onClick={removeExtraSpaces}
        >
          {" "}
          Remove Spaces{" "}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary me-1"
          onClick={capitalFirstLetter}
        >
          Capital First
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary me-1"
          onClick={manageText}
        >
          Manage
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger "
          onClick={clearAll}
        >
          Clear All
        </button>
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
          <b>
            {0.008 * text.split(" ").filter((element) => element !== "").length}
          </b>{" "}
          Minutes Expected to Read
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
