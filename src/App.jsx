import React, { useEffect } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

export default function App() {
  useEffect(function () {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="app">
      <Header />

      <MainContent>
        <p>1/15</p>
        <p>Question?</p>
      </MainContent>
    </div>
  );
}
