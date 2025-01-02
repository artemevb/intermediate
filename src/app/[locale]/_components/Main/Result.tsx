import { useTranslations } from "next-intl";
import arrow_right_black from "@/public/svg/arrows/arrow_right_black.svg";

import red_rounded1 from "@/public/svg/gradient/last1.svg";
import red_rounded2 from "@/public/svg/gradient/last2.svg";
import Image from "next/image";

export default function Result() {
    const t = useTranslations("Main.Result");

    return (
        <div className="relative w-full mx-auto max-w-[1720px] flex justify-center items-center max-4xl:px-[15px]">
            {/* Основной блок формы */}
            <div className="relative bg-form p-[30px] mdx:p-[40px] 2xl:py-[120px] 2xl:px-[160px] rounded-[30px] mdx:rounded-[50px] xl:rounded-[80px] shadow-lg w-full z-10 2xl:flex 2xl:flex-col overflow-hidden">
                {/* Градиенты */}
                <div className="absolute bottom-[-150px] left-[-150px] xl:bottom-[-200px] xl:left-[-200px] z-0 pointer-events-none">
                    <Image
                        src={red_rounded1}
                        alt={t("gradient1Alt") || "Red gradient circle 1"}
                        width={500}
                        height={500}
                        className="w-[300px] md:w-[400px] xl:w-[650px]"
                    />
                </div>
                <div className="absolute top-[-150px] right-[-150px] xl:right-[-200px] xl:top-[-200px] z-0 pointer-events-none">
                    <Image
                        src={red_rounded2}
                        alt={t("gradient2Alt") || "Red gradient circle 2"}
                        width={500}
                        height={500}
                        className="w-[300px] md:w-[400px] xl:w-[700px]"
                    />
                </div>

                {/* Контент формы */}
                <h2 className="text-white text-[27px] mdx:text-[40px] xl:text-[50px] 4xl:text-[60px] xl:leading-[65px] font-bold mb-6 text-left">
                    {t('title')}
                </h2>
                <p className="text-white text-[14px] mdx:text-[18px] xl:text-[20px] mdx:font-medium mt-[20px] text-left xl:max-w-[838px]">
                    {t('paragraph')}
                </p>

                <div className="mt-[20px] xl:mt-[40px] flex justify-start">
                    <button className="group border-[2px] rounded-full border-[#fff] flex flex-row items-center pr-[6px] mdx:pr-[10px] py-[4px] mdx:py-[10px] overflow-hidden">
                        <p className="text-[#fff] pl-[12px] mdx:pl-[40px] pr-[10px] text-[14px] mdx:text-[20px] font-semibold">
                            {t('buttonText')}
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
};
