import { useTranslations } from "next-intl";

import Image from "next/image";
import ellipse from "@/public/svg/tools/RedEllipse.svg";
import arrow_right_black from "@/public/svg/arrows/arrow_right_black.svg";
import ImedLogo from "@/public/image/Logo/imed2.jpg";
import RmcLogo from "@/public/image/Logo/rmc.jpg";


export default function TextTitle() {
    const t = useTranslations("About.TextTitle");

    return (
        <div className="relative w-full mx-auto max-w-[960px] flex flex-col pb-[100px] mdx:pb-[120px] max-xl:px-[15px]">
            <p className="flex gap-[20px] items-center w-full text-[16px] mdx:font-medium mdx:text-[18px] xl:text-[20px]">
                <Image src={ellipse} alt="ellipse" className="w-[16px] h-[16px]  mdx:w-[20px] mdx:h-[20px] xl:w-[25px] xl:h-[25px]" />
                {t('all_about_us')}
            </p>
            <h1 className="text-[28px] mdx:text-[40px] xl:text-[60px] leading-[1.23] xl:leading-[1.1] font-bold mt-[42px] xl:mt-[70px]">
                {t('main_title')}
            </h1>
            <h2 className="text-[25px] mdx:text-[30px] xl:text-[50px] leading-[1.23] xl:leading-[1.1] font-bold mt-[50px] mdx:mt-[100px] xl:mt-[120px] text-[#000000]">
                {t('agency_title')}
            </h2>
            <p className="text-[#303030] text-[16px] mdx:text-[20px] xl:text-[24px] mt-[16px] mdx:mt-[30px]">
                {t('agency_description')}
            </p>

            <div className="flex flex-col mt-[35px] mdx:mt-[70px] gap-[30px] xl:gap-[40px]">
                <div className="flex flex-row items-start center gap-[16px] mdx:gap-[20px] xl:gap-[60px]">
                    <div>
                        <Image
                            src={ImedLogo}
                            alt="imed Logo"
                            quality={100}
                            className="w-[64px] h-[64px] mdx:w-[100px] mdx:h-[100px] xl:w-[120px] xl:h-[120px] object-contain" />
                    </div>
                    <div>
                        <h5 className="text-[18px] mdx:text-[25px] xl:text-[30px] font-semibold">
                            {t('intermed_innovation_title')}
                        </h5>
                        <p className="text-[16px] mdx:text-[20px] xl:text-[24px] text-[#303030]">
                            {t('intermed_innovation_desc')}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row items-start center gap-[16px] mdx:gap-[20px] xl:gap-[60px]">
                    <div>
                        <Image
                            src={RmcLogo}
                            alt="Rmc Logo"
                            quality={100}
                            className="w-[64px] h-[64px] mdx:w-[100px] mdx:h-[100px] xl:w-[120px] xl:h-[120px] object-contain" />
                    </div>
                    <div>
                        <h5 className="text-[18px] mdx:text-[25px] xl:text-[30px] font-semibold">
                            {t('rmc_de_luxe_title')}
                        </h5>
                        <p className="text-[16px] mdx:text-[20px] xl:text-[24px] text-[#303030]">
                            {t('rmc_de_luxe_desc')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-start">
                <button className="group border rounded-full border-[#fff] flex flex-row items-center bg-corporate pr-[6px] mdx:pr-[12px] py-[4px] mdx:py-[12px] overflow-hidden">
                    <p className="text-[#fff] pl-[24px] pr-[10px] text-[18px] font-semibold">
                        {t('more_cases')}
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
            <div>
                <h2 className="text-[25px] mdx:text-[30px] xl:text-[50px] leading-[1.23] xl:leading-[1.1] font-bold mt-[55px] mdx:mt-[90px] xl:mt-[100px] text-[#000000]">
                    {t('how_we_work_title')}
                </h2>
                <p className="text-[#303030] text-[16px] mdx:text-[20px] xl:text-[24px] mt-[16px] mdx:mt-[30px]">
                    {t('how_we_work_desc')}
                </p>
                <div className="mt-6 flex justify-start">
                    <button className="group border rounded-full border-[#fff] flex flex-row items-center bg-corporate pr-[6px] mdx:pr-[12px] py-[4px] mdx:py-[12px] overflow-hidden">
                        <p className="text-[#fff] pl-[24px] pr-[10px] text-[18px] font-semibold">
                            {t('client_reviews')}
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
            </div>
        </div>
    );
};
