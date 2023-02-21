import React from "react";

export default function plan(props) {
  return (
    <div
      onClick={() => props.planSelectStatus(props.id)}
      className={
        props.isSelected ? "plan-container plan-border" : "plan-container"
      }
    >
      <img src={props.img} alt="" />
      <div>
        <h4>{props.plan}</h4>
        <p>{`$${
          props.planStatus ? `${props.price * 10}/yr` : `${props.price}/mo`
        }`}</p>
        {props.planStatus && <h4 className="h4-blue">2 months free</h4>}
      </div>
    </div>
  );
}
