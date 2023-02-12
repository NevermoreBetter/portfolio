import { FiAward, FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";

const About = ({ props }) => {
  return (
    <section id="about" className="md:w-[90%]">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__me__container flex flex-col items-center justify-around lg:flex-row lg:gap-8">
        <div className="about__me__image bg-white w-[40%] rounded-lg ">
          <img
            className=" rounded-lg  hover:rotate-0 duration-500 lg:rotate-[10deg]"
            src="/Assets/me-about.jpg"
            alt="avatar"
          />
        </div>
        <div className=" about__me__content  flex flex-col justify-between items-center lg:w-[40%]">
          <div className="about__me__showcase flex flex-col gap-4 mt-4 mb-4 md:flex-row">
            <article className="me-item">
              <p>
                <FiAward />
              </p>
              <h5>Experience</h5>
              <small>1+ year working</small>
            </article>
            <article className="me-item">
              <p>
                <FiUsers />
              </p>
              <h5>Clients</h5>
              <small>100+ worldwide</small>
            </article>
            <article className="me-item">
              <p>
                <BsFolderCheck />
              </p>
              <h5>Projects</h5>
              <small>20+ projects</small>
            </article>
          </div>
          <p className="text-start mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis consequatur placeat dolor rerum laborum nihil nesciunt
            sequi laudantium velit, libero adipisci, molestiae a corporis iusto
            debitis aperiam nulla facilis quasi.
          </p>
          <a
            href="#contact"
            className="about__btn bg-[#535bf2] text-[#f9f9f9] hover:text-[#f9f9f9]"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
