import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],

  //  'loading', 'error', 'ready', 'active',  'finished'
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
      case "start":
        return {
          ...state,
          status: "active",
        }
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export default function App() {
  const [{questions, status, index}, dispatch] = useReducer(reducer, initialState);

  const totalQuestions = questions.length

  useEffect(function () {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed", payload: err }));
  }, []);
  return (
    <div className="app">
      <Header />

      <MainContent>
       {status === 'loading' && <Loader />}
       {status === 'error' && <Error />}
       {status === 'ready' && <StartScreen totalQuestions={totalQuestions} dispatch={dispatch}/>}
       {status === 'active' && <Question question={questions[index]} />}
      </MainContent>
    </div>
  );
}
