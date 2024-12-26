import { useTranslations } from "next-intl";
import Image from "next/image";
import label from "@/public/svg/contacts/label.svg";
import tel from "@/public/svg/contacts/tel.svg";
import telegram from "@/public/svg/contacts/telegram.svg";

export default function Map() {
    const t = useTranslations("Main.Map");

    return (
        <div className="w-full mx-auto max-w-[1720px] max-4xl:px-[15px] ">
            <div className="relative w-full flex flex-col items-center bg-white shadow-lg rounded-[30px] mdx:rounded-[50px] xl:rounded-[80px]">
                {/* Заголовок */}
                <div className="w-full px-[30px] mdx:px-[40px] 4xl:px-[140px]">
                    <div className="w-full text-center mdx:text-left xl:text-center mt-[30px] mdx:mt-[40px] xl:mt-[37px]">
                        <h2 className=" font-bold text-[28px] mdx:text-[40px] xl:text-[60px] text-[#303030]">
                            {t('title')}
                        </h2>
                    </div>

                    {/* Контактные данные */}
                    <div className=" flex flex-col gap-4 mdx:gap-5 xl:gap-0 xl:justify-between xl:flex-row mt-[20px] mdx:mt-[40px] xl:mt-[85px] mb-[20px] mdx:mb-[40px] xl:mb-[61px]">
                        <div className="flex gap-4 ">
                            <div className="w-[60px] h-[60px] mdx:w-[64px] mdx:h-[64px] rounded-[32px] bg-corporate flex items-center justify-center">
                                <Image src={tel} alt={t('phoneAlt')} width={24} height={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[14px] mdx:text-[20px]">
                                    {t('contactUs')}
                                </h3>
                                <a href="tel:+998509004738" className="text-[#A6A6A6] hover:text-[#c9c9c9] font-semibold text-[14px] mdx:text-[20px]">
                                    {t('phoneNumber')}
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[60px] h-[60px] rounded-[32px] bg-corporate flex items-center justify-center">
                                <Image src={label} alt={t('locationAlt')} width={24} quality={100} height={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[14px] mdx:text-[20px]">
                                    {t('ourLocation')}
                                </h3>
                                <a
                                    href="https://maps.app.goo.gl/swszWXi5N43HFfE77"
                                    target="_blank"
                                    rel="noopener noreferrer" className="text-[#A6A6A6] hover:text-[#c9c9c9] font-semibold text-[14px] mdx:text-[20px]">
                                    {t('address')}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-[60px] h-[60px] rounded-[32px] bg-corporate flex items-center justify-center">
                                <Image src={telegram} alt={t('telegramAlt')} width={24} quality={100} height={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[14px] mdx:text-[20px]">
                                    {t('writeTelegram')}
                                </h3>
                                <a href="https://t.me/result_man"
                                    target="_blank"
                                    rel="noopener noreferrer" className="text-[#A6A6A6] hover:text-[#c9c9c9] font-semibold text-[14px] mdx:text-[20px]">
                                    {t('telegram')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Карта */}
                <div className="w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9508.666450341523!2d69.28849691265117!3d41.351436187630846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIxJzA1LjIiTiA2OcKwMTcnMjAuMiJF!5e0!3m2!1sru!2s!4v1735193058996!5m2!1sru!2s" width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-b-[30px] mdx:rounded-b-[50px] xl:rounded-b-[80px]"></iframe>

                </div>
            </div>
        </div>
    );
}
