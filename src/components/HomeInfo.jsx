import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>

    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}{" "}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Faizan</span> &#128075;
      <br />A Software Engineer from Pakistan
    </h1>
  ),

  2: (
    <InfoBox
      text={"Working my way up, learning new skills as I go."}
      link={"/about"}
      btnText={"Learn More"}
    />
  ),

  3: (
    <InfoBox
      text={
        "Elevating skills, one project at a time! Explore my journey and creations."
      }
      link={"/projects"}
      btnText={"Visit my Portfolio"}
    />
  ),

  4: (
    <InfoBox
      text={
        "Need a project done? Or looking for a dev? I'm just a few clicks away!"
      }
      link={"/contact"}
      btnText={"Let's Talk!"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
