import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Portfolio = ({ props }) => {
  return (
    <section id="portfolio">
      <h5>My recent works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src="/Assets/portfolio1.jpg" alt="" />
              </div>
              <div className="portfolio__item-info">
                <h3>This is a portfolio item title</h3>
                <div className="portfolio-links">
                  <a className="git" href="https://github.com/" target="_blank">
                    GitHub
                  </a>
                  <a className="demo" href="https://space-sable.vercel.app/">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src="/Assets/portfolio2.jpg" alt="" />
              </div>
              <div className="portfolio__item-info">
                <h3>This is a portfolio item title</h3>
                <div className="portfolio-links">
                  <a className="git" href="https://github.com/" target="_blank">
                    GitHub
                  </a>
                  <a className="demo" href="https://space-sable.vercel.app/">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src="/Assets/portfolio3.jpg" alt="" />
              </div>
              <div className="portfolio__item-info">
                <h3>This is a portfolio item title</h3>
                <div className="portfolio-links">
                  <a className="git" href="https://github.com/" target="_blank">
                    GitHub
                  </a>
                  <a className="demo" href="https://space-sable.vercel.app/">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src="/Assets/portfolio4.jpg" alt="" />
              </div>
              <div className="portfolio__item-info">
                <h3>This is a portfolio item title</h3>
                <div className="portfolio-links">
                  <a className="git" href="https://github.com/" target="_blank">
                    GitHub
                  </a>
                  <a className="demo" href="https://space-sable.vercel.app/">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
