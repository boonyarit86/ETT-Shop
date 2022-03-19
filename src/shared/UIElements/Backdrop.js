import React from "react";
import "./Backdrop.scss";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick} style={{zIndex: props.mobile && 1000}} />;
}

export default Backdrop;
