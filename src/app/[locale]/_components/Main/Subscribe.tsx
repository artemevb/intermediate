import { useTranslations } from "next-intl";

import red_rounded from "@/public/svg/gradient/subscribe.svg";
import red_rounded2 from "@/public/svg/gradient/subscribe.svg";
import Image from "next/image";

import instagram from "@/public/svg/footer/instagram.svg";
import youtube from "@/public/svg/footer/youtube.svg";
import telegram from "@/public/svg/tools/Subscribe_telegram.svg";

export default function Subscribe() {
    const t = useTranslations("Main.Subscribe");

    return (
        <div className="relative w-full mx-auto max-w-[1720px] flex justify-center items-center max-4xl:px-[15px]">
            {/* Основной блок формы */}
            <div className="relative bg-form p-[30px] mdx:p-[40px] 2xl:py-[120px] 2xl:px-[160px] rounded-[30px] mdx:rounded-[50px] xl:rounded-[80px] shadow-lg w-full z-10 2xl:flex 2xl:flex-row 2xl:gap-[117px] 2xl:justify-between 2xl:items-center overflow-hidden min-h-[352px] mdx:min-h-[413px] xl:min-h-[436px]">
                {/* Градиенты */}
                <div className="absolute bottom-[-150px] max-mdx:w-full mdx:bottom-[-200px] xl:bottom-[-80px] left-[-40px] mdx:left-[0px] xl:left-[60%] 2xl:bottom-[-150px] 2xl:left-[50%] z-0 pointer-events-none">
                    <Image
                        src={red_rounded}
                        alt={t('redGradientCircle1')}
                        width={1000}
                        height={1000}
                        className="w-full h-full opacity-70 xl:min-w-[641px] 2xl:min-w-[900px] xl:opacity-100"
                    />
                </div>
                <div className="absolute max-mdx:w-full bottom-[-200px] mdx:hidden right-[-100px] z-0 pointer-events-none">
                    <Image
                        src={red_rounded2}
                        alt={t('redGradientCircle2')}
                        width={500}
                        height={500}
                        className="w-full h-full"
                    />
                </div>

                {/* Контент формы */}
                <h2 className="text-white text-[27px] mdx:text-[40px] xl:text-[50px] 4xl:text-[60px] xl:leading-[65px] font-bold mb-6 2xl:mb-0 text-left w-full">
                    {t('subscribeToUs')}
                </h2>
                <div className="w-full 2xl:max-w-[40%] relative">
                    <button className="bg-corporate py-[12px] px-[24px] mdx:px-[48px] font-semibold text-[14px] mdx:text-[18px] text-[#fff] rounded-[100px] flex gap-[10px] items-center top-[12px] 2xl:top-[-110px] right-0 2xl:right-[-100px] absolute">
                        {t('youtube')}
                        <Image src={youtube} alt={t('youtubeAlt')} width={50} quality={100} height={50} className="w-[24px] h-[24px] mdx:w-[48px] mdx:h-[48px]" />
                    </button>
                    <button className="bg-corporate py-[12px] px-[24px] mdx:px-[48px] font-semibold text-[14px] mdx:text-[18px] text-[#fff] rounded-[100px] flex gap-[10px] items-center top-[84px] 2xl:top-[-70px] left-0 absolute">
                        {t('instagram')}
                        <Image src={instagram} alt={t('instagramAlt')} width={50} quality={100} height={50} className="w-[24px] h-[24px] mdx:w-[48px] mdx:h-[48px]" />
                    </button>
                    <button className="bg-corporate py-[12px] px-[24px] mdx:px-[48px] font-semibold text-[14px] mdx:text-[18px] text-[#fff] rounded-[100px] flex gap-[10px] items-center top-[156px] mdl:top-[190px] 2xl:top-[80px] right-0 absolute">
                        {t('telegram')}
                        <Image src={telegram} alt={t('telegramAlt')} width={50} quality={100} height={50} className="w-[24px] h-[24px] mdx:w-[45px] mdx:h-[45px]" />
                    </button>
                </div>
            </div>
        </div>
    );
};
