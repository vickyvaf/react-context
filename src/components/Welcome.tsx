import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Welcome = () => {
  const authContext = useContext(AuthContext);

  return <h1>Welcome {authContext.input} 👋</h1>;
};

export default Welcome;
