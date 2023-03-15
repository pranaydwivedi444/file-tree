import React from "react";

export default function File({ name, extension }) {
  const iconsObject = {
    mp3: (
      <img src="https://img.icons8.com/fluency-systems-regular/25/null/mp3.png" />
    ),
    png: (
      <img src="https://img.icons8.com/material-rounded/24/null/picture.png" />
    ),
    jpg: (
      <img src="https://img.icons8.com/material-rounded/24/null/picture.png" />
    ),
    docx: (
      <img src="https://img.icons8.com/color/25/null/google-docs--v1.png" />
    ),
    file: <img src="https://img.icons8.com/windows/32/null/happy-file.png" />,
  };

  const fileIcon = iconsObject[`${extension.slice(1)}`];
  console.log(fileIcon, `${extension.slice(0, 1)}`);

  return (
    <div>
      {fileIcon}
      {`${name}${extension}`}
    </div>
  );
}
