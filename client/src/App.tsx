import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Admin/Login";
import Welcome from "./pages/Welcome";
import Error from "./pages/Error";
import StudentLogin from "./pages/Student/StudentLogin";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
