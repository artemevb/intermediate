"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Swiper и модули
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Стили
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Ваши иконки
import arrow_right_black from "@/public/svg/arrows/arrow_right_black.svg";
import arrow_right_white from "@/public/svg/arrows/ArrowsRightWhite.svg";
import arrow_left_white from "@/public/svg/arrows/ArrowsLeftWhite.svg";

import red_rounded1 from "@/public/svg/gradient/last1.svg";
import red_rounded2 from "@/public/svg/gradient/last2.svg";

type Review = {
  id: number;
  name: string;
  position: string;
  reviewText: string;
};

export default function ReviewsClients() {
  const t = useTranslations("Main.ReviewsClients");

  // Список отзывов
  const reviews: Review[] = [
    {
      id: 1,
      name: t("reviews.0.name"),
      position: t("reviews.0.position"),
      reviewText: t("reviews.0.text"),
    },
    {
      id: 2,
      name: t("reviews.1.name"),
      position: t("reviews.1.position"),
      reviewText: t("reviews.1.text"),
    },
    {
      id: 3,
      name: t("reviews.2.name"),
      position: t("reviews.2.position"),
      reviewText: t("reviews.2.text"),
    },
    {
      id: 4,
      name: t("reviews.3.name"),
      position: t("reviews.3.position"),
      reviewText: t("reviews.3.text"),
    },
    {
      id: 5,
      name: t("reviews.4.name"),
      position: t("reviews.4.position"),
      reviewText: t("reviews.4.text"),
    },
  ];

  // Текущий «страничный» индекс слайда
  const [currentSlide, setCurrentSlide] = useState(1);
  // Общее количество «страниц»
  const [totalSlides, setTotalSlides] = useState(1);

  return (
    <div className=" relative overflow-hidden w-full">
      <div className="absolute bottom-[-70px] left-[-150px] xl:bottom-[-100px] xl:left-[-200px] z-0 pointer-events-none">
        <Image
          src={red_rounded1}
          alt={t("gradient1Alt") || "Red gradient circle 1"}
          width={500}
          height={500}
          className="w-[300px] md:w-[400px] xl:w-[650px]"
        />
      </div>
      <div className="absolute top-[-40px] right-[-150px] xl:right-[-200px] xl:top-[-100px] z-0 pointer-events-none">
        <Image
          src={red_rounded2}
          alt={t("gradient2Alt") || "Red gradient circle 2"}
          width={500}
          height={500}
          className="w-[300px] md:w-[400px] xl:w-[700px]"
        />
      </div>
      <div className="max-w-[1440px] mx-auto w-full px-[15px]">
        <h2 className="text-white text-[28px] mdx:text-[40px] xl:text-[60px] font-bold mb-[20px] xl:mb-[40px]">
          {t("title") || "Отзывы клиентов"}
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-next-button",
              prevEl: ".custom-prev-button",
            }}
            // После инициализации Swiper получаем количество «страниц»
            onSwiper={(swiper) => {
              // snapGrid - это массив точек, на которых останавливается слайдер
              setTotalSlides(swiper.snapGrid.length);
            }}
            // При смене «страницы» обновляем currentSlide
            onSlideChange={(swiper) => {
              // Активный индекс + 1 для человекопонятного формата
              setCurrentSlide(swiper.activeIndex + 1);
            }}
            slidesPerView={1}
            slidesPerGroup={1} // Перелистывание по одной карточке
            spaceBetween={20}
            speed={1300}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="relative"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="p-[30px] rounded-[30px] bg-neutral-900 text-white h-full flex flex-col justify-between min-h-[392px] mdx:min-h-[450px] xl:min-h-[500px] border border-[#5A5A5A]">
                  <div>
                    <h3 className="text-[18px] mdx:text-[25px] xl:text-[30px] font-semibold">
                      {review.name}
                    </h3>
                    <p className="text-[17px] text-[#7B7B7B] font-normal mt-1">
                      {review.position}
                    </p>
                    <p className="text-sm leading-relaxed mt-[30px]">
                      {review.reviewText}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные стрелки + кастомная дробная пагинация */}
          <div className="hidden xl:flex absolute -bottom-[50px] right-0 items-center gap-4">
            <button className="custom-prev-button cursor-pointer">
              <Image
                src={arrow_left_white}
                alt={t("prevArrowAlt") || "prev arrow"}
                width={30}
                height={30}
              />
            </button>

            <div className="text-white text-[23px]">
              {currentSlide} / {totalSlides}
            </div>

            <button className="custom-next-button cursor-pointer">
              <Image
                src={arrow_right_white}
                alt={t("nextArrowAlt") || "next arrow"}
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>

        {/* Пример кнопки «Стать нашим клиентом» */}
        <div className="mt-6 flex justify-start">
          <button className="group border-[2px] rounded-full border-[#fff] flex flex-row items-center pr-[6px] mdx:pr-[10px] py-[4px] mdx:py-[10px] overflow-hidden">
            <p className="text-[#fff] pl-[12px] mdx:pl-[40px] pr-[10px] text-[14px] mdx:text-[20px] font-semibold">
              {t("button")}
            </p>
            <div className="relative rounded-full bg-[#ffff] w-[60px] h-[60px] flex items-center justify-center overflow-hidden">
              <Image
                src={arrow_right_black}
                alt={t("arrowAlt") || "arrow black right"}
                width={100}
                height={100}
                quality={100}
                className="w-[30px] h-[30px] transition-transform duration-300 transform group-hover:translate-x-[10px]"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
