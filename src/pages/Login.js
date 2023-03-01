import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogin();

  const loginHandler = async (e) => {
    e.preventDefault();

    //login user
    await login(email, password);
  };

  return (
    <form
      onSubmit={loginHandler}
      className="flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2 className="text-2xl font-medium text-amber-400">Login</h2>

      <div className="form-control flex flex-col gap-2">
        <label htmlFor="email" className="cursor-pointer">
          Email Address
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="bg-transparent border py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300 border-slate-500"
          type="text"
          name=""
          id="email"
        />
      </div>

      <div className="form-control flex flex-col gap-2 ">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          className="bg-transparent border py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300 border-slate-500"
          type="password"
          name=""
          id="password"
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-sky-400 rounded-lg text-slate-900 py-3 text-lg font-medium"
      >
        Log in
      </button>
      {error && (
        <p className="bg-rose-500/20 rounded-md text-rose-500 border border-rose-500 p-2 text-sm tracking-wide">
          {error}
        </p>
      )}
    </form>
  );
};

export default Login;
