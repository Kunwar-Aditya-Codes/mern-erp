import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const TeacherLogin = () => {
  interface TeacherLogin {
    tId: string;
    password: string;
  }

  const navigate = useNavigate();

  const [teacherLogin, setTeacherLogin] = useState<TeacherLogin>({
    tId: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeacherLogin({ ...teacherLogin, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: Add login logic
    e.preventDefault();

    if (!teacherLogin.tId || !teacherLogin.password) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Login successful");

    navigate("/dashboard/teacher");
  };

  return (
    <div className="flex h-full items-center justify-center p-4 ">
      <div className="h-[50%] w-full max-w-[45rem] rounded-md bg-zinc-900/80 shadow-lg ">
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-full flex-col justify-between p-8 text-lg text-white"
        >
          <input
            type="tId"
            name="tId"
            onChange={handleChange}
            value={teacherLogin.tId}
            placeholder="Teacher Id"
            autoFocus
            className="rounded-md border border-zinc-300/10 bg-transparent p-2 placeholder-zinc-500 outline-none focus:border-zinc-300"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={teacherLogin.password}
            placeholder="Password"
            className="rounded-md border border-zinc-300/10 bg-transparent p-2 placeholder-zinc-500 outline-none focus:border-zinc-300 "
          />
          <button
            disabled={teacherLogin.tId === "" || teacherLogin.password === ""}
            type="submit"
            className="rounded-md bg-zinc-300/10 p-2 text-zinc-300 disabled:cursor-not-allowed  disabled:text-zinc-500 "
          >
            Login
          </button>

          <Link
            to="/"
            className="text-center text-base text-zinc-500 underline underline-offset-4 hover:text-zinc-300 "
          >
            Go Back
          </Link>
        </form>
      </div>
    </div>
  );
};
export default TeacherLogin;
