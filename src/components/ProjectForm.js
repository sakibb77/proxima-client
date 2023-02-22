import React, { useState } from "react";
import { useProjectContext } from "../hooks/useProjectContext";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [manager, setManager] = useState("");
  const [dev, setDev] = useState("");
  const [error, setError] = useState(null);

  const { dispatch } = useProjectContext();

  //post request
  const handleSubmit = async (e) => {
    e.preventDefault();
    //data
    const projectDataObj = { title, tech, budget, duration, manager, dev };

    //post req
    const res = await fetch("http://localhost:4000/api/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(projectDataObj),
    });

    const json = await res.json();

    //!res.ok
    if (!res.ok) {
      setError(json.error);
    }

    //req.ok reset
    if (res.ok) {
      setTitle("");
      setTech("");
      setBudget("");
      setDev("");
      setDuration("");
      setManager("");
      setError(null);

      dispatch({ type: "CREATE_PROJECT", payload: json });
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="col-span-2 flex flex-col gap-3"
    >
      <h2 className="text-2xl font-medium text-sky-400 mb-10">
        Add a New Project
      </h2>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="title"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Project Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="e.g. e-commerce website"
          name=""
          id="title"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="tech"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Technologies
        </label>
        <input
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          type="text"
          placeholder="e.g. e-commerce website"
          name=""
          id="tech"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="budget"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Budget(in USD)
        </label>
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          type="number"
          placeholder="e.g. 500"
          name=""
          id="budget"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="duration"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Duration(in weeks)
        </label>
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          type="number"
          placeholder="e.g. 4"
          name=""
          id="duration"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="manager"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Manager
        </label>
        <input
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          type="text"
          placeholder="e.g. sakib biswas"
          name=""
          id="manager"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="dev"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Developer
        </label>
        <input
          value={dev}
          onChange={(e) => setDev(e.target.value)}
          type="text"
          placeholder="e.g. 5"
          name=""
          id="dev"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
        />
      </div>

      <button
        type="submit"
        className="bg-sky-400 rounded-lg text-slate-900 py-3"
      >
        Add Project
      </button>
      {error && (
        <p className="bg-rose-500/20 text-rose-500 border border-rose-500 p-2 text-sm tracking-wide">
          {error}
        </p>
      )}
    </form>
  );
};

export default ProjectForm;
