import React from "react";
import Addon from "./addon";

export default function comp3(props) {

  

  const addonComp = props.addonsData.map((item) => {
    return (
      <Addon
        {...item}
        key={item.id}
        handleChange={props.handleChange}
        planStatus={props.planDuration}
      />
    );
  });

  return (
    <div className="toptext-container">
      <h1>Pick add-ons </h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div>{addonComp}</div>
    </div>
  );
}
