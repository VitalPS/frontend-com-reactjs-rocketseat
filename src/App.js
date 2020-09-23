import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import photo from "./assets/photo.jpg";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end web",
  ]);

  function handleAddProject() {
    // projects.push(`New project ${Date.now()}`);

    setProjects([...projects, `New project ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <img src={photo} alt="photo" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Add project
      </button>
    </>
  );
}

export default App;
