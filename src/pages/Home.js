import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "CI/CD Pipeline with Jenkins + EKS",
    description: "End-to-end deployment of microservices using Jenkins, Docker, Trivy, SonarQube, and EKS.",
    tech: ["Jenkins", "AWS EKS", "Docker", "Helm"]
  },
  {
    title: "Android App CI/CD with GitHub Actions",
    description: "Auto-build and deploy Android app using GitHub Actions and Firebase.",
    tech: ["GitHub Actions", "Firebase", "Gradle"]
  },
];

const Home = () => (
  <div className="max-w-4xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Hi, I'm Vaishnavi 👋</h1>
    <p className="mb-8">Cloud & DevOps Engineer | Passionate about CI/CD & Automation</p>

    <h2 className="text-2xl font-semibold mb-2">🚀 Projects</h2>
    <div className="grid gap-4">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </div>
  </div>
);

export default Home;
