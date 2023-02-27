import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <form className="flex flex-col gap-5 py-20 mx-auto max-w-sm">
      <h2 className="text-2xl font-medium text-sky-400">Signup</h2>

      <div className="form-control flex flex-col gap-2">
        <label htmlFor="email" className="cursor-pointer">
          Email Address
        </label>
        <input
          onChange={(e) => e.target.value}
          value={email}
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
          onChange={(e) => e.target.value}
          value={password}
          placeholder="Enter Your Password"
          className="bg-transparent border py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300 border-slate-500"
          type="text"
          name=""
          id="password"
        />
      </div>

      <button
        type="submit"
        className="bg-sky-400 rounded-lg text-slate-900 py-3 text-lg font-medium"
      >
        Sign in
      </button>
    </form>
  );
};

export default Signup;
