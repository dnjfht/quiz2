import React from "react";
import styled from "styled-components";
import { TfiHeartBroken } from "react-icons/tfi";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgb(255, 234, 190) 0%,
    rgb(253, 187, 45) 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  font-size: 3rem;
  color: white;
`;

export default function Spinner() {
  return (
    <Wrap>
      <TfiHeartBroken style={{ color: "white", fontSize: "12rem" }} />

      <Text>점수 계산 중...</Text>
    </Wrap>
  );
}
