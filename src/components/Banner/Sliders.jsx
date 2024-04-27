/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slidersStyle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Sliders = () => {
  return (
    <>
      <div className="relative">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="absolute z-10  w-full h-full top-[30%] md:top-[8%] mx-auto text-center md:text-left">
            <div className="md:w-1/2 mx-auto">
              <h1
                
                className="text-lime-600 font-gilda text-4xl md:text-8xl font-bold"
              >
                JUTE WOOD DECOR
              </h1>
              <h1
                
                className="mt-5 text-white text-3xl md:text-5xl font-semibold"
              >
                Jute & Wood Crafts: <br />
                 Nature's Artistry
              </h1>
              
              <p
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="1200"
                className="text-white mt-5 text-xl font-semibold"
              >
                Discover the beauty of sustainable elegance! Explore our collection of handcrafted jute and wood creations, where each piece tells a story of natural charm and eco-friendly craftsmanship.
              </p>
              <div className="flex md:justify-start  justify-center items-center gap-5">
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="1400"
                >
                  <Link
                    to="/login"
                    className="btn mt-5 bg-lime-400 rounded-xl text-white px-8"
                  >
                    Explore More
                  </Link>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="1800"
                >
                  <Link
                    to="/register"
                    className="btn mt-5 bg-yellow-400  rounded-xl text-black px-8"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* slide  */}
          <SwiperSlide className="slide1 slide"></SwiperSlide>
          <SwiperSlide className="slide2 slide"></SwiperSlide>
          <SwiperSlide className="slide3 slide"></SwiperSlide>
          <SwiperSlide className="slide4 slide"></SwiperSlide>
          <SwiperSlide className="slide5 slide"></SwiperSlide>
          <SwiperSlide className="slide6 slide"></SwiperSlide>
          <SwiperSlide className="slide7 slide"></SwiperSlide>
          <SwiperSlide className="slide8 slide"></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sliders;
