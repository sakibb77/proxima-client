import React, { useState } from "react";
import { useProjectContext } from "../hooks/useProjectContext";
import { useAuthContext } from "../hooks/useAuthContext";

const ProjectForm = ({ project, setIsModalOpen, setIsOverlayOpen }) => {
  const [title, setTitle] = useState(project ? project.title : "");
  const [tech, setTech] = useState(project ? project.tech : "");
  const [budget, setBudget] = useState(project ? project.budget : "");
  const [duration, setDuration] = useState(project ? project.duration : "");
  const [manager, setManager] = useState(project ? project.manager : "");
  const [dev, setDev] = useState(project ? project.dev : "");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const { dispatch } = useProjectContext();
  const { user } = useAuthContext();

  //post request
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("you must be logged in!");
      return;
    }
    //data
    const projectDataObj = { title, tech, budget, duration, manager, dev };

    //if there is no project send post request
    if (!project) {
      //post req
      const res = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(projectDataObj),
      });

      const json = await res.json();

      //!res.ok
      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
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
        setEmptyFields([]);

        dispatch({ type: "CREATE_PROJECT", payload: json });
      }
    }

    //if there is project send patch request
    if (project) {
      //patch req
      const res = await fetch(
        `http://localhost:5000/api/projects/${project._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(projectDataObj),
        }
      );

      const json = await res.json();

      //if !res.ok
      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }
      //if res.ok
      if (res.ok) {
        setError(null);
        setEmptyFields([]);

        //dispatch
        dispatch({ type: "UPDATE_PROJECT", payload: json });

        //close modal and overlay
        setIsModalOpen(false);
        setIsOverlayOpen(false);
      }
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="col-span-2 flex flex-col gap-3"
    >
      <h2 className="text-2xl font-medium text-amber-400 mb-10">
        {project ? "Update Your Project" : "Add a New Project"}
      </h2>

      <div className={`${project ? "flex gap-10" : ""}`}>
        <div className="flex flex-col gap-3">
          <div className="form-control flex flex-col gap-2">
            <label
              htmlFor="title"
              className="cursor-pointer hover:text-indigo-400 duration-300"
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
              className={`bg-transparent border py-3 px-5 rounded-lg outline-none focus:border-indigo-400 duration-300 ${
                emptyFields?.includes("title")
                  ? "border-rose-500"
                  : "border-slate-500"
              }`}
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label
              htmlFor="tech"
              className="cursor-pointer hover:text-indigo-400 duration-300"
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
              className={`bg-transparent border py-3 px-5 rounded-lg outline-none focus:border-indigo-400 duration-300 ${
                emptyFields?.includes("tech")
                  ? "border-rose-500"
                  : "border-slate-500"
              }`}
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label
              htmlFor="budget"
              className="cursor-pointer hover:text-indigo-400 duration-300"
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
              className={`bg-transparent border py-3 px-5 rounded-lg outline-none focus:border-indigo-400 duration-300 ${
                emptyFields?.includes("budget")
                  ? "border-rose-500"
                  : "border-slate-500"
              }`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="form-control flex flex-col gap-2">
            <label
              htmlFor="duration"
              className="cursor-pointer hover:text-indigo-400 duration-300"
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
              className={`bg-transparent border py-3 px-5 rounded-lg outline-none focus:border-indigo-400 duration-300 ${
                emptyFields?.includes("duration")
                  ? "border-rose-500"
                  : "border-slate-500"
              }`}
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label
              htmlFor="manager"
              className="cursor-pointer hover:text-indigo-400 duration-300"
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
              className={`bg-transparent border py-3 px-5 rounded-lg outline-none focus:border-indigo-400 duration-300 ${
                emptyFields?.includes("manager")
                  ? "border-rose-500"
                  : "border-slate-500"
              }`}
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label
              htmlFor="dev"
              className="cursor-pointer hover:text-indigo-400 duration-300"
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
              className={`bg-transparent border py-3 px-5 rounded-lg outline-none focus:border-indigo-400 duration-300 ${
                emptyFields?.includes("dev")
                  ? "border-rose-500"
                  : "border-slate-500"
              }`}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-indigo-400 rounded-lg text-slate-900 py-3"
      >
        {project ? "Confirm Update" : "Add Project"}
      </button>
      {error && (
        <p className="bg-rose-500/20 rounded-md text-rose-500 border border-rose-500 p-2 text-sm tracking-wide">
          {error}
        </p>
      )}
    </form>
  );
};

export default ProjectForm;
