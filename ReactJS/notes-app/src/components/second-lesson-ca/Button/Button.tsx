import React from "react";
import "./Button.css";

export const Button = (props: any) => {
  return <button className="btn">{props.text}</button>;
};
