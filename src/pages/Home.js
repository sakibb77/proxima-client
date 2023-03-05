import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import { useProjectContext } from "../hooks/useProjectContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();

  const { projects, dispatch } = useProjectContext();

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/projects`,
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: data });
      }
    };

    if (user) {
      getProjects();
    }
  }, [dispatch, user]);

  return (
    <div className="home container mx-auto py-16 grid grid-cols-8 gap-10">
      <div className="left col-span-6">
        <h2 className="text-2xl font-medium text-amber-400 mb-10 capitalize">
          {projects.length < 1 ? "no projects" : "All Projects"}
        </h2>
        <div className="projects-wrapper flex gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
        </div>
      </div>
      <ProjectForm />
    </div>
  );
};

export default Home;
