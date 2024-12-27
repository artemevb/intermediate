'use client';
import { useEffect, useRef, ChangeEvent, useTransition, useState } from "react";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import close from "@/public/svg/tools/close-black.svg";
import arrow_white from "@/public/svg/arrows/right_white.svg";
import phoneIcon from "@/public/svg/tools/phone-icon_white.svg";
import arrow_black from "@/public/svg/arrows/arrow_black_lonk.svg";
import logo1 from "@/public/image/Intermediate.png";
import { NavItem } from "./Header/NavItem";
import { useTranslations } from 'next-intl';
import Application from "../_components/Modals/Application";
// import axios from 'axios';

interface MenuProps {
  menu: boolean;
  closeMenu: () => void;
  navOptions: NavItem[];
  locale: string;
}

const Menu: React.FC<MenuProps> = ({ menu, closeMenu, navOptions, locale }) => {
  const t = useTranslations('Header');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      const segments = pathname.split('/');
      if (['ru', 'uz', 'en'].includes(segments[1])) {
        segments[1] = nextLocale;
      } else {
        segments.splice(1, 0, nextLocale);
      }
      const newPath = segments.join('/') || '/';
      router.replace(newPath);
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // If you plan to use the menu for a language switcher, uncomment and use setLanguageMenu
        // setLanguageMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div
      className={`fixed z-[9999] top-0 right-0 w-full bg-white h-full shadow-md ${menu ? "animate-slideInFromRight" : "transform translate-x-full"} transition-transform duration-300 ease-in-out`}
    >
      {/* Header with Language Switcher and Close Button */}
      <div className="border-b py-4 flex">
        <div className="w-full flex justify-between mx-4">

          <Link href="/" className="h-auto w-auto items-center flex justify-start">
            <div className="flex items-center">
              <Image
                src={logo1}
                width={300}
                height={300}
                quality={100}
                alt="InterMediate Logo"
                className="h-full max-mdx:max-h-[80px] max-mdx:w-[80px] max-h-[120px] w-[120px] mdx:w-auto"
              />
            </div>
          </Link>

          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-[12px]">
              {/* Language Switcher */}
              <label className='inline-flex items-center text-[16px] font-bold bg-white focus:outline-none border border-[#303030] px-[21.5px] py-[13px] rounded-full'>
                <span className='sr-only text-[16px]'>{t('menu.changeLanguage')}</span>
                <select
                  defaultValue={localActive}
                  className='bg-transparent appearance-none w-7 text-[16px]'
                  onChange={onSelectChange}
                  disabled={isPending}
                >
                  <option value='en'>En</option>
                  <option value='ru'>Ру</option>
                  <option value='uz'>Uz</option>
                </select>
                <svg
                  className="w-[24px] h-[24px] "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </label>

              <button
                onClick={closeMenu}
                className="py-[4px] pl-[6px] pr-[24px] rounded-full border border-[#303030] flex flex-row items-center"
              >
                <div className=" w-[40px] h-[40px] rounded-full border border-[#303030] flex justify-center items-center">
                  <Image
                    src={close}
                    quality={100}
                    priority
                    height={100}
                    width={100}
                    alt="burger-menu icon"
                    className="w-[20px] h-[20px]"
                  />
                </div>
                <p className="text-[16px] font-bold text-[#303030] ml-[4px]">{t('close')}</p>
              </button>
            </div>
          </div>

        </div>
      </div>
      <nav className="flex flex-col mt-2 ">

        {/* Other Navigation Items */}
        {navOptions.map((item, index) => (
          <Link
            key={index}
            onClick={() => {
              closeMenu();
              router.push(`/${locale}/${item.slug}`);
            }}
            href={`/${locale}/${item.slug}`}
            className="block border-b py-4 px-6 flex justify-between items-center text-[20px] font-semibold"
          >
            <span>{item.title}</span>
            <Image
              src={arrow_black}
              alt="Arrow"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
          </Link>
        ))}

        <div className="flex flex-row border-t pt-[35px] mdx:gap-[12px]">

          <button
            onClick={openModal}
            className="border rounded-full border-[#303030] flex flex-row items-center pr-[4px] max-w-[193px]">
            <p className="text-[#303030] pl-[10px] py-[16px] pr-[10px] text-[14px] font-semibold whitespace-nowrap">{t('discussProject')}</p>
            <div className=" rounded-full bg-[#000000] w-[37px] h-[37px] flex items-center justify-center">
              <Image
                src={arrow_white}
                alt="arrow white right"
                width={20}
                height={20}
                quality={100}
              />
            </div>
          </button>

          <a
            href="tel:+998785558787" className="border rounded-full border-[#303030] flex flex-row items-center pr-[4px] max-w-[146px]">
            <p className="text-[#303030] pl-[10px] py-[16px] pr-[10px] text-[14px] font-semibold whitespace-nowrap">{t('call')}</p>
            <div className=" rounded-full bg-[#000000] w-[37px] h-[37px] flex items-center justify-center">
              <Image
                src={phoneIcon}
                alt="phoneIcon"
                width={20}
                height={20}
                quality={100}
              />
            </div>
          </a>

        </div>

      </nav >
      {isModalOpen && <Application closeModal={closeModal} />}
    </div >
  );
};

export default Menu;
