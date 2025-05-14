import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],

  //  'loading', 'error', 'ready', 'active',  'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
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
      };
      case 'newAnswer': {
        const question = state.questions.at(state.index);

        return { 
          ...state, 
          answer: action.payLoad,
          points: action.payload === question.correctOption ? state.points + question.points : state.points,
        };
      }
      case 'nextQuestion':
        return {
          ...state, index: state.index + 1
        }
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export default function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const totalQuestions = questions.length;

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
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen totalQuestions={totalQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={questions[index]} dispatch={dispatch} answer={answer} />}
      </MainContent>
    </div>
  );
}
