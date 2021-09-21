import React, { useState } from "react";

export default function Text(props) {
  const upper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clear = () => {
    let newText = "";
    setText(newText);
  };
  const change = (event) => {
    setText(event.target.value);
    setSvgpath("far fa-clipboard");
  };
  const [style, setstyle] = useState({
    fontWeight: "none",
  });
  const TitleCase = () => {
    let newText = text.split(". ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(". "));
  };
  //   const selectedText = () => {
  //     window.getSelection().toString() ? console.log(window.getSelection().toString()) : null;
  // }
  const copy = () => {
    var text = document.getElementById("Texta");
    text.select();
    navigator.clipboard.writeText(text.value);
    setSvgpath("fas fa-clipboard");
  };
  const [svgpath, setSvgpath] = useState("far fa-clipboard");
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="selectedtext"
            id="Texta"
            rows="7"
            value={text}
            onChange={change}
            style={style}
            contentEditable="true"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary mx-1"
          id="bold"
          onClick={`document.execCommand('bold',false,null)`}
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          className="btn btn-outline-primary mx-1"
          onClick={upper}
        >
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary mx-1"
          onClick={lower}
        >
          Lowercase
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary mx-1"
          onClick={TitleCase}
        >
          Sentence case
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary mx-1"
          onClick={clear}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-outline-danger mx-1"
          onClick={copy}
        >
          <i className={svgpath}></i>
        </button>
      </div>
      <div className="container my-3">
        <h3>
          <u>Details</u>
        </h3>
        <p>
          <b>Words - </b>
          {text.length > 0 ? text.split(" ").length : 0}
        </p>
        <p>
          <b>Characters - </b>
          {text.length}
        </p>
        <p>
          <b>Sentences - </b>
          {text.length > 0 ? text.split(".").length : 0}
        </p>
        <p>
          <b>Reading time - </b>
          {text.length > 0 ? 0.008 * text.split(" ").length : 0} minutes
        </p>
        <p>
          <b>Speaking time - </b>
          {text.length > 0 ? 0.01 * text.split(" ").length : 0} minutes
        </p>
      </div>
    </>
  );
}
