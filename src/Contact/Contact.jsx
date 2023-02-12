import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Contact = ({ props }) => {
  return (
    <section id="contact" className="w-[90%] mb-8">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container lg:grid lg:grid-cols-[.2fr_.8fr] lg:grid-rows-1 lg:justify-center lg:gap-20">
        <div className="contact__options lg:flex lg:flex-col lg:gap-4">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>gritsanowo@gmail.com</h5>
            <a className="contact-btn" href="mailto:gritsanowo@gmail.com">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsTelegram />
            <h4>Telegram</h4>
            <h5>Name Surname</h5>
            <a className="contact-btn" href="https://t.me/unabomber_official">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin />
            <h4>LinkedIn</h4>
            <h5>gritsanowo@gmail.com</h5>
            <a
              className="contact-btn"
              href="https://www.linkedin.com/in/valery-gritsan-75ab47230/"
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          action=""
          className="md:grid md:grid-cols-2 md:grid-rows-[1fr_1fr_.7fr] md:gap-4 lg:flex lg:flex-col lg:gap-8"
        >
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <textarea
            className="contact-input w-[100%] md:col-start-1 md:col-end-3 md:h-[100%]  lg:h-[40%]"
            name="message"
            id=""
            cols="30"
            rows="/"
            placeholder="Your message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn-submit bg-[#535bf2] md:row-start-3 md:col-start-1 md:col-end-3 lg:w-[40%] lg:self-center  hover:bg-transparent"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
