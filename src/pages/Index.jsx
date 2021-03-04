import React, { useContext, useState } from "react";
import styled from "styled-components";
import TextInput from "../components/Input";
import Btn from "../components/Btn";
import MainSquare from "../assets/img/MainSquare.png";
function Index() {
  const [user, setuser] = useState("");
  return (
    <>
      <MainDiv>
        <FlexDiv>
          <Image src={MainSquare}></Image>
        </FlexDiv>
        <AuxDiv>
          <TextInput onChange={setuser} value={user}></TextInput>
        </AuxDiv>
        <FlexDiv>
          <Btn />
        </FlexDiv>
      </MainDiv>
    </>
  );
}

export default Index;
const MainDiv = styled.div`
  text-align-last: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex: 3;
  flex-direction: column;
  background-color: #292929;
`;

const Image = styled.img`
  width: 96.78px;
  height: 96.78px;
  place-self: center;
  margin-top: 235px;
  margin-bottom: 48.3px;
`;

const FlexDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const AuxDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
