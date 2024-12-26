
import TextTitle from "../_components/About/TextTitle";
import ContentMarketing from "./ContentMarketing";

import PartnersSlider from "../_components/About/PartnerSliderWhite";
import Map from "../_components/Main/Map";
import Form from "../_components/Main/Form";

// type Locale = 'ru' | 'uz' | 'en';

// interface NewsCompProps {
//   locale: string;
// }
export default function Main() {
    // export default function Main({ locale }: NewsCompProps) {
    return (
        <div className=" bg-[#fff] flex flex-col gap-[90px] mdl:gap-[130px] xl:gap-[180px]">
            <TextTitle />
            <PartnersSlider />
            <Map />
            <Form />
        </div>
    );
}
