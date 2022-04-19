import React from "react";
import "./Properties.css";
import { MdLocationOn } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { RiHotelBedLine } from "react-icons/ri";
import { MdOutlinePhotoSizeSelectSmall } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Properties = () => {
  return (
    <section id="Properties">
      <div className="h2">
        <h5>Our Properties</h5>
        <h2>Featured Properties</h2>
        <div className="housing">
          <div className="housing-plan">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="housing-options"
            >
              <SwiperSlide className="slide">
                <img src="./assets/bed1.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/bed2.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/bed3.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/bed4.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/bed5.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/bed6.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/bed7.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/bed8.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/bed9.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/bed10.jpg" alt="bed" />
              </SwiperSlide>
            </Swiper>
            <div className="beds">
              <h4>Rhino Hill Property</h4>
              <div className="location1">
                <h5>
                  {" "}
                  <MdLocationOn /> New York
                </h5>
              </div>
              <div className="location2">
                <h4>
                  <RiHotelBedLine />3
                </h4>
                <h4>
                  <FaBath />3
                </h4>
                <h4>
                  <MdOutlinePhotoSizeSelectSmall /> 1,234sqft
                </h4>
              </div>
            </div>
          </div>
          <div className="housing-plan">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="housing-options"
            >
              <SwiperSlide className="slide">
                <img src="./assets/house1.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/house2.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/house3.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/house4.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/house5.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/house6.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/house7.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/house8.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/house9.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/house10.webp" alt="bed" />
              </SwiperSlide>
            </Swiper>
            <div className="beds">
              <h4>Gran Cenote Property</h4>
              <div className="location1">
                <h5>
                  {" "}
                  <MdLocationOn /> Tulum, Mexico
                </h5>
              </div>
              <div className="location2">
                <h4>
                  <RiHotelBedLine />4
                </h4>
                <h4>
                  <FaBath />3
                </h4>
                <h4>
                  <MdOutlinePhotoSizeSelectSmall /> 1,200sqft
                </h4>
              </div>
            </div>
          </div>
          <div className="housing-plan">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="housing-options"
            >
              <SwiperSlide className="slide">
                <img src="./assets/me1.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/me2.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/me3.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/me4.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/me5.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/me6.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/me7.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/me8.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/me9.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/me10.jpg" alt="bed" />
              </SwiperSlide>
            </Swiper>
            <div className="beds">
              <h4>El Fna Property</h4>
              <div className="location1">
                <h5>
                  {" "}
                  <MdLocationOn /> Marrakesh, Morocco
                </h5>
              </div>
              <div className="location2">
                <h4>
                  <RiHotelBedLine />6
                </h4>
                <h4>
                  <FaBath />6
                </h4>
                <h4>
                  <MdOutlinePhotoSizeSelectSmall /> 2,590sqft
                </h4>
              </div>
            </div>
          </div>
          <div className="housing-plan">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="housing-options"
            >
              <SwiperSlide className="slide">
                <img src="./assets/new1.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/new2.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/new3.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/new4.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/new5.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/new6.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/new7.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/new8.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/new9.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/new10.webp" alt="bed" />
              </SwiperSlide>
            </Swiper>
            <div className="beds">
              <h4>Agoura Hills Property</h4>
              <div className="location1">
                <h5>
                  {" "}
                  <MdLocationOn /> Los Angeles,California
                </h5>
              </div>
              <div className="location2">
                <h4>
                  <RiHotelBedLine />5
                </h4>
                <h4>
                  <FaBath />3
                </h4>
                <h4>
                  <MdOutlinePhotoSizeSelectSmall /> 1,590sqft
                </h4>
              </div>
            </div>
          </div>
          <div className="housing-plan">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="housing-options"
            >
              <SwiperSlide className="slide">
                <img src="./assets/roche1.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/roche2.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/roche3.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/roche4.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/roche5.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/roche6.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/roche7.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/roche8.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/roche9.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/roche10.jpg" alt="bed" />
              </SwiperSlide>
            </Swiper>
            <div className="beds">
              <h4>Jardín Botánico Property</h4>
              <div className="location1">
                <h5>
                  {" "}
                  <MdLocationOn /> Buenos Aires, Argentina
                </h5>
              </div>
              <div className="location2">
                <h4>
                  <RiHotelBedLine />5
                </h4>
                <h4>
                  <FaBath />3
                </h4>
                <h4>
                  <MdOutlinePhotoSizeSelectSmall /> 1,590sqft
                </h4>
              </div>
            </div>
          </div>
          <div className="housing-plan">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="housing-options"
            >
              <SwiperSlide className="slide">
                <img src="./assets/room1.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/room2.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/room3.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/room4.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/room5.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/room6.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/room7.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/room8.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/room9.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/room10.webp" alt="bed" />
              </SwiperSlide>
            </Swiper>
            <div className="beds">
              <h4>Beach Property</h4>
              <div className="location1">
                <h5>
                  {" "}
                  <MdLocationOn /> Bora Bora, French Polynesia
                </h5>
              </div>
              <div className="location2">
                <h4>
                  <RiHotelBedLine />
                  10
                </h4>
                <h4>
                  <FaBath />8
                </h4>
                <h4>
                  <MdOutlinePhotoSizeSelectSmall /> 3,590sqft
                </h4>
              </div>
            </div>
          </div>
          <div className="housing-plan">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="housing-options"
            >
              <SwiperSlide className="slide">
                <img src="./assets/tig1.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/tig2.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/tig3.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/tig4.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/tig5.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/tig6.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/tig7.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/tig8.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/tig9.webp" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/tig1.webp" alt="bed" />
              </SwiperSlide>
            </Swiper>
            <div className="beds">
              <h4>Municipality Property</h4>
              <div className="location1">
                <h5>
                  {" "}
                  <MdLocationOn /> Nuuk, Greenland.
                </h5>
              </div>
              <div className="location2">
                <h4>
                  <RiHotelBedLine />
                  10
                </h4>
                <h4>
                  <FaBath />8
                </h4>
                <h4>
                  <MdOutlinePhotoSizeSelectSmall /> 3,590sqft
                </h4>
              </div>
            </div>
          </div>
          <div className="housing-plan">
            {" "}
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="housing-options"
            >
              <SwiperSlide className="slide">
                <img src="./assets/view1.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/view2.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/view3.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/view4.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/view5.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/view6.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/view7.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/view8.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/view9.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/view10.jpg" alt="bed" />
              </SwiperSlide>
            </Swiper>
            <div className="beds">
              <h4>Buffalo Hill Property</h4>
              <div className="location1">
                <h5>
                  {" "}
                  <MdLocationOn /> Marbella, Spain.
                </h5>
              </div>
              <div className="location2">
                <h4>
                  <RiHotelBedLine />
                  10
                </h4>
                <h4>
                  <FaBath />8
                </h4>
                <h4>
                  <MdOutlinePhotoSizeSelectSmall /> 3,590sqft
                </h4>
              </div>
            </div>
          </div>
          <div className="housing-plan">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="housing-options"
            >
              <SwiperSlide className="slide">
                <img src="./assets/York1.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/York2.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/York3.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/York4.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/York5.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/York6.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/York7.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/York8.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/York9.jpg" alt="bed" />
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="./assets/York10.jpg" alt="bed" />
              </SwiperSlide>
            </Swiper>
            <div className="beds">
              <h4>Kajulu Hills Property</h4>
              <div className="location1">
                <h5>
                  {" "}
                  <MdLocationOn /> Kisumu, Kenya.
                </h5>
              </div>
              <div className="location2">
                <h4>
                  <RiHotelBedLine />7
                </h4>
                <h4>
                  <FaBath />5
                </h4>
                <h4>
                  <MdOutlinePhotoSizeSelectSmall /> 3,590sqft
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
