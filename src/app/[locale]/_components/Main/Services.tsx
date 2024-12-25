import Image from "next/image";
import web from "@/public/svg/tools/web.svg";
import robots from "@/public/svg/tools/robots.svg";
import pc from "@/public/svg/tools/pc.svg";
import block from "@/public/svg/tools/block.svg";
import scoop from "@/public/svg/tools/scoop.svg";
import sound from "@/public/svg/tools/sound.svg";
import arrow_right_black from "@/public/svg/arrows/arrow_red.svg";
import { useTranslations } from "next-intl";

export default function Services() {
    const t = useTranslations("Main.Services");

    return (
        <div className="max-w-[1440px] flex flex-col mx-auto px-[15px] w-full">
            <div className="grid grid-cols-1 mdl:grid-cols-2 gap-[16px] mdx:gap-[20px]">
                {/* Карточка 1 */}
                <button
                    type="button"
                    className="bg-white p-[20px] mdx:pb-[40px] 2xl:px-[40px] 2xl:pb-[80px] rounded-[20px] shadow-lg relative w-full text-left focus:outline-none hover:bg-red-100 transition-all duration-200"
                >
                    <div className="flex items-center justify-between">
                        <div className="w-[60px] mdx:w-[80px] 2xl:w-[90px] h-full">
                            <Image src={web} alt="Web Icon" width={150} height={350} quality={350} />
                        </div>
                        <div className="p-2 border border-corporate rounded-full hover:bg-red-100 transition-all w-[60px] h-[60px] mdx:w-[70px] mdx:h-[70px] 2xl:w-[80px] 2xl:h-[80px] flex items-center justify-center">
                            <Image src={arrow_right_black} alt="Arrow Icon" width={50} height={50} className="w-[30px] mdx:w-[40px] 2xl:w-[48px] h-auto" />
                        </div>
                    </div>
                    <h3 className="text-[#303030] text-[18px] mdx:text-[20px] 2xl:text-[30px] font-semibold mt-[16px] mdx:mt-[20px]">{t('service1.title')}</h3>
                    <p className="text-[#A6A6A6] text-[16px] 2xl:text-[20px] mt-[16px] font-medium leading-[23px]">
                        {t('service1.description')}
                    </p>
                </button>

                {/* Карточка 2 */}
                <button
                    type="button"
                    className="bg-white p-[20px] mdx:pb-[40px] 2xl:px-[40px] 2xl:pb-[80px] rounded-[20px] shadow-lg relative w-full text-left focus:outline-none hover:bg-red-100 transition-all duration-200"
                >
                    <div className="flex items-center justify-between">
                        <div className="w-[60px] mdx:w-[80px] 2xl:w-[90px] h-full">
                            <Image src={robots} alt="Robots Icon" width={150} height={350} quality={350} />
                        </div>
                        <div className="p-2 border border-corporate rounded-full hover:bg-red-100 transition-all w-[60px] h-[60px] mdx:w-[70px] mdx:h-[70px] 2xl:w-[80px] 2xl:h-[80px] flex items-center justify-center">
                            <Image src={arrow_right_black} alt="Arrow Icon" width={50} height={50} className="w-[30px] mdx:w-[40px] 2xl:w-[48px] h-auto" />
                        </div>
                    </div>
                    <h3 className="text-[#303030] text-[18px] mdx:text-[20px] 2xl:text-[30px] font-semibold mt-[16px] mdx:mt-[20px]">{t('service2.title')}</h3>
                    <p className="text-[#A6A6A6] text-[16px] 2xl:text-[20px] mt-[16px] font-medium leading-[23px]">
                        {t('service2.description')}
                    </p>
                </button>

                {/* Карточка 3 */}
                <button
                    type="button"
                    className="bg-white p-[20px] mdx:pb-[40px] 2xl:px-[40px] 2xl:pb-[80px] rounded-[20px] shadow-lg relative w-full text-left focus:outline-none hover:bg-red-100 transition-all duration-200"
                >
                    <div className="flex items-center justify-between">
                        <div className="w-[60px] mdx:w-[80px] 2xl:w-[90px] h-full">
                            <Image src={pc} alt="PC Support Icon" width={150} height={350} quality={350} />
                        </div>
                        <div className="p-2 border border-corporate rounded-full hover:bg-red-100 transition-all w-[60px] h-[60px] mdx:w-[70px] mdx:h-[70px] 2xl:w-[80px] 2xl:h-[80px] flex items-center justify-center">
                            <Image src={arrow_right_black} alt="Arrow Icon" width={50} height={50} className="w-[30px] mdx:w-[40px] 2xl:w-[48px] h-auto" />
                        </div>
                    </div>
                    <h3 className="text-[#303030] text-[18px] mdx:text-[20px] 2xl:text-[30px] font-semibold mt-[16px] mdx:mt-[20px]">{t('service3.title')}</h3>
                    <p className="text-[#A6A6A6] text-[16px] 2xl:text-[20px] mt-[16px] font-medium leading-[23px]">
                        {t('service3.description')}
                    </p>
                </button>

                {/* Карточка 4 */}
                <button
                    type="button"
                    className="bg-white p-[20px] mdx:pb-[40px] 2xl:px-[40px] 2xl:pb-[80px] rounded-[20px] shadow-lg relative w-full text-left focus:outline-none hover:bg-red-100 transition-all duration-200"
                >
                    <div className="flex items-center justify-between">
                        <div className="w-[60px] mdx:w-[80px] 2xl:w-[90px] h-full">
                            <Image src={block} alt="Blockchain Icon" width={150} height={350} quality={350} />
                        </div>
                        <div className="p-2 border border-corporate rounded-full hover:bg-red-100 transition-all w-[60px] h-[60px] mdx:w-[70px] mdx:h-[70px] 2xl:w-[80px] 2xl:h-[80px] flex items-center justify-center">
                            <Image src={arrow_right_black} alt="Arrow Icon" width={50} height={50} className="w-[30px] mdx:w-[40px] 2xl:w-[48px] h-auto" />
                        </div>
                    </div>
                    <h3 className="text-[#303030] text-[18px] mdx:text-[20px] 2xl:text-[30px] font-semibold mt-[16px] mdx:mt-[20px]">{t('service4.title')}</h3>
                    <p className="text-[#A6A6A6] text-[16px] 2xl:text-[20px] mt-[16px] font-medium leading-[23px]">
                        {t('service4.description')}
                    </p>
                </button>

                {/* Карточка 5 */}
                <button
                    type="button"
                    className="bg-white p-[20px] mdx:pb-[40px] 2xl:px-[40px] 2xl:pb-[80px] rounded-[20px] shadow-lg relative w-full text-left focus:outline-none hover:bg-red-100 transition-all duration-200"
                >
                    <div className="flex items-center justify-between">
                        <div className="w-[60px] mdx:w-[80px] 2xl:w-[90px] h-full">
                            <Image src={scoop} alt="Analytics Icon" width={150} height={350} quality={350} />
                        </div>
                        <div className="p-2 border border-corporate rounded-full hover:bg-red-100 transition-all w-[60px] h-[60px] mdx:w-[70px] mdx:h-[70px] 2xl:w-[80px] 2xl:h-[80px] flex items-center justify-center">
                            <Image src={arrow_right_black} alt="Arrow Icon" width={50} height={50} className="w-[30px] mdx:w-[40px] 2xl:w-[48px] h-auto" />
                        </div>
                    </div>
                    <h3 className="text-[#303030] text-[18px] mdx:text-[20px] 2xl:text-[30px] font-semibold mt-[16px] mdx:mt-[20px]">{t('service5.title')}</h3>
                    <p className="text-[#A6A6A6] text-[16px] 2xl:text-[20px] mt-[16px] font-medium leading-[23px]">
                        {t('service5.description')}
                    </p>
                </button>

                {/* Карточка 6 */}
                <button
                    type="button"
                    className="bg-white p-[20px] mdx:pb-[40px] 2xl:px-[40px] 2xl:pb-[80px] rounded-[20px] shadow-lg relative w-full text-left focus:outline-none hover:bg-red-100 transition-all duration-200"
                >
                    <div className="flex items-center justify-between">
                        <div className="w-[60px] mdx:w-[80px] 2xl:w-[90px] h-full">
                            <Image src={sound} alt="Sound Services Icon" width={150} height={350} quality={350} />
                        </div>
                        <div className="p-2 border border-corporate rounded-full hover:bg-red-100 transition-all w-[60px] h-[60px] mdx:w-[70px] mdx:h-[70px] 2xl:w-[80px] 2xl:h-[80px] flex items-center justify-center">
                            <Image src={arrow_right_black} alt="Arrow Icon" width={50} height={50} className="w-[30px] mdx:w-[40px] 2xl:w-[48px] h-auto" />
                        </div>
                    </div>
                    <h3 className="text-[#303030] text-[18px] mdx:text-[20px] 2xl:text-[30px] font-semibold mt-[16px] mdx:mt-[20px]">{t('service6.title')}</h3>
                    <p className="text-[#A6A6A6] text-[16px] 2xl:text-[20px] mt-[16px] font-medium leading-[23px]">
                        {t('service6.description')}
                    </p>
                </button>
            </div>
        </div>
    );
}
