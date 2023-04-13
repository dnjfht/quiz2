import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../components/Start";
import Quiz from "../components/Quiz";
import Score from "../components/Score";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </>
  );
}
