import React from "react";
import styled from "styled-components";

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
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div``;

const Title = styled.h3``;

const ImgWrap = styled.img``;

const UserNameInput = styled.input``;

const Button = styled.button``;

export default function Start() {
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

  const [userName, setUserName] = useState("");
  const userNameInputRef = useRef(null);
  console.log(userNameInputRef.current.value);

  const handleAddUserName = (event) => {
    event.preventDefault();

    setUserName(userNameInputRef.current.value);

    userNameInputRef.current.value = "";

    navigate("/quiz");
  };

  return (
    <Wrap>
      <Title>
        나는 <span>{name}</span>에 관하여 얼마나 알고 있을까?
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
    </Wrap>
  );
}
