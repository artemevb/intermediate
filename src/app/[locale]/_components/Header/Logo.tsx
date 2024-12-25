

import Image from "next/image";
import Link from "next/link";
// import logo from "@/public/images/imed-f.svg";
import logo1 from "@/public/image/Intermediate.png";

function Logo() {
  return (
    <Link href="/" className="h-auto w-auto items-center flex  mdx:max-w-max">
      <div className="flex flex-row gap-[8px] items-center justify-between max-mdx:max-w-[120px]">
        <Image
          src={logo1}
          width={300}
          height={300}
          quality={100}
          alt="Rmc Logo"
          className="h-full w-auto"
        />
        {/* <div className="flex flex-col">
          <div className="text-[15px] mdx:text-[22px] uppercase font-bold">Rmc De Luxe</div>
          <div className="text-[11.5px] mdx:text-[15px] text-[#E94B50] ls">real estate</div>
        </div> */}
      </div>
    </Link>
  );
}

export default Logo;
