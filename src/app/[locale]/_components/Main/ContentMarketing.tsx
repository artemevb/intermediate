// import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/public/image/Main/bgOneSection.png";
import red from "@/public/image/Main/Red.png";
import arrow_right_black from "@/public/svg/arrows/arrow_right_black.svg";

export default function ContentMarketing() {
    // const t = useTranslations("Main.ContentMarketing");

    return (
        <div
            className="relative flex flex-col items-start justify-center w-full mx-auto bg-cover bg-center bg-no-repeat border_radius_content_marketing mdx:border_radius_content_marketing_background max-2xl:px-[15px] mdl:px-[40px] 2xl:px-0"
            style={{
                backgroundImage: `url(${bg.src})`,
            }}
        >
            {/* Content Wrapper */}
            <div className="bg-white p-[16px] mdx:py-[26px] mdx:pl-[40px] my-[16px] mdx:my-[40px] xl:my-[80px] 3xl:p-[40px] border_radius_content_marketing max-w-[1440px] w-full mx-auto 2xl:flex 2xl:gap-[5px]">
                <div>
                    <p className="text-[12px] mdx:text-[14px] xl:text-[18px] text-[#A6A6A6] mb-[12px] mdx:mb-[20px]  2xl:mb-[44px] flex gap-[4px] max-w-[189px] mdx:max-w-[225px] 2xl:max-w-[265px] font-medium items-center ">
                        <Image
                            src={red}
                            alt="red"
                            width={100}
                            height={100}
                            className="w-[8px] h-[34px] mdx:h-[38px] 2xl:h-[50px] mr-[4px]"
                        />
                        Intermediate: IT-решения для роста вашего бизнеса</p>
                    <h1 className="text-[30px] mdx:text-[60px] 2xl:text-[80px] font-bold text-[#303030] mb-[10px] mdx:mb-[20px] xl:mb-[30px] leading-tight mdx:leading-[80px] mdx:max-w-[573px]  2xl:max-w-[764px]">
                        Сделаем контент маркетинг
                    </h1>
                    <p className="text-[#A6A6A6] mb-[10px] mdx:mb-[20px] xl:mb-[30px] text-[16px] mdx:font-medium mdx:text-[18px] 2xl:text-[20px] mdx:max-w-[573px]  2xl:max-w-[743px]">
                        Мы создаём сайты, настраиваем рекламу и автоматизируем процессы, чтобы ваш бизнес рос быстрее и работал эффективнее.
                    </p>
                    <button className="inline-flex items-center justify-center pl-[12px] pr-[4px] py-[4px] mdx:pl-[24px] mdx:pr-[6px] mdx:py-[6px] bg-corporate text-white text-[14px] font-semibold rounded-full shadow hover:bg-red-600 transition duration-300">
                        Обсудить задачу
                        <span className="ml-[10px] hover:pl-4 transition-all duration-200 bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                            <Image
                                src={arrow_right_black}
                                alt="arrow rightb black"
                                width={20} // Укажите нужный размер
                                height={20}
                                className="rounded-lg "
                            />
                        </span>
                    </button>
                </div>
                <div className="max-3xl:hidden block w-full max-w-[560px] h-[492px]">
                    <Image
                        src={bg}
                        alt="Background visual"
                        width={1560}
                        height={1492}
                        quality={100}
                        className="rounded-lg shadow-lg w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}

