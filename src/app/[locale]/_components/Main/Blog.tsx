import { useTranslations } from "next-intl";
import Image from "next/image";
import def from "@/public/image/blogs/card1.png";
import arrow_right_black from "@/public/svg/arrows/arrow_right_black.svg";
import Link from "next/link";

interface LocaleProps {
    locale: string;
}

export default function Blog({ locale }: LocaleProps) {
    const t = useTranslations("Main.Blog");

    return (
        <div className="relative w-full mx-auto max-w-[1720px] flex justify-center items-center max-4xl:px-[15px]">
            <div className="w-full bg-[#fff] px-[30px] mdl:px-[60px] py-[30px] mdx:py-[40px] xl:py-[80px] 4xl:px-0 rounded-[30px] mdx:rounded-[50px] xl:rounded-[80px]">
                <div className="w-full max-w-[1400px] mx-auto">
                    <h2 className="w-full text-[#303030] font-bold text-[28px] mdx:text-[40px] xl:text-[60px]">{t('title')}</h2>
                    <div className="flex gap-[16px] flex-col xl:flex-row mdx:gap-[20px] mt-[20px] xl:mt-[40px]">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex flex-col border border-[#C5C5C5] rounded-[20px] mdx:rounded-[10px] h-full">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={def}
                                        alt={"news image"}
                                        width={100}
                                        height={100}
                                        quality={100}
                                        className="w-full h-full object-cover max-h-[307px] rounded-t-[20px] mdx:rounded-t-[10px]"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 pt-[16px] px-[16px] pb-[20px] w-full">
                                    <h4 className="text-[20px] font-medium text-[#303030] leading-normal">
                                        Как выбрать IT-подрядчика для вашего бизнеса в Ташкенте
                                    </h4>
                                    <p className="mt-[10px] text-[14px] text-[#A6A6A6] leading-normal line-clamp-2">
                                        Узнайте, как перевести бизнес в онлайн с минимальными затратами....
                                    </p>
                                    <div className="mt-auto w-full text-right text-[#9D9DA8]">10.01.2024</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center w-full mt-[25px] xl:mt-[80px]">
                        <Link href={`/${locale}/blog`}>
                            <button className="group border rounded-full border-[#fff] flex flex-row items-center justify-between bg-corporate pr-[6px] mdx:pr-[12px] py-[4px] mdx:py-[12px] overflow-hidden w-full max-mdx:max-w-auto">
                                <p className="text-[#fff] pl-[24px] pr-[10px] text-[14px] mdx:text-[18px]  font-semibold">
                                    {t('all_news')}
                                </p>
                                <div className="relative rounded-full bg-[#ffff] w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={arrow_right_black}
                                        alt={"all news"}
                                        width={100}
                                        height={100}
                                        quality={100}
                                        className="w-[20px] h-[20px] transition-transform duration-300 transform group-hover:translate-x-[10px]"
                                    />
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};
