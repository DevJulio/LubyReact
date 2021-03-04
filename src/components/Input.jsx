import React from "react";
import styled from "styled-components";
import { AuthContext } from "../providers/auth";
function Input() {
  const { setUser } = React.useContext(AuthContext);
  return (
    <>
      <Div>
        <TextInput
          placeholder={"Usuário"}
          onChange={(e) => setUser({ name: e.target.value })}
          type={"text"}
        ></TextInput>
      </Div>
    </>
  );
}
export default Input;

const TextInput = styled.input`
  border-radius: 12px;
  font-size: 23px;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  width: 319px;
  height: 56px;
  text-align-last: left;
  place-self: center;
  padding-left: 20px;
`;

const Div = styled.div`
  place-self: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
