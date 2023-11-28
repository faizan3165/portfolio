import { Link } from "react-router-dom";

import { projects } from "../../constants";

import { arrow } from "../../assets/icons";

const Work = () => {
  return (
    <>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div key={`project-no-${index}`} className="lg:w-[400px] w-full">
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />

              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="projectIcon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>

              <p className="mt-2 text-slate-500">{project.description}</p>

              <div className="flex items-center mt-5 gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>

                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Work;
