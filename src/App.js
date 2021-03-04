import React from "react";
import { AuthContext } from "./providers/auth";
import Routes from "./routes";
function App() {
  const { user, setUser } = React.useContext(AuthContext)
  console.log(user);
  return (
    <Routes />
  );
}

export default App;
