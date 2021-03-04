import React, { useContext } from "react";
import styled from "styled-components";
import Home from "../assets/img/Home.png";
import GitCat from "../assets/img/GitCat.png";
import Follower from "../assets/img/Follower.png";
import { useHistory } from "react-router";
function BottomBar(props) {
  const history = useHistory();
  return (
    <>
      <Div>
        <DivItem>
          <Img
            onClick={() => {
              history.push("/Profile");
            }}
            style={
              props.PropHome
                ? { filter: "opacity(1)" }
                : { filter: "opacity(0.5)" }
            }
            src={Home}
          ></Img>
          <Lbl>Home</Lbl>
        </DivItem>
        <DivItem>
          <Img
            onClick={() => {
              history.push("/Repos");
            }}
            style={
              props.PropRepos
                ? { filter: "opacity(1)" }
                : { filter: "opacity(0.5)" }
            }
            src={GitCat}
          ></Img>
          <Lbl>Repos</Lbl>
        </DivItem>
        <DivItem>
          <Img
            onClick={() => {
              history.push("/Followers");
            }}
            style={
              props.Seguidores
                ? { filter: "opacity(1)" }
                : { filter: "opacity(0.5)" }
            }
            src={Follower}
          ></Img>
          <Lbl>Seguidores</Lbl>
        </DivItem>
        <DivItem>
          <Img
            onClick={() => {
              history.push("/Following");
            }}
            style={
              props.Seguindo
                ? { filter: "opacity(1)" }
                : { filter: "opacity(0.5)" }
            }
            src={Follower}
          ></Img>
          <Lbl>Seguindo</Lbl>
        </DivItem>
      </Div>
    </>
  );
}
export default BottomBar;

const Div = styled.div`
  width: 100%;
  height: 8.99vh;
  display: flex;
  flex-direction: row;
  flex: 4;
  background-color: #ffffff;
  border-top-left-radius: 15pt;
  border-top-right-radius: 15pt;
  position: fixed;
  bottom: 0px;
`;

const DivItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;
const Img = styled.img`
  width: 39px;
  height: 33.33px;
  cursor: pointer;
  place-self: center;
`;
const Lbl = styled.span`
  font-size: 15px;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 100;
  place-self: center;
  color: #3e3e3e;
`;
