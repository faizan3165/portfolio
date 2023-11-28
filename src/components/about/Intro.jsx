import React from "react";

const Intro = () => {
  return (
    <>
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
    </>
  );
};

export default Intro;
