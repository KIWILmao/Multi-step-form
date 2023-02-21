import React from "react";

export default function (props) {
  // const [total, setTotal] = React.useState(0);

  const finalPlan = props.planData.filter((item) => {
    return item.isSelected;
  });

  const finalAddonArr = props.addonsData.filter((item) => {
    return item.isChecked;
  });

  const totalPrice = finalAddonArr.reduce((acc, curr) => acc + curr.price, 0);

  const finalAddonComp = finalAddonArr.map((item) => {
    return (
      <div className="confirm-container1">
        <p>{item.service}</p>
        <h5>
          {`$${props.planDuration ? item.price * 10 : item.price}`}
          {`/${props.planDuration ? "yr" : "mo"}`}
        </h5>
      </div>
    );
  });

  return (
    <div className="toptext-container">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming. </p>
      <div className="confirm-background">
        <div className="confirm-container">
          <div>
            {/* <h4>ddad</h4> */}
            <h4>{`${finalPlan[0].plan}(${
              props.planDuration ? "Yearly" : "Monthly"
            })`}</h4>
            <u onClick={props.changePlan}>Change</u>
          </div>
          <h5>
            {`$${
              props.planDuration ? finalPlan[0].price * 10 : finalPlan[0].price
            }`}
            {`/${props.planDuration ? "yr" : "mo"}`}
          </h5>
        </div>
        <hr />
        {finalAddonComp}
        <div className="confirm-container1"></div>
        <div className="total-container">
          <p>Total (per month)</p>
          <h5>
            {`$${
              props.planDuration
                ? (totalPrice + finalPlan[0].price) * 10
                : totalPrice + finalPlan[0].price
            }`}
            {`/${props.planDuration ? "yr" : "mo"}`}
          </h5>
        </div>
      </div>
    </div>
  );
}
