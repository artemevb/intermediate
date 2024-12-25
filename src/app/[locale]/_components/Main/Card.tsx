import arrows_gray_opacity_mobile from "@/public/svg/arrows/Arrows_gray_opacity_mobile.svg";
import arrows_gray_opacity from "@/public/svg/arrows/Arrows_gray_opacity.svg";
import pin from "@/public/image/Main/icons/pin.png";
import robots from "@/public/image/Main/icons/robots.png";
import web from "@/public/image/Main/icons/web.png";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import React from "react";

// Определение типа для пропсов Card
interface CardProps {
    icon: StaticImageData;
    title: string;
    description: string;
    iconWidth?: number; 
    iconHeight?: number;
}

// Компонент Card с аннотациями типов
const Card: React.FC<CardProps> = ({ icon, title, description, iconWidth = 100, iconHeight = 100 }) => {
    return (
        <button className="relative flex-shrink-0 bg-corporate rounded-[32px] flex flex-row gap-4 items-center justify-between p-4 min-w-[340px] max-w-[350px] mdx:max-w-[420px] xl:max-w-[460px] hover:bg-hover_corporate transition-all duration-200">
            <div className={`flex-shrink-0 flex items-center ${icon === pin ? 'w-[40px] mdx:w-[60px] 2xl:w-[80px] 2xl:h-[80px]' : 'w-[40px] mdx:w-[60px] 2xl:w-[100px]'}`}>
                <Image
                    src={icon}
                    alt={`${title} icon`}
                    width={iconWidth}
                    height={iconHeight}
                    quality={100}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex flex-col items-start text-white flex-grow">
                <h3 className="text-sm mdx:text-base xl:text-lg font-semibold ">
                    {title}
                </h3>
                <p className="text-xs mdx:text-sm xl:text-base text-left 2xl:max-w-[94%]">
                    {description}
                </p>
            </div>
            {/* Arrow Icon: Mobile Version */}
            <div className="flex-shrink-0 w-[15px] h-[24px] mdx:w-[16px] mdx:h-[25.6px] xl:hidden">
                <Image
                    src={arrows_gray_opacity_mobile}
                    alt="Arrows gray opacity"
                    layout="responsive"
                    width={15}
                    height={24}
                    quality={100}
                    className="object-contain"
                />
            </div>
            {/* Arrow Icon: XL and above */}
            <div className="hidden xl:block 2xl:absolute top-1/2 right-4 transform -translate-y-1/2 flex-shrink-0 w-[20px] h-[35.58px]">
                <Image
                    src={arrows_gray_opacity}
                    alt="Arrows gray opacity"
                    layout="responsive"
                    width={20}
                    height={35.58}
                    quality={100}
                    className="object-contain"
                />
            </div>
        </button>
    );
};

// Определение типа для данных карточек
interface CardData {
    icon: StaticImageData;
    title: string;
    description: string;
    iconWidth?: number;
    iconHeight?: number;
}

const ContentMarketing: React.FC = () => {
    const t = useTranslations("Main.ContentMarketing");

    const cards: CardData[] = [
        {
            icon: web,
            title: t('cards.0.title'),
            description: t('cards.0.description'),
        },
        {
            icon: robots,
            title: t('cards.1.title'),
            description: t('cards.1.description'),
        },
        {
            icon: pin,
            title: t('cards.2.title'),
            description: t('cards.2.description'),
            iconWidth: 80, // Установка ширины для иконки pin
            iconHeight: 80, // Установка высоты для иконки pin
        },
        // Добавьте больше карточек по необходимости
    ];

    return (
        <div className="w-full mx-auto max-w-[1440px] mt-10 mdx:mt-15 xl:mt-20 overflow-hidden">
            <div
                className="flex w-full gap-4 justify-start overflow-x-auto scrollbar-hide no-scrollbar snap-x snap-mandatory"
                style={{ scrollBehavior: "smooth" }}
            >
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        iconWidth={card.iconWidth}
                        iconHeight={card.iconHeight}
                    />
                ))}
            </div>
        </div>
    );
};

export default ContentMarketing;
