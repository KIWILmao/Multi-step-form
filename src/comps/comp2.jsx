import React from "react";
import Plan from "./plan";

export default function copmp2(props) {
  const planComp = props.planData.map((item) => {
    return (
      <Plan
        key={item.id}
        {...item}
        planStatus={props.planDuration}
        planSelectStatus={props.planSelect}
      />
    );
  });

  return (
    <div className="toptext-container">
      <h1>Select your plan</h1>
      <p>You have option of monthly or yearly billing</p>
      <div>{planComp}</div>
      <div className="plan-duration">
        <h4 className={props.planDuration === true ? "h4-gray" : ""}>
          Monthly
        </h4>
        <label className="switch">
          <input
            onChange={props.changePlanDuration}
            type="checkbox"
            checked={props.planDuration}
          />
          <span className="slider"></span>
        </label>
        <h4 className={props.planDuration === false ? "h4-gray" : ""}>
          Yearly
        </h4>
      </div>
    </div>
  );
}
