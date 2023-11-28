import React from "react";

const Intro = () => {
  return (
    <>
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Discover the code behind my creations. Explore a portfolio of
          innovative software projects—from sleek apps to powerful backend
          solutions. Let the projects tell their story. Ready to dive into the
          world of tech creativity?
        </p>
      </div>
    </>
  );
};

export default Intro;
