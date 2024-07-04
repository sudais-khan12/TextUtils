import React from "react";

function Alert(props) {
  if (props.alert === null) {
    return null;
  }

  return (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show w-25 p-3 m-3`}
      role="alert"
    >
      <strong>{props.alert.type}</strong> {props.alert.msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
