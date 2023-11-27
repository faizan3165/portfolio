import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have A Project In Mind? <br className="max-sm:block hidden" /> Let's
        Build Something Together!
      </p>

      <Link to={"/contact"} className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
