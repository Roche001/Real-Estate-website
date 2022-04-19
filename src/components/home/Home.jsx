import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="home-box">
        <div className="overlay"></div>
        <img src="./assets/bed2.jpg" alt="bed" />

        <div className="content">
          <h2>
            Extraordinary Reach. <br />
            Extraordinary Results.
          </h2>
          <p>
            You pay realtors because they have reach and proven results, <br />s
            and the Noble Black Team wants you to know it’s extraordinary <br />{" "}
            at both. It helps that the results-driven sentiment here drives home{" "}
            <br />
            the abstract idea of “extraordinary reach”
          </p>
          <div className="button">
            <div className="button-buy">
              <a href="#Properties">Buy/Rent Property</a>
            </div>
            <div className="button-submit">
              <a href="#Contacts"> Submit a Property</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="home-box">
        <div className="overlay"></div>
        <img src="./assets/about1.webp" alt="bed" />

        <div className="content">
          <h2>
            Full-Service Agents, <br />
            Modern Technology
          </h2>
          <p>
            Over the last few years, real estate has gotten a reputation for{" "}
            <br />
            being a bit stale and in need of disruption. With their slogan,{" "}
            <br />
            Redfin clearly states they’re ready to meet the needs of the modern{" "}
            <br />
            buyer.
          </p>
          <div className="button">
            <div className="button-buy">
              <a href="#Properties">Buy/Rent Property</a>
            </div>
            <div className="button-submit">
              <a href="#Contacts"> Submit a Property</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="home-box">
        <div className="overlay"></div>
        <img src="./assets/about2.webp" alt="bed" />

        <div className="content">
          <h2>
            Exceptional Properties. <br /> Exceptional Clients.
          </h2>
          <p>
            Complimenting the client is always a good idea and Pharolix Real
            Estate Agency <br /> knows it. Our target audience is a
            luxury-seeking clientele, <br /> which is also subtly communicated
            with the nod to “exceptional properties.”
          </p>
          <div className="button">
            <div className="button-buy">
              <a href="#Properties">Buy/Rent Property</a>
            </div>
            <div className="button-submit">
              <a href="#Contacts"> Submit a Property</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
