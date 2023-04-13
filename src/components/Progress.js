import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 40px;
  background: rgb(255, 204, 0);
  background: rgb(255, 171, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 171, 0, 1) 0%,
    rgba(255, 211, 115, 1) 100%
  );
`;

export default function Progress() {
  return <Wrap></Wrap>;
}
