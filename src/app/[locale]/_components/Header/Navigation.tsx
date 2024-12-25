"use client";
import Link from "next/link";

// Define the structure of navOptions items
interface NavItem {
  title: string;
  slug: string;
}

interface NavigationProps {
  navOptions: NavItem[];
  locale: string;
}

const Navigation: React.FC<NavigationProps> = ({ navOptions, locale }) => {


  return (
    <nav className="h-full flex gap-10 items-center max-2xl:hidden relative font-bold">
      {navOptions.map((item, i) => (
        <Link href={`/${locale}/${item.slug}`} key={i}>
          <div className="text-[#252324] font-semibold text-[18px] hover:text-corporate transition-all duration-300 whitespace-nowrap flex items-center">
            <span>{item.title}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
