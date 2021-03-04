import React from "react";
import styled from "styled-components";
import BottomBar from "../components/BottomBar";
import { AuthContext } from "../providers/auth";
import { RepoContext } from "../providers/repos";
import Point from "../assets/img/Point.png";
import RedExit from "../assets/img/RedExit.png";
import { useHistory } from "react-router";
function Profile() {
  const { user } = React.useContext(AuthContext);

  const history = useHistory();
  return (
    <>
      <AuxDiv>
        <NameSpan>{"#" + user.login}</NameSpan>
        <ExitPosi
          onClick={() => {
            history.push("/");
          }}
        >
          <ExiLbl>Sair</ExiLbl>
          <ExitImg src={RedExit} alt="" />
        </ExitPosi>
      </AuxDiv>
      <ImagePosition>
        <Image src={user.avatar_url}></Image>
      </ImagePosition>
      <MainDiv>
        <NameDiv>
          <SqrImg src={Point} alt="" />
          <SqrLbl>{user.name}</SqrLbl>
        </NameDiv>
        <NameDivCol>
          <Paragraph>{user.email}</Paragraph>
          <Paragraph>{user.location}</Paragraph>
        </NameDivCol>
      </MainDiv>
      <NumbersDiv>
        <NumbersDivPosition>
          <NumberProps>{user.followers}</NumberProps>
          <Lbl>Seguidores</Lbl>
        </NumbersDivPosition>
        <NumbersDivPosition>
          <NumberProps>{user.following}</NumberProps>
          <Lbl>Seguindo</Lbl>
        </NumbersDivPosition>
        <NumbersDivPosition>
          <NumberProps>{user.public_repos}</NumberProps>
          <Lbl>Repos</Lbl>
        </NumbersDivPosition>
      </NumbersDiv>
      <BioDiv>
        <BioDivDetails>
          <SqrImg src={Point} alt="" />
          <SqrLbl>BIO</SqrLbl>
        </BioDivDetails>
        <BioDivDescription>
          <Paragraph>{user.bio}</Paragraph>
        </BioDivDescription>
        <BottomBar
          PropHome={true}
          PropRepos={false}
          Seguidores={false}
          Seguindo={false}
        ></BottomBar>
      </BioDiv>
    </>
  );
}
export default Profile;
const MainDiv = styled.div`
  text-align-last: center;
  width: 100%;
  height: 25.51vh;
  display: flex;
  flex: 3;
  flex-direction: column;
  background-color: #292929;
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
  font-size: 26px;
  place-self: center;
  font-family: "Helvetica Neue bold", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
`;
const NameDiv = styled.div`
  padding-top: 5em;
  display: flex;
  flex-direction: row;
`;
const NameDivCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const BioDivDetails = styled.div`
  padding-top: 5.28em;
  display: flex;
  flex-direction: row;
`;
const BioDivDescription = styled.div`
  width: 22.3em;
  margin-top: 0.75em;
`;
const AuxDiv = styled.div`
  background-color: #1f1f1f;
  width: 100%;
  height: 14.16vh;
  display: flex;
  flex-direction: row;
`;
const ExitPosi = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding-right: 4.64vh;
  cursor: pointer;
`;
const ExitImg = styled.img`
  cursor: pointer;
  position: absolute;
  width: 19px;
  height: 19px;
  padding-top: 23px;
`;
const ExiLbl = styled.p`
  text-align: left;
  margin: 0px;
  color: #fff;
  text-align-last: left;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  font-size: 16px;
  font-weight: 100;
  padding-top: 23px;
  padding-right: -73px;
  margin-left: -40px;
  position: absolute;
`;
const NumbersDiv = styled.div`
  background-color: #383838;
  width: 100%;
  height: 5.7em;
  display: flex;
  flex-direction: row;
  flex: 3;
`;

const NumbersDivPosition = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  flex: 1;
  text-align: center;
`;
const NumberProps = styled.h1`
  font-family: "Helvetica Neue bold", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  margin: 0px;
  font-size: 2em;
  margin-block-start: 12px;
`;
const Lbl = styled.span`
  font-size: 17px;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
`;

const BioDiv = styled.div`
  background-color: #292929;
  width: 100%;
  height: 49.44vh;
`;
const NameSpan = styled.h1`
  font-size: 17px;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  color: #ffffff;
  padding-left: 11px;
  padding-top: 23px;
  margin-block-start: 0em;
`;
const Image = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 200px;
  position: absolute;
  border: groove;
  margin-top: -3.9em;
`;

const ImagePosition = styled.div`
  text-align: center;
  margin-left: -7em;
`;
const Paragraph = styled.p`
  text-align: left;
  margin: 0px;
  color: #fff;
  text-align-last: left;
  padding-left: 24px;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  font-size: 17px;
  font-weight: 100;
`;
