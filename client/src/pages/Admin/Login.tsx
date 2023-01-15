import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  interface Login {
    email: string;
    password: string;
  }

  const navigate = useNavigate();

  const [login, setLogin] = useState<Login>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: Add login logic
    e.preventDefault();

    if (login.email === "" || login.password === "") {
      toast.error("Please fill all the fields");
      return;
    }

    toast.success("Login Successful");

    navigate("/dashboard/admin");
  };

  return (
    <div className="flex h-full items-center justify-center p-4 ">
      <div className="h-[50%] w-full max-w-[45rem] rounded-md bg-zinc-900/80 shadow-lg ">
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-full flex-col justify-between p-8 text-lg text-white"
        >
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={login.email}
            placeholder="Admin Email"
            autoFocus
            className="rounded-md border border-zinc-300/10 bg-transparent p-2 placeholder-zinc-500 outline-none focus:border-zinc-300"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={login.password}
            placeholder="Admin Password"
            className="rounded-md border border-zinc-300/10 bg-transparent p-2 placeholder-zinc-500 outline-none focus:border-zinc-300 "
          />
          <button
            disabled={login.email === "" || login.password === ""}
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
export default Login;
