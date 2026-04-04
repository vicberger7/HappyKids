import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import css from "./Gallery.module.css";

import img1 from "../assets/images/gallery/animators.jpeg";
import img2 from "../assets/images/gallery/bikes.png";
import img3 from "../assets/images/gallery/catGirl.png";
import img4 from "../assets/images/gallery/fingerFood.png";
import img5 from "../assets/images/gallery/girlInGame.png";
import img6 from "../assets/images/gallery/legoBoy.png";
import img7 from "../assets/images/gallery/salad.png";
import img8 from "../assets/images/gallery/people.png";
import img9 from "../assets/images/gallery/girls.png";
import img10 from "../assets/images/gallery/girlKetchup.png";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div className={css.galleryContainer}>
      <Swiper
        modules={[Pagination, Navigation]}
        loop={true} // infinite loop
        pagination={{ clickable: true }}
        navigation
        speed={500}
        slidesPerView={1}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className={css.galleryImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
