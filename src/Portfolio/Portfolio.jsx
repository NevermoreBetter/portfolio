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
          spaceBetween={150}
        >
          <SwiperSlide>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <a href="https://space-next-ten.vercel.app/" target="_blank">
                  {" "}
                  <img src="/Assets/space.jpg" alt="" />
                </a>
              </div>
              <div className="portfolio__item-info">
                <h3>Space Travel</h3>
                <div className="portfolio-links">
                  <a
                    className="git"
                    href="https://github.com/NevermoreBetter/space-next"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a className="demo" href="https://space-next-ten.vercel.app/">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <a href="https://countries-red.vercel.app/" target="_blank">
                  {" "}
                  <img src="/Assets/countries.jpg" alt="" />
                </a>
              </div>
              <div className="portfolio__item-info">
                <h3>Countries List</h3>
                <div className="portfolio-links">
                  <a
                    className="git"
                    href="https://github.com/NevermoreBetter/countries"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a className="demo" href="https://countries-red.vercel.app/">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <a href="https://ip-tracker-sooty.vercel.app/" target="_blank">
                  {" "}
                  <img src="/Assets/tracker.jpg" alt="" />
                </a>
              </div>
              <div className="portfolio__item-info">
                <h3>IP Tracker</h3>
                <div className="portfolio-links">
                  <a
                    className="git"
                    href="https://github.com/NevermoreBetter/ip-tracker"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    className="demo"
                    href="https://ip-tracker-sooty.vercel.app/"
                  >
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
