import React, { useState } from "react";
import "./Folder.styles.css";

export default function Folder(props) {
  const [open, setOpen] = useState(false);
  function openClickHandler() {
    setOpen(!open);
  }
  return (
    <div className="main-folder">
      <h2 onClick={openClickHandler}>{props.name}</h2>
      {open && <div className="children-container">{props.children}</div>}
    </div>
  );
}
