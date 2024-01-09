import React from "react";

export default function About(props) {
  return (
    <div
      className="container md-3"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <h2>About</h2>
      <p>
        Textutils is a utility which can be used to manipulate your text in the
        way you want.
      </p>
    </div>
  );
}
