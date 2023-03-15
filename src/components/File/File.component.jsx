import React from "react";

export default function File({ name, extension }) {
  return <div>{`${name}${extension}`}</div>;
}
