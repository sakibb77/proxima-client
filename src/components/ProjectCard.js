import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card bg-slate-800 p-5 rounded-xl shadow-xl border border-slate-700 flex flex-col gap-5 w-[26rem]">
      <div className="top">
        <span className="text-sky-400">ID: {project._id}</span>
        <h3 className="text-2xl font-medium">{project.title}</h3>
        <span className="uppercase text-xs tracking-widest text-slate-500 font-medium">
          {project.tech}
        </span>
      </div>
      <div className="middle text-slate-300 flex gap-5 text-base">
        <div className="left flex flex-col">
          <span>Budget: {project.budget}</span>
          <span>
            Added on: {new Date(project.createdAt).toLocaleDateString()}
          </span>
          <span>
            Last updated: {new Date(project.updatedAt).toLocaleDateString()}
          </span>
        </div>
        <div className="right flex flex-col">
          <span>manager: {project.manager}</span>
          <span>Developer: {project.dev}</span>
          <span>
            Duration:{" "}
            {`${project.duration} week${project.duration === 1 ? "" : "s"}`}
          </span>
        </div>
      </div>
      <div className="bottom flex gap-5">
        <button className="bg-sky-400 text-slate-900 font-medium py-2 px-5 rounded-md shadow-xl hover:bg-sky-50 duration-300">
          Update
        </button>
        <button className="text-rose-500 hover:underline">delete</button>
      </div>
    </div>
  );
};

export default ProjectCard;
