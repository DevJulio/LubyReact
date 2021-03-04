import React, { useContext } from "react";
import Point from "../assets/img/Point.png";
import styled from "styled-components";
import { AuthContext } from "../providers/auth";
function YellowSquare() {
  return (
    <>
      <Div>
        <img src={Point}></img>
      </Div>
    </>
  );
}
export default YellowSquare;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
