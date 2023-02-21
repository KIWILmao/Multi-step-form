import React from "react";

export default function addon(props) {
  return (
    <div
      className={
        props.isChecked ? "addon-container addon-border" : "addon-container"
      }
    >
      <div className="addon-left">
        <input
          type="checkbox"
          className="checkbox"
          checked={props.isChecked}
          name="isChecked"
          onChange={(event) => props.handleChange(props.id, event)}
        />
        <div>
          <h4>{props.service}</h4>
          <p>{props.benifits}</p>
        </div>
      </div>
      <div>
        <h5>{`+$${
          props.planStatus ? `${props.price * 10}/yr` : `${props.price}/mo`
        }`}</h5>
      </div>
    </div>
  );
}
