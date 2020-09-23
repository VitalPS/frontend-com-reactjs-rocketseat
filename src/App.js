import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import api from "./services/api";

function App() {
  const [projects, setProjects] = useState([]); //contem um array (mesmo tipo do response.data)

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // projects.push(`New project ${Date.now()}`);
    // setProjects([...projects, `New project ${Date.now()}`]);

    const response = await api.post("projects", {
      title: `New project ${Date.now()}`,
      owner: "Patrik Vital",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Add project
      </button>
    </>
  );
}

export default App;
