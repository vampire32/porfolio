import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Avatar1.png'
import AVTR2 from "../../assets/Avatar_2.png";
import AVTR3 from "../../assets/Avatar_3.png";
import AVTR4 from "../../assets/Avatar_4.png";
import { Pagination,Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";




const testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Shatta Snow",
      review:
        "Minim in laborum est culpa aute nostrud consequat sint laborum consectetur occaecat non incididunt. Aliquip Lorem quis ipsum dolore voluptate. Reprehenderit do dolor in incididunt consectetur nostrud enim velit occaecat.",
    },
    {
      avatar: AVTR2,
      name: "Shane Snow",
      review:
        "Minim in laborum est culpa aute nostrud consequat sint laborum consectetur occaecat non incididunt. Aliquip Lorem quis ipsum dolore voluptate. Reprehenderit do dolor in incididunt consectetur nostrud enim velit occaecat.",
    },
    {
      avatar: AVTR3,
      name: "Kwame Snow",
      review:
        "Minim in laborum est culpa aute nostrud consequat sint laborum consectetur occaecat non incididunt. Aliquip Lorem quis ipsum dolore voluptate. Reprehenderit do dolor in incididunt consectetur nostrud enim velit occaecat.",
    },
    {
      avatar: AVTR4,
      name: "Graie Snow",
      review:
        "Minim in laborum est culpa aute nostrud consequat sint laborum consectetur occaecat non incididunt. Aliquip Lorem quis ipsum dolore voluptate. Reprehenderit do dolor in incididunt consectetur nostrud enim velit occaecat.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={ [Pagination, Navigation] }
        spaceBetween={40}
        slidesPerView={1}
        navigation={{clickable:true}}
        pagination={{clickable:true}}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default testimonials

