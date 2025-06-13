import React from "react";

const ProjectCard = ({ title, description, tech }) => (
  <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
    <h3 className="text-xl font-bold">{title}</h3>
    <p>{description}</p>
    <div className="mt-2 text-sm text-gray-600">
      {tech.map(t => <span key={t} className="mr-2 bg-gray-200 px-2 py-1 rounded">{t}</span>)}
    </div>
  </div>
);

export default ProjectCard;
