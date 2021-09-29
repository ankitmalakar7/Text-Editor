import React from "react";

export default function About() {
  return (
    <div>
      <p>
        <ul>Selected text is to cut only the selected text in the textarea.</ul>
        <ul>
          Uppercase is to transform the original text into uppercase in the
          textarea.
        </ul>
        <ul>
          Lowercase is to transform the original text into lowercase in the
          textarea.
        </ul>
        <ul>
          Sentence case is to transform the original text into Sentence case in
          the textarea.
        </ul>
        <ul>Clear text is to remove the whole text from the textarea.</ul>
        <ul>Copy option for copying the present text from the textarea.</ul>
        <ul>
          Download option for downloading the present document as a .txt file.
        </ul>
      </p>
      <footer class="py-3 my-4 border">
    <p class="text-center">© Made by Ankit Malakar</p>
  </footer>
    </div>
  );
}
