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
    setSvgpath("bi bi-clipboard");
  };
  const TitleCase = () => {
    let newText = text.split(". ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(". "));
  };
  const bold = () => {
    var newText = "";
    if (window.getSelection) {
      newText = window.getSelection();
    } else if (document.getSelection) {
      newText = document.getSelection();
    } else if (document.selection) {
      newText = document.selection.createRange().text;
    } else return;
    document.getElementById("Texta").value = newText;
  };
  const download = () => {
    document.getElementById("download").onclick = function () {
      var l = document.createElement("a");
      l.href =
        "data:text/plain;charset=UTF-8," +
        document.getElementById("Texta").value;
      l.setAttribute("download", document.getElementById("Texta").value);
      l.click();
    };
  };
  const copy = () => {
    navigator.clipboard.writeText(text);
    setSvgpath("fas fa-check");
  };
  const [svgpath, setSvgpath] = useState("bi bi-clipboard");
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="selectedext"
            id="Texta"
            rows="7"
            value={text}
            onChange={change}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-outline-dark mx-1 my-1"
          id="bold"
          onClick={bold}
        >
          Selected text
        </button>

        <button
          type="button"
          className="btn btn-outline-dark mx-1 my-1"
          onClick={upper}
        >
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-outline-dark mx-1 my-1"
          onClick={lower}
        >
          Lowercase
        </button>
        <button
          type="button"
          className="btn btn-outline-dark mx-1 my-1"
          onClick={TitleCase}
        >
          Sentence case
        </button>
        <button
          type="button"
          className="btn btn-outline-dark mx-1 my-1"
          onClick={clear}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-outline-dark mx-1 my-1"
          onClick={copy}
        >
          <i className={svgpath}></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-dark mx-1 my-1"
          id="download"
          onClick={download}
        >
          <i className="bi bi-download"></i> Download
        </button>
      </div>
      <div className="container my-3">
        <h3>
          <u>Details</u>
        </h3>
        <p>
          <b>Words - </b>
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }
        </p>
        <p>
          <b>Characters - </b>
          {text.length}
        </p>
        <p>
          <b>Sentences - </b>
          {
            text.split(". ").filter((ele) => {
              return ele.length !== 0;
            }).length
          }
        </p>
        <p>
          <b>Reading time - </b>
          {0.008 *
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
          minutes
        </p>
        <p>
          <b>Speaking time - </b>
          {0.01 *
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
          minutes
        </p>
      </div>
    </>
  );
}
