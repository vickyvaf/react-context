import { useState } from "react";
import { AuthContext } from "./context/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Welcome from "./components/Welcome";

function App() {
  const [input, setInput] = useState<string>("");

  const authContextValue = {
    input,
    setInput,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
