import React from "react";
import Comp1 from "./comps/comp1";
import Comp2 from "./comps/comp2";
import Comp3 from "./comps/comp3";
import Comp4 from "./comps/comp4";
import Comp5 from "./comps/comp5";
import Confetti from "react-confetti";

import "./App.css";

function App() {
  const [planDuration, setPlanduration] = React.useState(true);

  const [pageCount, setPageCount] = React.useState(0);

  const [planData, setPlanData] = React.useState([
    {
      id: "0",
      img: "icon-arcade.svg",
      plan: "Arcade",
      price: 9,
      isSelected: false,
    },
    {
      id: "1",
      img: "icon-advanced.svg",
      plan: "Advanced",
      price: 12,
      isSelected: false,
    },
    {
      id: "2",
      img: "icon-pro.svg",
      plan: "Pro",
      price: 15,
      isSelected: false,
    },
  ]);

  const [addonsData, setAddonsData] = React.useState([
    {
      id: "0",
      service: "Online service",
      benifits: "Access to multiplayer games",
      price: 1,
      isChecked: false,
    },
    {
      id: "1",
      service: "Larger storage",
      benifits: "Extra 1TB of cloud save",
      price: 2,
      isChecked: false,
    },
    {
      id: "2",
      service: "Customizable profile",
      benifits: "Custom theme on your profile",
      price: 2,
      isChecked: false,
    },
  ]);

  function changePlanDuration() {
    setPlanduration((prevPlanDuration) => !prevPlanDuration);
  }

  function gonextHandle() {
    setPageCount((prevPageCount) => prevPageCount + 1);
  }
  function gobackHandle() {
    setPageCount((prevPageCount) => prevPageCount - 1);
  }

  function planSelect(id) {
    setPlanData((prevPlanData) => {
      return prevPlanData.map((item) => {
        return id === item.id
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false };
      });
    });
  }

  function handleChange(id, event) {
    setAddonsData((prevData) => {
      return prevData.map((item) => {
        return id === item.id
          ? { ...item, isChecked: event.target.checked }
          : item;
      });
    });
  }

  function changePlan() {
    setPageCount(1);
  }

  function renderComp() {
    switch (pageCount) {
      case 0:
        return <Comp1 />;
      case 1:
        return (
          <Comp2
            planData={planData}
            planSelect={planSelect}
            planDuration={planDuration}
            changePlanDuration={changePlanDuration}
          />
        );
      case 2:
        return (
          <Comp3
            addonsData={addonsData}
            handleChange={handleChange}
            planDuration={planDuration}
            changePlanDuration={changePlanDuration}
          />
        );
      case 3:
        return (
          <Comp4
            changePlan={changePlan}
            planData={planData}
            addonsData={addonsData}
            planDuration={planDuration}
          />
        );
      case 4:
        return (
          <div>
            <Comp5 />
            <Confetti />
          </div>
        );
    }
  }

  return (
    <div className="main-container">
      <div className="container">
        <div>
          <div className="pageno">
            <div className={pageCount == 0 ? "tab-bg0" : ""}>1</div>
            <div className={pageCount == 1 ? "tab-bg0" : ""}>2</div>
            <div className={pageCount == 2 ? "tab-bg0" : ""}>3</div>
            <div className={pageCount == 3 ? "tab-bg0" : ""}>4</div>
          </div>
        </div>
        <div>{renderComp()}</div>
      </div>
      <div className="btn">
        {4 > pageCount > 0 && (
          <button
            onClick={gobackHandle}
            className={
              pageCount > 0
                ? "btn-goback btn-marginright"
                : "btn-goback btn-disabled"
            }
          >
            Go back
          </button>
        )}
        {pageCount < 4 && (
          <button
            onClick={gonextHandle}
            className={
              pageCount < 3
                ? "btn-gonext btn-marginleft"
                : "btn-gonext btn-disabled"
            }
          >
            Next Step
          </button>
        )}
        {pageCount == 3 && (
          <button onClick={gonextHandle} className="btn-gonext btn-marginleft">
            Finish
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
