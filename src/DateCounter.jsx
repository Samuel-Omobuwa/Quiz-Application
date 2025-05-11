import { useReducer } from "react";

function reducer(state, action){
  console.log(state, action)
  
  switch(action.type){
    case "dec":
    return { ...state, count: state.count - 1}
    case "inc":
      return { ...state, count: state.count + 1}
    case "setCount":
      return { ... state, count: action.payLoad}
      default:
        throw new Error (`Unknown action: ${action.type}`)   
  }  
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  const initialState = {count: 0, step: 1};
  const [state, dispatch] = useReducer(reducer, initialState);
  const{count, step} = state;

  // This mutates the date object.
  const date = new Date("may 7 2025");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({type: "dec"})
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({type: "inc"})
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({type: 'setCount', payload: Number(e.target.value)})
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
