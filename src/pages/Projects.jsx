import { CTA, ProjectsIntro, Work } from "../components";

const Projects = () => {
  return (
    <section className="max-container">
      <ProjectsIntro />

      <Work />

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
