'use client'
import Image from "next/image";
import { useRef } from "react";
// import { useTranslations } from "next-intl";
import arrow_right_black from "@/public/svg/arrows/arrow_right_black.svg";
import arrow_red from "@/public/svg/arrows/arrow_red_right.svg";
import arrow_left_red from "@/public/svg/arrows/ArrowsLeftWhite.svg"; // Допустим, что у вас есть иконка стрелки влево
import arrow_right_red from "@/public/svg/arrows/ArrowsRightWhite.svg"; // Или любая другая иконка

export default function LearningMarketing() {
    // const t = useTranslations("Main.LearningMarketing"); // ← Если нужны переводы

    // Ссылка на контейнер, который будет скроллиться
    const scrollRef = useRef<HTMLDivElement>(null);

    // Функции для скролла влево / вправо
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 300; // Шаг скролла в пикселях (можно менять)
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 300; // Шаг скролла в пикселях (можно менять)
        }
    };

    return (
        <div className="bg-[#303030] text-white w-full py-10">
            <div className="mx-auto max-xl:px-[15px] w-full flex flex-col gap-8">

                <h2 className="text-[28px] mdx:text-[40px] xl:text-[60px] font-bold max-w-[1440px] max-4xl:ml-[3%] 4xl:ml-[11.5%]">
                    Путь от идеи до результата
                </h2>

                {/* Блок с кнопками "Влево / Вправо" */}
                <div className="flex items-center justify-end gap-4 hidden xl:flex 4xl:hidden mr-[40px]">
                    <button
                        onClick={scrollLeft}
                        className="flex items-center justify-center text-white rounded-full w-10 h-10"
                    >
                        <Image
                            src={arrow_left_red}
                            alt="arrow left red"
                            width={54}
                            height={54}
                        />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="flex items-center justify-center w-10 h-10"
                    >
                        <Image
                            src={arrow_right_red}
                            alt="arrow right red"
                            width={54}
                            height={54}
                        />
                    </button>
                </div>

                {/* Сам скроллимый контейнер */}
                <div
                    ref={scrollRef}
                    className="
            flex flex-col gap-4 
            mdx:flex-row mdx:overflow-x-auto 
            overflow-hidden 
            no-scrollbar 
            mdx:pb-4 
            4xl:justify-end
          "
                >
                    {/* Первая карточка */}
                    <div className="bg-corporate rounded-[30px] mdx:rounded-[50px] flex flex-col justify-between gap-4 p-[30px] mdx:px-[40px] mdx:max-w-[705px] min-w-[300px] mdx:min-w-[536px] xl:pt-[100px] xl:min-w-[660px]">
                        <h3 className="text-[25px] mdx:text-[30px] xl:text-[50px] font-bold xl:leading-[65px] mdx:uppercase">
                            Анализ, оптимизация, IT-решения, результаты
                        </h3>
                        <button className="group inline-flex items-center justify-between pl-[12px] pr-[4px] py-[6px] mdx:pl-[30px] mdx:pr-[6px] mdx:py-[10px] bg-inherit text-white font-semibold rounded-full shadow hover:bg-red-500 transition duration-300 border-white border-[2px] text-[14px] mdx:text-[20px] mdl:text-[24px] max-w-[275px] mdx:max-w-[466px] whitespace-nowrap opacity-[0.9] xl:mt-[70px]">
                            Бесплатная консультация
                            <span className="ml-[10px] hover:pl-4 transition-all duration-200 bg-white rounded-full w-[40px] h-[40px] mdx:w-[60px] mdx:h-[60px] flex items-center justify-center">
                                <Image
                                    src={arrow_right_black}
                                    alt="arrow right black"
                                    width={100}
                                    height={100}
                                    className="rounded-lg w-[20px] h-[20px] mdx:w-[30px] mdx:h-[30px] transition-transform duration-300 transform group-hover:translate-x-[10px]"
                                />
                            </span>
                        </button>
                    </div>

                    {/* Вторая карточка */}
                    <div className="bg-white text-black rounded-[30px] mdx:rounded-[50px] p-6 md:p-8 xl:pt-[100px] flex flex-col justify-between gap-4 min-w-[300px] mdx:min-w-[434px] max-w-[474px] xl:min-w-[484px]">
                        <div className=" flex flex-col justify-between w-full mdx:h-[70%]">
                            <h3 className="text-[18px] mdx:text-[30px] xl:text-[45px] font-semibold text-[#010101] mdx:uppercase xl:leading-[55px]">
                                Продающие сайты и платформы
                            </h3>
                            <p className="text-[14px] mdx:text-[18px] xl:text-[20px] whitespace-pre-line leading-[28px] text-[#A6A6A6]">
                                Разрабатываем современные сайты и платформы для привлечения клиентов и повышения взаимодействия
                            </p>
                            <button className="group flex items-center font-semibold text-corporate w-fit text-[14px] mdx:text-[18px]">
                                Подробнее
                                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-2">
                                    <Image
                                        src={arrow_red}
                                        alt="arrow red"
                                        width={25}
                                        height={25}
                                        className="w-[25px] h-[25px]"
                                    />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Третья карточка */}
                    <div className="bg-white text-black rounded-[30px] mdx:rounded-[50px] p-6 md:p-8 xl:pt-[100px] flex flex-col justify-between gap-4 min-w-[300px] mdx:min-w-[400px] max-w-[474px] xl:min-w-[484px] ">
                        <div className=" flex flex-col justify-between w-full mdx:h-[70%]">
                            <h3 className="text-[18px] mdx:text-[30px] xl:text-[45px] font-semibold text-[#010101] mdx:uppercase xl:leading-[55px]">
                                Настройка рекламы
                            </h3>
                            <p className="text-[14px] mdx:text-[18px] xl:text-[20px] whitespace-pre-line leading-[28px] text-[#A6A6A6]">
                                Настраиваем рекламу и таргетинг, чтобы привлекать нужную аудиторию
                            </p>
                            <button className="group flex items-center font-semibold text-corporate w-fit text-[14px] mdx:text-[18px]">
                                Подробнее
                                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-2">
                                    <Image
                                        src={arrow_red}
                                        alt="arrow red"
                                        width={25}
                                        height={25}
                                        className="w-[25px] h-[25px]"
                                    />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
