import { useTranslations } from "next-intl";
import arrow_right_black from "@/public/svg/arrows/arrow_right_black.svg";

import red_rounded1 from "@/public/svg/gradient/last1.svg";
import red_rounded2 from "@/public/svg/gradient/last2.svg";
import Image from "next/image";

export default function Form() {
    const t = useTranslations("Main.Form");

    return (
        <div className="relative w-full mx-auto max-w-[1720px] flex justify-center items-center pb-[100px] mdx:pb-[120px] max-4xl:px-[15px]">
            {/* Основной блок формы */}
            <div className="relative bg-form p-[30px] mdx:p-[40px] 2xl:py-[120px] 2xl:px-[160px] rounded-[30px] mdx:rounded-[50px] xl:rounded-[80px] shadow-lg w-full z-10 2xl:flex 2xl:flex-row 2xl:gap-[117px] 2xl:justify-between overflow-hidden">
                {/* Градиенты */}
                <div className="absolute bottom-[-150px] left-[-150px] z-0 pointer-events-none">
                    <Image
                        src={red_rounded1}
                        alt="Red gradient circle 1"
                        width={500}
                        height={500}
                        className="w-[300px] md:w-[400px] xl:w-[500px] opacity-60"
                    />
                </div>
                <div className="absolute top-[-150px] right-[-150px] z-0 pointer-events-none">
                    <Image
                        src={red_rounded2}
                        alt="Red gradient circle 2"
                        width={500}
                        height={500}
                        className="w-[300px] md:w-[400px] xl:w-[500px]"
                    />
                </div>

                {/* Контент формы */}
                <h2 className="text-white text-[27px] mdx:text-[40px] xl:text-[50px] 4xl:text-[60px] xl:leading-[65px] font-bold mb-6 text-left">
                    {t("title") || "Обязательно зарегистрируйтесь"}
                </h2>
                <form className="space-y-[16px] mdx:space-y-[20px]">
                    <input
                        type="text"
                        placeholder="Имя"
                        className="w-full p-[16px] mdx:p-[20px] rounded-[100px] border border-white bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-[16px] mdx:p-[20px] rounded-[100px] border border-white bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <input
                        type="number"
                        placeholder="Телефон"
                        className="w-full p-[16px] mdx:p-[20px] rounded-[100px] border border-white bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <div className="mt-6 flex justify-end">
                        <button className="group border rounded-full border-[#fff] flex flex-row items-center pr-[6px] py-[6px] overflow-hidden">
                            <p className="text-[#fff] pl-[24px] pr-[10px] text-[18px] font-semibold">
                                {t("button")}
                            </p>
                            <div className="relative rounded-full bg-[#ffff] w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
                                <Image
                                    src={arrow_right_black}
                                    alt={t("arrowAlt") || "arrow black right"}
                                    width={100}
                                    height={100}
                                    quality={100}
                                    className="w-[20px] h-[20px] transition-transform duration-300 transform group-hover:translate-x-[10px]"
                                />
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};
