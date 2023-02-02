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
import { Roles } from './utils/Roles';
import PersistLogin from './components/PersistLogin';
import AdminViewStudents from './pages/Admin/AdminViewStudents';
import Prefetch from './components/Prefetch';
import AdminViewTeachers from './pages/Admin/AdminViewTeachers';
import SProfile from './pages/Student/SProfile';
import TProfile from './pages/Teacher/TProfile';

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
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRole={[...Object.values(Roles)]} />}
          >
            <Route path='/dashboard/' element={<Dashboard />}>
              {/* Authorized Routes */}
              <Route element={<RequireAuth allowedRole={[Roles.admin]} />}>
                <Route path='admin'>
                  <Route element={<Prefetch />}>
                    <Route index element={<AdminHome />} />
                    <Route path='students' element={<AdminViewStudents />} />
                    <Route path='teachers' element={<AdminViewTeachers />} />
                  </Route>
                </Route>
              </Route>

              <Route element={<RequireAuth allowedRole={[Roles.teacher]} />}>
                <Route path='teacher'>
                  <Route index element={<TProfile />} />
                </Route>
              </Route>

              <Route element={<RequireAuth allowedRole={[Roles.student]} />}>
                <Route path='student'>
                  <Route index element={<SProfile />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>

        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
