import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Admin/Login";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
