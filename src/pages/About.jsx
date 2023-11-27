import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { skills, experiences } from "../constants";
import { CTA } from "../components/";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello! I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Faizan
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Welcome to my professional space! Constantly evolving and honing my
          skills to meet the challenges of tomorrow. Join me on this dynamic
          journey of growth and expertise. Explore my portfolio for a glimpse
          into the intersection of passion and proficiency.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div
              className="block-container w-20 h-20"
              key={`skill-no-${index}`}
            >
              <div className="btn-back rounded-xl" />

              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            As a software engineer, I've immersed myself in impactful projects,
            contributing to cutting-edge solutions. My journey is defined by a
            passion for problem-solving and a commitment to excellence. From
            designing efficient algorithms to seamless collaboration within
            cross-functional teams, my work reflects a dedication to innovation
            and precision. Ready to bring this expertise to new challenges, I
            thrive on pushing the boundaries of what's possible in software
            engineering. Here's proof of my skills:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{
                  backgroundColor: experience.iconBg,
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>

                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      className="text-black-500/50 font-normal pl-1 text-sm"
                      key={`experience-point-${index}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
