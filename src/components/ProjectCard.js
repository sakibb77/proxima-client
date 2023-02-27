import React, { useState } from "react";
import { useProjectContext } from "../hooks/useProjectContext";
import moment from "moment";
import ProjectForm from "./ProjectForm";

const ProjectCard = ({ project }) => {
  const { dispatch } = useProjectContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  //delete handler
  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:4000/api/projects/${project._id} `,
      {
        method: "DELETE",
      }
    );
    const json = await res.json();
    if (res.ok) {
      dispatch({ type: "DELETE_PROJECT", payload: json });
    }
  };

  //update handler
  const handleUpdate = () => {
    setIsModalOpen(true);
    setIsOverlayOpen(true);
  };

  //overlay handler
  const handleOverlay = () => {
    setIsModalOpen(false);
    setIsOverlayOpen(false);
  };

  return (
    <div className="project-card bg-slate-800 p-5 rounded-xl shadow-xl border border-slate-700 flex flex-col gap-5 w-[28rem]">
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
            Added: {moment(project.createdAt).format("MMM/DD/hh.mm A")}
          </span>
          <span>
            Updated: {moment(project.updatedAt).format("MMM/DD/hh.mm A")}
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
        <button
          onClick={handleUpdate}
          className="bg-sky-400 text-slate-900 font-medium py-2 px-5 rounded-md shadow-xl hover:bg-sky-50 duration-300"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="text-rose-500 hover:underline"
        >
          delete
        </button>
      </div>

      {/* overlay */}
      <div
        onClick={handleOverlay}
        className={`overlay fixed z-[1] h-screen w-screen bg-slate-900/50 backdrop-blur-sm top-0 left-0 right-0 bottom-0
       ${isOverlayOpen ? "" : "hidden"}`}
      ></div>

      {/* modal */}

      <div
        className={`update-modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-10 rounded-xl shadow-xl border border-slate-700 z-[2] ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <ProjectForm
          project={project}
          setIsModalOpen={setIsModalOpen}
          setIsOverlayOpen={setIsOverlayOpen}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
