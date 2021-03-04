import React from "react";
import styled from "styled-components";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
import { FollowContext } from "../providers/followers";
import Point from "../assets/img/Point.png";
import RightArrowWhite from "../assets/img/RightArrowWhite.png";
import { useHistory } from "react-router";
import { AuthContext } from "../providers/auth";
import api from "../services/api";

function Followers() {
  const { follow } = React.useContext(FollowContext);
  const { setDetail } = React.useContext(AuthContext);
  const access_token = "8770883d6f9890311a11d98a26d930c81399f52a";

  const history = useHistory();
  const checkDetails = async (data) => {
    let a = await api
      .get(data, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
      .then((res) => {
        setDetail({
          name: res.data.name ? res.data.name : "",
          login: res.data.login ? res.data.login : "",
          email: res.data.email ? res.data.email : "",
          repos_url: res.data.repos_url ? res.data.repos_url : "",
          location: res.data.location ? res.data.location : "",
          company: res.data.company ? res.data.company : "",
          bio: res.data.bio ? res.data.bio : "",
          avatar_url: res.data.avatar_url ? res.data.avatar_url : "",
          followers_url: res.data.followers_url ? res.data.followers_url : "",
          following_url: res.data.following_url ? res.data.following_url : "",
          organizations_url: res.data.organizations_url
            ? res.data.organizations_url
            : "",
          starred_url: res.data.starred_url ? res.data.starred_url : "",
          public_repos: res.data.public_repos ? res.data.public_repos : 0,
          public_gists: res.data.public_gists ? res.data.public_gists : "",
          followers: res.data.followers ? res.data.followers : 0,
          following: res.data.following ? res.data.following : 0,
        });
        history.push("/Details");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(follow);
  const listItems = follow.map((element) => (
    <MainDiv>
      <NameDiv>
        <SqrImg src={Point} alt="" />
        <ImagePosition>
          <Image src={element.avatar_url}></Image>
        </ImagePosition>
        <SqrLbl>{"#" + element.login}</SqrLbl>
      </NameDiv>
      <RowPosition>
        <RightArrowImage
          onClick={() => {
            checkDetails(element.login);
            history.push("/Details");
          }}
          src={RightArrowWhite}
        />
      </RowPosition>
    </MainDiv>
  ));
  return (
    <>
      <TopBar text={follow.length + " seguidores"} />
      {listItems}
      <BottomSpacerDiv />
      <BottomBar
        PropHome={false}
        PropRepos={false}
        Seguidores={true}
        Seguindo={false}
      ></BottomBar>
    </>
  );
}
export default Followers;

const ImagePosition = styled.div`
  text-align: center;
  margin-left: -7em;
`;
const RowPosition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  padding-right: 4.64vh;
`;
const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 200px;
  position: absolute;
  border: groove;
  margin-top: 0.5em;
  margin-left: 7em;
`;
const ArrowImage = styled.img`
  cursor: pointer;

  float: left;
  padding-top: 2.81vh;
  width: 18.47px;
  height: 18.47px;
  margin-left: 17.53px;
`;
const RightArrowImage = styled.img`
  cursor: pointer;
  position: absolute;
  width: 15.47px;
  height: 14.47px;
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
  height: 12.13vh;
  display: flex;
  flex-direction: row;
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
  margin-top: 1.7em;
`;
const SqrLbl = styled.h1`
  margin: 0px;
  margin-right: 2em;
  color: #fff;
  font-size: 16px;
  place-self: center;
  font-family: "Helvetica Neue bold", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  margin-left: 13em;
`;
const NameDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
