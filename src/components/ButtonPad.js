import { useEffect, useState } from "react";

const ButtonPad = ({ setDisplay }) => {
  const [total, setTotal] = useState(0);
  const [currentOperator, setCurrentOperator] = useState("");

  let numberArr = [];
  let joinedNum = [];
  let num = "";

  useEffect(() => {
    setDisplay(total);
  }, [setDisplay, total, num]);

  const onNumberPress = (input) => {
    numberArr.push(input);
  };
  const onAddPress = () => {
    setCurrentOperator("addition");
    joinedNum = Number(numberArr.join(""));
    numberArr = [];
    setTotal(total + joinedNum);
  };
  const onSubtractPress = () => {
    setCurrentOperator("subtraction");
    joinedNum = Number(numberArr.join(""));
    numberArr = [];
    setTotal(total - joinedNum);
  };
  const onMultiplyPress = () => {
    setCurrentOperator("multiplication");
    joinedNum = Number(numberArr.join(""));
    if (total === 0) {
        setTotal(1 * joinedNum)
    } else if (numberArr.length < 1) {
        setTotal(1 * total)
    }
     else setTotal(total * joinedNum);
  };
  const onDividePress = () => {
    setCurrentOperator("division");
    joinedNum = Number(numberArr.join(""));
    if (total === 0) {
        setTotal(joinedNum / 1)
    } else if (numberArr.length < 1) {
        setTotal(total / 1)
    }
     else setTotal(total / joinedNum);
  };
  const onEqualPress = () => {
    if (currentOperator === "addition") {
        onAddPress()
    }
    if (currentOperator === "subtraction") {
        onSubtractPress()
    }
    if (currentOperator === "multiplication") {
        onMultiplyPress()
    }
    if (currentOperator === "division") {
        onDividePress()
    }
    setCurrentOperator("");
  };
  const reset = () => {
    setTotal(0);
    setCurrentOperator("");
    numberArr = [];
    joinedNum = null;
    setDisplay(0);
  };

  return (
    <div className="ButtonPad">
      <button className="CE" onClick={() => reset()}>
        CE
      </button>
      <div className="Allbuttons">
        <button
          id="b9"
          onClick={() => {
            onNumberPress("9");
          }}
        >
          9
        </button>
        <button id="b8" onClick={() => onNumberPress("8")}>
          8
        </button>
        <button id="b7" onClick={() => onNumberPress("7")}>
          7
        </button>
        <button id="b6" onClick={() => onNumberPress("6")}>
          6
        </button>
        <button id="b5" onClick={() => onNumberPress("5")}>
          5
        </button>
        <button id="b4" onClick={() => onNumberPress("4")}>
          4
        </button>
        <button id="b3" onClick={() => onNumberPress("3")}>
          3
        </button>
        <button id="b2" onClick={() => onNumberPress("2")}>
          2
        </button>
        <button id="b1" onClick={() => onNumberPress("1")}>
          1
        </button>
        <button id="b0" onClick={() => onNumberPress("0")}>
          0
        </button>
        <button id="bdot" onClick={() => onNumberPress(".")}>
          .
        </button>
        <button id="badd" onClick={() => onAddPress()}>
          +
        </button>
        <button id="bsub" onClick={() => onSubtractPress()}> -</button>
        <button id="btimes" onClick={() => onMultiplyPress()}>x</button>
        <button id="bdiv" onClick={() => onDividePress()}>%</button>
        <button id="bequal" onClick={() => onEqualPress()}>
          =
        </button>
      </div>
    </div>
  );
};

export default ButtonPad;
