import React from "react";
import "./Reviews.css";
import { BsFillStarFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const Reviews = () => {
  return (
    <section id="Reviews">
      <div className="h2">
        <h5>Testimonial</h5>
        <h2>Clients We Help</h2>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="testimonial-box">
          <div className="box-top">
            <div className="profile">
              <div class="profile-img">
                <img src="./assets/rev1.jpg" alt="Me" />
              </div>
              <div className="name-user">
                <strong>Jonathan Javier</strong>
                <span>CEO@ Wonsulting</span>
              </div>
            </div>
            <div className="reviews">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
          <div className="client-comment">
            <p>
              The Hotel is clean and good. The services are perfect. Staff is
              excellent and most kindly. They are going out of their way to
              help. I needed medicine and they offered me to go and buy it. The
              same for items from the supermarket. When I asked for a late check
              out, the Manager himself came to grant me with this service!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-box">
          <div className="box-top">
            <div className="profile">
              <div class="profile-img">
                <img src="./assets/rev2.jpg" alt="Me" />
              </div>
              <div className="name-user">
                <strong>Osayi Alile</strong>
                <span>Consultant and Director</span>
              </div>
            </div>
            <div className="reviews">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
          <div className="client-comment">
            <p>
              The Hotel is clean and good. The services are perfect. Staff is
              excellent and most kindly. They are going out of their way to
              help. I needed medicine and they offered me to go and buy it. The
              same for items from the supermarket. When I asked for a late check
              out, the Manager himself came to grant me with this service!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-box">
          <div className="box-top">
            <div className="profile">
              <div class="profile-img">
                <img src="./assets/rev3.jpg" alt="Me" />
              </div>
              <div className="name-user">
                <strong>Isabella Mondonca</strong>
                <span>Public Relations</span>
              </div>
            </div>
            <div className="reviews">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
          <div className="client-comment">
            <p>
              The Hotel is clean and good. The services are perfect. Staff is
              excellent and most kindly. They are going out of their way to
              help. I needed medicine and they offered me to go and buy it. The
              same for items from the supermarket. When I asked for a late check
              out, the Manager himself came to grant me with this service!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-box">
          <div className="box-top">
            <div className="profile">
              <div class="profile-img">
                <img src="./assets/rev4.jpg" alt="Me" />
              </div>
              <div className="name-user">
                <strong>Shama Hyder</strong>
                <span>CEO of Zen Media</span>
              </div>
            </div>
            <div className="reviews">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
          <div className="client-comment">
            <p>
              The Hotel is clean and good. The services are perfect. Staff is
              excellent and most kindly. They are going out of their way to
              help. I needed medicine and they offered me to go and buy it. The
              same for items from the supermarket. When I asked for a late check
              out, the Manager himself came to grant me with this service!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-box">
          <div className="box-top">
            <div className="profile">
              <div class="profile-img">
                <img src="./assets/rev5.jpg" alt="Me" />
              </div>
              <div className="name-user">
                <strong>Rob Norman</strong>
                <span>Director at Piano</span>
              </div>
            </div>
            <div className="reviews">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
          <div className="client-comment">
            <p>
              The Hotel is clean and good. The services are perfect. Staff is
              excellent and most kindly. They are going out of their way to
              help. I needed medicine and they offered me to go and buy it. The
              same for items from the supermarket. When I asked for a late check
              out, the Manager himself came to grant me with this service!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-box">
          <div className="box-top">
            <div className="profile">
              <div class="profile-img">
                <img src="./assets/rev6.jpg" alt="Me" />
              </div>
              <div className="name-user">
                <strong>Guy Kawasaki</strong>
                <span>Chief Evangelist</span>
              </div>
            </div>
            <div className="reviews">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
          <div className="client-comment">
            <p>
              The Hotel is clean and good. The services are perfect. Staff is
              excellent and most kindly. They are going out of their way to
              help. I needed medicine and they offered me to go and buy it. The
              same for items from the supermarket. When I asked for a late check
              out, the Manager himself came to grant me with this service!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Reviews;
