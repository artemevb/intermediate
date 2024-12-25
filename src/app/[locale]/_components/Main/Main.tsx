
import Card from "./Card";
import ContentMarketing from "./ContentMarketing";
import Services from "./Services";
import LearningMarketing from "./LearningMarketing";

// type Locale = 'ru' | 'uz' | 'en';

// interface NewsCompProps {
//   locale: string;
// }
export default function Main() {
// export default function Main({ locale }: NewsCompProps) {
  return (
    <div className=" bg-[#303030] flex flex-col gap-[90px] mdl:gap-[130px] xl:gap-[180px]">
      <div>
        <ContentMarketing />
        <Card />
      </div>
      <Services />
      <LearningMarketing />
    </div>
  );
}
