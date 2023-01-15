import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="h-full flex  items-center justify-center p-4">
      <div className="bg-sky-900/30 p-4 lg:p-8 rounded-md flex flex-col text-center space-y-8 lg:space-y-10">
        <h1 className="text-4xl lg:text-6xl">
          Welcome to <span className="text-sky-500 font-bold">MERN ERP</span>
        </h1>
        <p className="text-lg lg:text-xl font-light tracking-wide">
          A simple MERN stack application with a focus on ERP features.
        </p>

        <div className="flex flex-col text-sky-500 lg:flex-row lg:space-y-0 lg:justify-evenly items-center space-y-6 lg:text-lg ">
          <Link
            to="/login"
            className="bg-sky-900/70 hover:scale-105 transition-all ease-in-out w-fit rounded-md px-4 py-2"
          >
            Admin Login
          </Link>
          <Link
            to="/student-login"
            className="bg-sky-900/70 hover:scale-105 transition-all ease-in-out w-fit rounded-md px-4 py-2"
          >
            Student Login
          </Link>
          <Link
            to="/teacher-login"
            className="bg-sky-900/70 hover:scale-105 transition-all ease-in-out w-fit rounded-md px-4 py-2"
          >
            Teacher Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
