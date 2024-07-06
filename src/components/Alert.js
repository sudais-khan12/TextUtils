import React from "react";

function Alert(props) {
  if (props.alert === null) {
    return null;
  }

  return (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible position-sticky fade show w-35 p-3 m-3`}
      role="alert"
    >
      <strong>{props.alert.type}</strong> {props.alert.msg}
    </div>
  );
}

export default Alert;
