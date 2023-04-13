import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddUserName } from "../redux/modules/rank";

import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import img4 from "../image/5.png";
import img5 from "../image/5.png";
import img6 from "../image/6.png";
import img7 from "../image/7.png";
import img8 from "../image/8.png";
import img9 from "../image/9.png";
import img10 from "../image/10.png";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Square = styled.div`
  width: 1000px;
  height: 600px;
  padding: 40px;
  box-sizing: border-box;
  background: rgb(255, 234, 190);
  background: linear-gradient(
    0deg,
    rgba(255, 234, 190, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h3`
  margin: 0;

  font-family: "ddagfont";
  font-size: 4.6rem;
  font-weight: lighter;
  color: #fff;

  & > span {
    margin-right: 10px;
    padding: 10px 20px;
    background: rgb(238, 174, 202);
    background: linear-gradient(
      90deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    border-radius: 10px;
  }
`;

const ImgWrap = styled.img`
  width: 420px;
  height: 420px;

  position: absolute;
  bottom: -140px;
  right: -140px;
`;

const UserNameInput = styled.input`
  width: 560px;
  height: 100px;
  margin-top: 40px;
  padding: 20px;
  box-sizing: border-box;
  background-color: transparent;
  border: 3px solid #fff;

  color: white;
  font-size: 1.4rem;

  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Button = styled.button`
  width: 560px;
  height: 100px;
  margin-top: 20px;
  background-color: #fdbb2d;
  border: none;

  font-size: 1.2rem;
  color: white;

  transition: all 0.5s;

  &:hover {
    background-color: white;
    border: 3px solid #fdbb2d;

    color: #fdbb2d;
    font-weight: 400;

    cursor: pointer;
  }
`;

export default function Start() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = "유승민";
  const imageArr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];
  const randomNumber = Math.floor(Math.random() * 10);

  const userNameInputRef = useRef(null);

  const handleAddUserName = (event) => {
    event.preventDefault();

    dispatch(AddUserName(userNameInputRef.current.value));

    userNameInputRef.current.value = "";

    navigate("/quiz");
  };

  return (
    <Wrap>
      <Square>
        <Title>
          나는 <span>{name}</span>에 관하여
          <br />
          얼마나 알고 있을까?
        </Title>

        <ImgWrap src={imageArr[randomNumber]} />

        <UserNameInput
          type="text"
          placeholder="write user name..."
          ref={userNameInputRef}
        />

        <Button
          onClick={handleAddUserName}
        >{`${name} 이상형 맞추러 가기`}</Button>
      </Square>
    </Wrap>
  );
}
