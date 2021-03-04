import React from "react";
import styled from "styled-components";
import BottomBar from "../components/BottomBar";
import Point from "../assets/img/Point.png";
import Fav from "../assets/img/Fav.png";
import GreenLock from "../assets/img/GreenLock.png";
import RedLock from "../assets/img/RedLock.png";
import TopBar from "../components/TopBar";
import { RepoContext } from "../providers/repos";

function Repos() {
  const { repo } = React.useContext(RepoContext);
  console.log(repo);
  const listItems = repo.map((element) => (
    <MainDiv>
      <NameDiv>
        <SqrImg src={Point} alt="" />
        <SqrLbl>{element.name}</SqrLbl>
      </NameDiv>
      <Paragraph>{element.description ? element.description : ""}</Paragraph>
      <IconsDiv>
        <StarIcon src={Fav}></StarIcon>
        <LockDiv>
          <LockIcon src={GreenLock}></LockIcon>
          <LockIcon src={RedLock}></LockIcon>
        </LockDiv>
      </IconsDiv>
    </MainDiv>
  ));

  return (
    <>
      <TopBar text={repo.length + " repositórios"} />
      <SpacerDiv />
      {listItems}
      <BottomSpacerDiv />
      <BottomBar
        PropHome={false}
        PropRepos={true}
        Seguidores={false}
        Seguindo={false}
      ></BottomBar>
    </>
  );
}
export default Repos;

const SpacerDiv = styled.div`
  text-align-last: center;
  width: 100%;
  height: 4.61vh;
  background-color: #292929;
`;
const BottomSpacerDiv = styled.div`
  text-align-last: center;
  width: 100%;
  height: 12.75vh;
  background-color: #292929;
`;

const MainDiv = styled.div`
  text-align-last: center;
  width: 100%;
  height: 17.02vh;
  display: flex;
  flex: 3;
  flex-direction: column;
  padding-top: 2.3vh;
  background-color: #292929;
  border-bottom-color: #434343;
  border-bottom-width: 2px;
  border-bottom-style: solid;
`;
const SqrImg = styled.img`
  height: 42px;
  width: 10px;
  float: left;
  margin-right: 14px;
`;
const SqrLbl = styled.h1`
  margin: 0px;
  color: #fff;
  font-size: 20px;
  place-self: center;
  font-family: "Helvetica Neue bold", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
`;
const NameDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Paragraph = styled.p`
  text-align: left;
  width: 300px;
  margin: 0px;
  color: #fff;
  text-align-last: left;
  padding-left: 24px;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  font-size: 14px;
  font-weight: 100;
`;

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.02vh;
  margin-top: 1.46vh;
`;
const StarIcon = styled.img`
  height: 17.58px;
  margin-left: 20px;
`;
const LockIcon = styled.img`
  height: 18px;
  width: 16.36px;
  margin-left: 13.64px;
`;

const LockDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding-right: 1.95vh;
`;
