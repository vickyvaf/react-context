import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useAuthContext } from "../context/authContext";

const Form = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const context = useAuthContext();
  console.log(context);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/welcome");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={authContext.input}
        onChange={(e) => authContext.setInput(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
