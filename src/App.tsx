import { AuthProvider } from "./context/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Welcome from "./components/Welcome";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
