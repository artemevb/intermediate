"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import pauseIcon from "@/public/svg/arrows/Pause.svg";
import playIcon from "@/public/svg/arrows/play.svg";
import arrowLeft from "@/public/svg/arrows/ArrowsLeftWhite.svg";
import arrowRight from "@/public/svg/arrows/ArrowsRightWhite.svg";
import { useTranslations } from "next-intl";

const partnersLogos = [
    {
        id: 1,
        src: "/image/Main/partners/yellow_pages.png",
        alt: "Yellow Pages",
        href: "https://www.yellowpages.uz/",
    },
    {
        id: 2,
        src: "/image/Main/partners/prom.png",
        alt: "Prom.uz",
        href: "https://prom.uz/",
    },
    {
        id: 3,
        src: "/image/Main/partners/apteka.png",
        alt: "Apteka.uz",
        href: "https://apteka.uz/",
    },
    {
        id: 4,
        src: "/image/Main/partners/med.png",
        alt: "Med24",
        href: "https://med24.uz/",
    },
    {
        id: 5,
        src: "/image/Main/partners/prime.png",
        alt: "Prime Medical Center",
        href: "https://pmcenter.uz/",
    },
    {
        id: 6,
        src: "/image/Main/partners/top.svg",
        alt: "Top.uz",
        href: "https://top.uz/",
    },
    {
        id: 7,
        src: "/image/Main/partners/terra.png",
        alt: "Terra Lab",
        href: "https://terralab.uz/",
    },
    {
        id: 8,
        src: "/image/Main/partners/megahertz.png",
        alt: "Megahertz",
        href: "https://megahertz.uz/",
    },
    {
        id: 9,
        src: "/image/Main/partners/cryc.png",
        alt: "Megahertz",
        href: "#",
    },
    {
        id: 10,
        src: "/image/Main/partners/glotr.png",
        alt: "Megahertz",
        href: "https://glotr.uz/",
    },
    {
        id: 11,
        src: "/image/Main/partners/intermed.png",
        alt: "Megahertz",
        href: "https://imed.uz/",
    },
    {
        id: 12,
        src: "/image/Main/partners/m_excl.png",
        alt: "Megahertz",
        href: "https://m-exclusive.uz/",
    },
];

export default function PartnersSlider() {
    const t = useTranslations("Main.PartnersSlider");
    const [isPaused, setIsPaused] = useState(false);
    // Скорость прокрутки (чем больше число, тем быстрее)
    const [speed, setSpeed] = useState(50);

    // Переключаем паузу (play/pause)
    const handlePauseToggle = () => {
        setIsPaused((prev) => !prev);
    };

    // Делать движение медленнее (уменьшаем скорость)
    const handleSlower = () => {
        setSpeed((prev) => Math.max(prev - 10, 10));
    };

    // Делать движение быстрее (увеличиваем скорость)
    const handleFaster = () => {
        setSpeed((prev) => Math.min(prev + 10, 200));
    };

    return (
        <div className="bg-[#303030] text-white w-full">
            <h2 className="text-left text-[24px] mdx:text-[40px] xl:text-[60px] mb-[20px] xl:mb-[40px] font-bold max-3xl:pl-[20px] pl-[2.6%] 4xl:pl-[12%] w-full">{t('title')}</h2>

            <Marquee
                direction="left"
                speed={speed}
                play={!isPaused}    // если isPaused === true, то анимация останавливается
                gradient={false}    // убираем стандартный градиент
                className="mb-4"    // отступ снизу
            >
                {partnersLogos.map((logo) => (
                    <div
                        key={logo.id}
                        className="flex items-center justify-center w-[236px] h-[100px] mdx:w-[240px] mdx:h-[140px] xl:w-[420px] xl:h-[240px] mr-4 bg-[#fff] rounded-[20px] xl:rouned-[30px] p-[18px]"
                    >
                        <Link href={logo.href} target="_blank" rel="noreferrer">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={1500}
                                quality={100}
                                height={1500}
                                className="w-auto h-full cover"
                            />
                        </Link>
                    </div>
                ))}
            </Marquee>

            {/* НИЖНИЙ РЯД (движется вправо) */}
            <Marquee
                direction="right"
                speed={speed}
                play={!isPaused}
                gradient={false}
                className="mb-8"
            >
                {partnersLogos.map((logo) => (
                    <div
                        key={logo.id}
                        className="flex items-center justify-center w-[236px] h-[100px] mdx:w-[240px] mdx:h-[140px] xl:w-[420px] xl:h-[240px] mr-4 bg-[#fff] rounded-[20px] xl:rouned-[30px] p-[18px]"
                    >
                        <Link href={logo.href} target="_blank" rel="noreferrer">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={1500}
                                quality={100}
                                height={1500}
                                className="w-auto h-full cover"
                            />
                        </Link>
                    </div>
                ))}
            </Marquee>

            {/* ПАНЕЛЬ УПРАВЛЕНИЯ */}
            <div className="flex items-center justify-center gap-6">
                {/* Кнопка: Медленнее (стрелка влево) */}
                <button
                    onClick={handleSlower}
                    className="rounded-full w-[25px] h-[25px] mdx:w-[32px] mdx:h-[32px] xl:w-[48px] xl:h-[48px] flex items-center justify-center hover:opacity-70 transition"
                >
                    <Image src={arrowLeft} alt="Slower" width={100} height={100} quality={100} />
                </button>

                {/* Кнопка Паузы/Пуска */}
                <button
                    onClick={handlePauseToggle}
                    className="rounded-full w-[25px] h-[25px] mdx:w-[32px] mdx:h-[32px] xl:w-[48px] xl:h-[48px] flex items-center justify-center hover:opacity-70 transition"
                >
                    {/* Если isPaused === true, показываем иконку Play, иначе — Pause */}
                    <Image
                        src={isPaused ? playIcon : pauseIcon}
                        alt={isPaused ? "Play" : "Pause"}
                        width={100}
                        height={100}
                        quality={100}
                    />
                </button>

                {/* Кнопка: Быстрее (стрелка вправо) */}
                <button
                    onClick={handleFaster}
                    className="rounded-full flex items-center justify-center hover:opacity-70 transition w-[25px] h-[25px] mdx:w-[32px] mdx:h-[32px] xl:w-[48px] xl:h-[48px]"
                >
                    <Image src={arrowRight} alt="Faster" width={100} height={100} quality={100} />
                </button>
            </div>
        </div>
    );
}
