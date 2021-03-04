import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Left from "../assets/img/LeftArrowWhite.png";
function TopBar(props) {
  const history = useHistory();
  return (
    <>
      <BarDiv>
        {/* onClick={history.push(props.redirect)} */}
        <BarArrow src={Left} />
        <BarName>{props.text}</BarName>
      </BarDiv>
    </>
  );
}
export default TopBar;

const BarDiv = styled.div`
  background-color: #1f1f1f;
  width: 100%;
  height: 7.64vh;
`;
const BarArrow = styled.img`
  cursor: pointer;
  float: left;
  padding-top: 2.81vh;
  width: 18.47px;
  height: 18.47px;
  margin-left: 17.53px;
`;
const BarName = styled.h1`
  font-size: 17px;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  color: #ffffff;
  text-align: center;
  padding-top: 3.03vh;
  margin-block-start: 0em;
  margin-right: 2em;
`;
