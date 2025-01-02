"use client";
// import logoBig from "@/public/images/imed-f.svg";
import telegram from "@/public/svg/footer/telegram.svg";
// import facebook from "@/public/svg/footer/facebook.svg";
import instagram from "@/public/svg/footer/instagram.svg";
import youtube from "@/public/svg/footer/youtube.svg";
// import resultLogo from "@/public/svg/footer/result-logo.png";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import Image from "next/image";
// import axios from 'axios';
import logo1 from "@/public/image/Intermediate_white.png";

interface LocaleProps {
  locale: string;
}

// const handleSocialClick = async (event: React.MouseEvent<HTMLAnchorElement>, url: string, button: string) => {
//   event.preventDefault();

//   try {
//     await axios.post(`https://rmc.mrjtrade.uz/api/counter/add?button=${button}`);
//     console.log(`Successfully sent API request for ${button}`);

//     window.open(url, '_blank');
//   } catch (error) {
//     console.error('API call failed:', error);
//     window.open(url, '_blank');
//   }
// };

export default function Footer({ locale }: LocaleProps) {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-darkOverlay w-full pt-[30px] border_radius_footer xl:pt-[120px]">
      <div className="w-full max-w-[1440px] flex flex-col gap-[15px] mx-auto">
        <div className="w-full flex justify-between flex-col gap-[15px] px-[25px]">
          <div className="flex justify-between flex-row gap-5 items-center xl:hidden">
            <div className="flex flex-col gap-5 ">
              <Link href="/" className="h-auto w-auto items-center flex">
                <div className="flex flex-row gap-[8px] items-center max-mdx:max-w-[100px] max-mdx:max-h-[100px]">
                  <Image
                    src={logo1}
                    width={300}
                    height={300}
                    quality={100}
                    alt="Rmc Logo"
                    className="h-[100px] w-[100px] mdx:h-[160px] mdx:w-[160px]"
                  />
                </div>
              </Link>
            </div>
            <div className="flex gap-3 mdx:gap-[20px]">
              <a
                href="https://www.instagram.com/rmc_de_luxe?igsh=cWpxdXVobHgxODcx"
                target="_blank"
                rel="noopener noreferrer"
              // onClick={(e) => handleSocialClick(e, "https://www.instagram.com/rmc_de_luxe?igsh=cWpxdXVobHgxODcx", "INSTAGRAM_FOOTER")}
              >
                <Image
                  src={instagram}
                  width={100}
                  height={100}
                  quality={100}
                  alt="Instagram"
                  className="w-[32px] h-[32px] mdx:w-[43px] mdx:h-[43px] xl:w-[48px] xl:h-[48px]"
                />
              </a>
              <a
                href="https://t.me/rmc_de_luxe"
                target="_blank"
                rel="noopener noreferrer"
              // onClick={(e) => handleSocialClick(e, "https://t.me/rmc_de_luxe", "TELEGRAM_FOOTER")}
              >
                <Image
                  src={telegram}
                  width={100}
                  quality={100}
                  height={100}
                  alt="Telegram"
                  className="w-[32px] h-[32px] mdx:w-[43px] mdx:h-[43px] xl:w-[48px] xl:h-[48px]"
                />
              </a>
              <a href="https://www.youtube.com/@RMC_DE_LUXE" target="_blank" rel="noopener noreferrer"
              // onClick={(e) => handleSocialClick(e, "https://www.youtube.com/@RMC_DE_LUXE", "YOUTUBE")}
              >
                <Image
                  src={youtube}
                  width={100}
                  height={100}
                  quality={100}
                  alt="YouTube"
                  className="w-[32px] h-[32px] mdx:w-[43px] mdx:h-[43px] xl:w-[48px] xl:h-[48px]"
                />
              </a>
            </div>
          </div>
          <div className="mdx:flex flex-row xl:gap-[260px]">

            <div className=" justify-between flex-col items-center hidden xl:flex max-h-[208px]">
              <div className="flex flex-col gap-5 ">
                <Link href="/" className="h-auto w-auto items-center flex">
                  <div className="flex flex-row gap-[8px] items-center max-mdx:max-w-[300px]">
                    <Image
                      src={logo1}
                      width={300}
                      height={300}
                      quality={100}
                      alt="Rmc Logo"
                      className="h-full max-mdx:max-h-[100px] max-mdx:w-[100px] mdx:h-[160px] mdx:w-[160px]"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex gap-3 mdx:gap-[20px]">
                <a
                  href="https://www.instagram.com/intermediate.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                // onClick={(e) => handleSocialClick(e, "https://www.instagram.com/rmc_de_luxe?igsh=cWpxdXVobHgxODcx", "INSTAGRAM_FOOTER")}
                >
                  <Image
                    src={instagram}
                    width={100}
                    height={100}
                    quality={100}
                    alt="Instagram"
                    className="w-[48px] h-[48px]"
                  />
                </a>
                <a
                  href="https://t.me/InterMediate_Agency"
                  target="_blank"
                  rel="noopener noreferrer"
                // onClick={(e) => handleSocialClick(e, "https://t.me/rmc_de_luxe", "TELEGRAM_FOOTER")}
                >
                  <Image
                    src={telegram}
                    width={100}
                    quality={100}
                    height={100}
                    alt="Telegram"
                    className="w-[48px] h-[48px]"
                  />
                </a>
                <a href="https://www.youtube.com/@user-up6dg9hx5v" target="_blank" rel="noopener noreferrer"
                // onClick={(e) => handleSocialClick(e, "https://www.youtube.com/@RMC_DE_LUXE", "YOUTUBE")}
                >
                  <Image
                    src={youtube}
                    width={100}
                    height={100}
                    quality={100}
                    alt="YouTube"
                    className="w-[48px] h-[48px]"
                  />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 xl:max-w-[609px] w-full flex max-mdx:gap-5  border-x border-[#5A5A5A] h-[179px] xl:h-[269px]">





              <div className="flex-1 flex items-center justify-center border-r border-[#5A5A5A]">
                <div className="flex flex-col text-left text-[16px] mdx:text-[18px] xl:text-[20px] gap-[20px] mdx:gap-[10px] text-[#FFFFFF] font-medium xl:max-w-[110px] xl:gap-[30px]">
                  {/* <Link href={`/${locale}/services`} className="hover:text-[#B3B3B3]">{t('services')}</Link> */}
                  <Link href={`/${locale}/about`} className="hover:text-[#B3B3B3]">{t('aboutUs')}</Link>
                  <Link href={`/${locale}/cases`} className="hover:text-[#B3B3B3]">{t('cases')}</Link>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-col text-left text-[16px] mdx:text-[18px] xl:text-[20px] gap-[20px] mdx:gap-[10px] text-[#FFFFFF] font-medium xl:max-w-[163px] xl:gap-[30px]">
                  <Link href={`/${locale}/blog`} className="hover:text-[#B3B3B3]">{t('blog')}</Link>
                  <Link href={`/#contacts`} className="hover:text-[#B3B3B3]">{t('contacts')}</Link>
                  {/* <Link href={`/${locale}/marketing`} className="hover:text-[#B3B3B3]">{t('marketing')}</Link> */}
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="w-full ">
          <div className="my-6 w-full flex flex-col mdx:flex-row items-center px-[16px]">
            <p className="w-full text-[#B3B3B3] text-[14px] xl:text-[16px]">
              {t('info1')}
            </p>
            <div className="w-full flex whitespace-nowrap mdx:justify-end mt-[4px] gap-[16px] mdx:gap-[40px] font-medium text-[14px]">
              <p className="max-mdx:max-w-[150px] text-[#B3B3B3] text-[14px] xl:text-[16px]">
                {t('info2')}
              </p>
              <p className="max-mdx:max-w-[150px] text-[#B3B3B3] text-[14px] xl:text-[16px]">
                {t('info3')}
              </p>
            </div>
            {/* <a href="https://result-me.uz/api/redirect?from=cm1j" target="_blank" rel="noopener noreferrer">
              <Image
                src={resultLogo}
                width={800}
                height={800}
                quality={100}
                alt="Result Logo"
                className="h-8 w-auto"
              />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
