import CV from "/Assets/CV.pdf";

const Header = ({ props }) => {
  return (
    <section id="header">
      <h5>Hello I`m</h5>
      <h1 className="mb-5">Valeriy Gritsan</h1>
      <h5>Front-End Developer</h5>
      <div className="flex gap-7 justify-center">
        <a
          className="about__btn hover:bg-[#535bf2] hover:text-[#242424] duration-300"
          href={CV}
          download
        >
          Download CV
        </a>
        <a
          className="about__btn bg-[#535bf2] text-[#242424] hover:text-[#242424]"
          href="#contact"
        >
          Contact me
        </a>
      </div>

      <div className="me mt-10 w-[85%] mx-auto lg:w-[85%]">
        <img className=" lg:h-[65vh]" src="/Assets/avatar.png" alt="me" />
      </div>
    </section>
  );
};

export default Header;
