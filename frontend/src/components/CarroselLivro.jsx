import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import CardLivro from "./CardLivro";

function CarroselLivro({ books }) {
    return (
        <div className="area-carrossel-livros">
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    900: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 },
                }}
            >
                {books.map((book, index) => (
                    <SwiperSlide key={index}>
                        <CardLivro image={book.image} alt={book.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CarroselLivro;
