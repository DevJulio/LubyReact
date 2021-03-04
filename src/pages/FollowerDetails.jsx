import React from "react";
import styled from "styled-components";
import BottomBar from "../components/BottomBar";
import { AuthContext } from "../providers/auth";
import Point from "../assets/img/Point.png";
import Save from "../assets/img/Save.png";
import { useHistory } from "react-router";
import Left from "../assets/img/LeftArrowWhite.png";
import { FollowContext } from "../providers/followers";
import axios from "axios";
import { RepoContext } from "../providers/repos";
function Profile() {
  const access_token = "8770883d6f9890311a11d98a26d930c81399f52a";
  const { user, detail, setUser } = React.useContext(AuthContext);
  const { follow, setFollow, following, setFollowing } = React.useContext(
    FollowContext
  );
  const { repo, setRepo } = React.useContext(RepoContext);
  console.log(detail);
  const history = useHistory();

  const loadFollowers = async (data) => {
    console.log(data);
    let b = await axios
      .get(data, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
      .then((res) => {
        let arr = res.data;
        setFollow(arr);
        console.log(follow);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const loadFollowing = async (data) => {
    console.log(data);
    let b = await axios
      .get("https://api.github.com/users/" + data + "/following", {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        let arr = res.data;
        setFollowing(arr);
        console.log(follow);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loadRepos = async (data) => {
    console.log(data);
    let b = await axios
      .get(data, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        let arr = res.data;
        setRepo(arr);

        history.push("/Profile");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const redirect = () => {
    setUser(detail);
    loadFollowing(detail.login);
    loadFollowers(detail.followers_url);
    loadRepos(detail.repos_url);
  };

  return (
    <>
      <BarDiv>
        <BarArrow src={Left} />
        <BarName>{"#" + detail.login}</BarName>
        <ExiLbl>Salvar</ExiLbl>
        <BarSaveArrow
          onClick={() => {
            redirect();
          }}
          src={Save}
          alt=""
        />
      </BarDiv>
      <ContainerDiv>
        <ImagePosition>
          <Image src={detail.avatar_url}></Image>
        </ImagePosition>
        <MainDiv>
          <NameDiv>
            <SqrImg src={Point} alt="" />
            <SqrLbl>{detail.name}</SqrLbl>
          </NameDiv>
          <NameDivCol>
            <Paragraph>{detail.email}</Paragraph>
            <Paragraph>{detail.location}</Paragraph>
          </NameDivCol>
        </MainDiv>
        <NumbersDiv>
          <NumbersDivPosition>
            <NumberProps>{detail.followers}</NumberProps>
            <Lbl>Seguidores</Lbl>
          </NumbersDivPosition>
          <NumbersDivPosition>
            <NumberProps>{detail.following}</NumberProps>
            <Lbl>Seguindo</Lbl>
          </NumbersDivPosition>
          <NumbersDivPosition>
            <NumberProps>{detail.public_repos}</NumberProps>
            <Lbl>Repos</Lbl>
          </NumbersDivPosition>
        </NumbersDiv>
        <BioDiv>
          <BioDivDetails>
            <SqrImg src={Point} alt="" />
            <SqrLbl>BIO</SqrLbl>
          </BioDivDetails>
          <BioDivDescription>
            <Paragraph>{detail.bio}</Paragraph>
          </BioDivDescription>
          <BottomBar
            PropHome={false}
            PropRepos={false}
            Seguidores={false}
            Seguindo={true}
          ></BottomBar>
        </BioDiv>
      </ContainerDiv>
    </>
  );
}
export default Profile;
const ContainerDiv = styled.div``;

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
const ExiLbl = styled.p`
  margin: 0px;
  color: #fff;
  text-align-last: left;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  font-size: 16px;
  font-weight: 100;
  width: 30px;
  float: right;
  margin-top: -2em;
  margin-right: 4.5em;
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

const BarDiv = styled.div`
  background-color: #1f1f1f;
  width: 100%;
  height: 14.64vh;
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
const BarSaveArrow = styled.img`
  width: 30px;
  float: right;
  margin-top: -2.35em;
  margin-right: 1em;
`;
