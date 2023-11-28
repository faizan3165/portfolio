import { Tooltip } from "react-tooltip";

import { skills } from "../../constants";

const Skills = () => {
  return (
    <>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div
              className="block-container w-20 h-20"
              key={`skill-no-${index}`}
            >
              <div className="btn-back rounded-xl" />

              <div
                data-tooltip-id="icon-name"
                data-tooltip-content={`${skill.name} - ${skill.type}`}
              >
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <Tooltip id="icon-name" style={{ borderRadius: "1.5rem" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
