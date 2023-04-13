import React from "react";
import styled from "styled-components";
import Progress from "./Progress";
import { useSelector, useDispatch } from "react-redux";
import { AddUserAnswer } from "../redux/modules/quiz";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const QuizWrap = styled.div`
  width: 100%;
  height: 660px;
  background-color: bisque;
`;

const QuizNumber = styled.h1`
  font-family: "ddagfont";
`;

const QuizImg = styled.img``;

const AnswerSelector = styled.div`
  width: 100%;
  background-color: pink;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AnswerSelectorButton = styled.button`
  background-color: transparent;
  border: none;

  font-size: 6rem;
  color: white;
`;

export default function Quiz() {
  const dispatch = useDispatch();
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  console.log(quiz_list);
  const user_answer = useSelector((state) => state.quiz.user_answer);
  console.log(user_answer);

  return (
    <Wrap>
      <Progress />

      <QuizWrap>
        <QuizNumber>{`${user_answer.length + 1}번째 퀴즈`}</QuizNumber>
        <QuizImg src={`../image/${quiz_list.image}`} />

        <AnswerSelector>
          <AnswerSelectorButton
            onClick={() => {
              dispatch(AddUserAnswer(true));
            }}
          >
            O
          </AnswerSelectorButton>
          <AnswerSelectorButton
            onClick={() => {
              dispatch(AddUserAnswer(false));
            }}
          >
            X
          </AnswerSelectorButton>
        </AnswerSelector>
      </QuizWrap>
    </Wrap>
  );
}
