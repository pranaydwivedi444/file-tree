import React, { useState } from "react";
import "./Folder.styles.css";

export default function Folder(props) {
  const [open, setOpen] = useState(false);
  function openClickHandler() {
    setOpen(!open);
  }

  let fileIcon = (
    <img src="https://img.icons8.com/emoji/24/null/open-file-folder-emoji.png" />
  );

  if (!open)
    fileIcon = (
      <img src="https://img.icons8.com/material-outlined/24/null/folder-invoices--v1.png" />
    );
  return (
    <div>
      <div className="main-folder">
        <span onClick={openClickHandler}>
          {fileIcon}
          {props.name}{" "}
        </span>
      </div>
      {open && <div className="children-container">{props.children}</div>}
    </div>
  );
}
