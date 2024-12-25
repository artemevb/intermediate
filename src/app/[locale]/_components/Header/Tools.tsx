'use client';
import { useState, useTransition, useEffect, useRef } from "react";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import arrow_white from "@/public/svg/arrows/right_white.svg";
import Menu from "../Menu";
import Image from "next/image";
import burgerMenu from "@/public/svg/tools/burger-menu.svg";
// import Link from "next/link";
import { NavItem } from "./NavItem"; // Убедитесь, что путь корректен
// import axios from 'axios';

interface NavigationProps {
  navOptions: NavItem[];
  locale: string;
}

const LocalSwitcher: React.FC<NavigationProps> = ({ navOptions, locale }) => {
  const [menu, setMenu] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Добавим логирование текущего языка
  useEffect(() => {
    console.log("Текущий язык:", localActive);
  }, [localActive]);

  // Define the mapping from locale codes to display strings
  const localeDisplay: { [key: string]: string } = {
    en: 'En',
    ru: 'Ру',
    uz: 'O`z',
  };

  const handleOpenMenu = () => {
    setMenu(true);
  };

  // const handlePhoneClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   event.preventDefault(); // Предотвращаем стандартное поведение

  //   try {
  //     await axios.post('https://rmc.mrjtrade.uz/api/counter/add?button=CALL');
  //     window.location.href = 'tel:+998785558787';
  //   } catch (error) {
  //     console.error('API вызов не удался:', error);
  //     // Можно добавить логику обработки ошибок здесь, если необходимо
  //   }
  // };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleLanguageSelect = (nextLocale: string) => {
    setDropdownOpen(false);
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

  // Закрытие выпадающего списка при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-[12px]">
      <div className="h-full items-center flex gap-[8px] xl:gap-[12px]">

        <a
          href="tel:+998785558787"
          // onClick={handlePhoneClick}
          className="border border-[#303030] px-[16px] py-[16px] rounded-full max-mdx:px-3 max-mdx:py-3 hidden xl:block"
        >
          <Image
            src={phoneIcon}
            height={100}
            width={100}
            alt="Иконка телефона" // Fixed alt attribute
            className="w-7 h-7 max-mdx:w-3 max-mdx:h-3"
          />
        </a>

        <div className='relative'>
          <button
            onClick={toggleDropdown}
            className='flex items-center text-[16px] font-bold border border-[#303030] rounded-full focus:outline-none px-[21.5px] py-[16px]  xl:flex hidden '
          >
            <span className='sr-only'>Сменить язык</span>
            {localeDisplay[localActive] || localActive.toUpperCase()} {/* Use mapping */}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {dropdownOpen && (
            <div ref={dropdownRef} className="absolute right-4 w-[60px] bg-white shadow-lg z-10">
              <ul className="py-1">
                <li>
                  <button
                    onClick={() => handleLanguageSelect('en')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    En
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageSelect('ru')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Ру
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageSelect('uz')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Oz
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <button className="border rounded-full border-[#303030] hidden xl:flex flex-row items-center pr-[6px]">
          <p className="text-[#303030] pl-[24px] py-[16px] pr-[10px] text-[18px] font-semibold">Обсудить проект</p>
          <div className=" rounded-full bg-[#000000] w-[40px] h-[40px] flex items-center justify-center">
            <Image
              src={arrow_white}
              alt="arrow white right"
              width={20}
              height={20}
              quality={100}
            />

          </div>
        </button>
        <button
          onClick={handleOpenMenu}
          className="py-[4.5px] pl-[6px] pr-[24px] rounded-full 2xl:hidden border border-[#303030] flex flex-row items-center"
        >
          <div className=" w-[40px] h-[40px] rounded-full border border-[#303030] flex justify-center items-center">
            <Image
              src={burgerMenu}
              height={100}
              width={100}
              alt="burger-menu icon" // Fixed alt attribute
              className="w-[20px] h-[20px]"
            />

          </div>
          <p className="text-[16px] font-bold text-[#303030] ml-[4px]">Меню</p>
        </button>

        {/* Рендер компонента Menu */}
        {menu && (
          <Menu menu={menu} closeMenu={handleCloseMenu} navOptions={navOptions} locale={locale} />
        )}
      </div>
    </div>
  );
};

export default LocalSwitcher;
