import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrap = styled.img`
  width: 320px;
  height: 320px;
`;

const Title = styled.h1`
  margin-top: 40px;

  font-size: 1.6rem;
  font-weight: 500;

  & > span {
    padding: 10px 20px;
    background: rgb(238, 174, 202);
    background: linear-gradient(
      90deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    border-radius: 10px;

    color: white;
  }
`;

const ScoreNumber = styled.h1`
  margin-top: 40px;

  font-size: 2.4rem;
  font-weight: 500;

  & > span {
    padding: 26px 20px;
    background: rgb(238, 174, 202);
    background: linear-gradient(
      90deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    border-radius: 100px;

    color: white;
    font-size: 3rem;
  }
`;

const ResultText = styled.p``;

export default function Score() {
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const user_answer = useSelector((state) => state.quiz.user_answer);
  const name = useSelector((state) => state.quiz.name);
  const result_texts = useSelector((state) => state.quiz.result_text);
  console.log(result_texts);

  const random_number = Math.floor(Math.random() * 10);

  const collect_answer = user_answer.filter((answer, idx) => {
    return answer === quiz_list[idx].answer;
  }).length;

  const _score = (100 / quiz_list.length) * collect_answer;
  console.log(_score);

  const score = Math.floor(_score);

  let result_text = "";

  // [40, 60, 80 , 100]
  Object.keys(result_texts).map((r, idx) => {
    if (idx === 0) {
      result_text = result_texts[r];
    }
    result_text = parseInt(r) <= score ? result_texts[r] : result_text;
  });

  return (
    <Wrap>
      <ImgWrap src={quiz_list[random_number].image} />

      <Title>
        <span>{name}</span> 퀴즈에 대한 내 점수는?
      </Title>

      <ScoreNumber>
        <span>{score}</span>점
      </ScoreNumber>

      <ResultText>{result_text}</ResultText>
    </Wrap>
  );
}
