import { CTA, Experience, Intro, Skills } from "../components/";

const About = () => {
  return (
    <section className="max-container">
      <Intro />

      <Skills />

      <Experience />

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
