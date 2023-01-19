import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Admin/Login';
import Welcome from './pages/Welcome';
import Error from './pages/Error';
import StudentLogin from './pages/Student/StudentLogin';
import TeacherLogin from './pages/Teacher/TeacherLogin';
import Dashboard from './components/Dashboard';
import AdminHome from './pages/Admin/AdminHome';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public routes */}
        <Route index path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/student-login' element={<StudentLogin />} />
        <Route path='/teacher-login' element={<TeacherLogin />} />

        {/* Protected routes */}
        <Route element={<RequireAuth allowedRole={'admin'} />}>
          <Route path='/dashboard/*' element={<Dashboard />}>
            {/* Authorized Routes */}
            <Route path='admin' element={<AdminHome />} />
          </Route>
        </Route>

        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
