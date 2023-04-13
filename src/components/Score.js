import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const ImgWrap = styled.img``;

export default function Score() {
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const user_answer = useSelector((state) => state.quiz.user_answer);

  const random_number = Math.floor(Math.random() * 10);

  return (
    <Wrap>
      <ImgWrap src={quiz_list[random_number].image} />
    </Wrap>
  );
}
