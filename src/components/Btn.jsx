import React, { useContext, useState } from "react";
import styled from "styled-components";
import Arrow from "../assets/img/Arrow.png";
import { AuthContext } from "../providers/auth";
import { RepoContext } from "../providers/repos";
import { FollowContext } from "../providers/followers";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import axios from "axios";

function Btn() {
  const { user, setUser } = React.useContext(AuthContext);
  const { repo, setRepo } = React.useContext(RepoContext);
  const { follow, setFollow, following, setFollowing } = React.useContext(
    FollowContext
  );
  // const { following, setFollowing } = React.useContext(FollowingContext);

  const access_token = "8770883d6f9890311a11d98a26d930c81399f52a";
  const history = useHistory();
  const loadUsers = async () => {
    let a = await api
      .get(user.name, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser({
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
        loadFollowing(res.data.login);
        loadFollowers(res.data.followers_url);
        loadRepos(res.data.repos_url);
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

  const goForm = () => {
    user.name != ""
      ? loadUsers()
      : alert("Verifique os dados e tente novamente");
  };
  return (
    <>
      <Div>
        <Button onClick={goForm}>
          ENTRAR
          <Image src={Arrow}></Image>
        </Button>
      </Div>
    </>
  );
}
export default Btn;
const Image = styled.img`
  width: 24.24px;
  height: 18.24px;
  margin-left: 13px;
`;

const Button = styled.button`
  width: 346px;
  height: 56px;
  text-align-last: center;
  border-radius: 12px;
  font-size: 23px;
  background-color: #ffce00;
  color: #030202;
  place-self: center;
  font-weight: bold;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
`;
const Div = styled.div`
  place-self: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 19px;
`;
