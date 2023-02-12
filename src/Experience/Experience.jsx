import { BsPatchCheckFill } from "react-icons/bs";

const Experience = ({ props }) => {
  return (
    <section id="experience" className="md:w-[66%]">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__content grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-8">
          <article>
            <div className="exp-item">
              <BsPatchCheckFill className="icon" />
              <h4>HTML</h4>
            </div>
            <small>Experienced</small>
          </article>
          <article>
            <div className="exp-item">
              <BsPatchCheckFill className="icon" />
              <h4>CSS</h4>
            </div>
            <small>Experienced</small>
          </article>
          <article>
            <div className="exp-item">
              <BsPatchCheckFill className="icon" />
              <h4>JavaScript</h4>
            </div>
            <small>Experienced</small>
          </article>
          <article>
            <div className="exp-item">
              <BsPatchCheckFill className="icon" />
              <h4>Tailwind</h4>
            </div>
            <small>Experienced</small>
          </article>
          <article>
            <div className="exp-item">
              <BsPatchCheckFill className="icon" />
              <h4>React</h4>
            </div>
            <small>Experienced</small>
          </article>
          <article>
            <div className="exp-item">
              <BsPatchCheckFill className="icon" />
              <h4>Next</h4>
            </div>
            <small>Experienced</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
