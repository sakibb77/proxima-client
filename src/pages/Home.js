import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import { useProjectContext } from "../hooks/useProjectContext";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { projects, dispatch } = useProjectContext();

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/projects");
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();

        if (res.ok) {
          dispatch({ type: "SET_PROJECTS", payload: data });
        }

        console.log(data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    getProjects();
  }, [dispatch]);

  return (
    <div className="home container mx-auto py-16 grid grid-cols-8 gap-10">
      <div className="left col-span-6">
        <h2 className="text-2xl font-medium text-amber-400 mb-10">
          All Projects
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
