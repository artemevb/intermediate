
import Card from "./Card";
import ContentMarketing from "./ContentMarketing";
import Services from "./Services";
import LearningMarketing from "./LearningMarketing";
import ReviewsClients from "./ReviewsClients";
import PartnersSlider from "./PartnersSlider";
import Result from "./Result";
import Blog from "./Blog";
import Subscribe from "./Subscribe";
import Map from "./Map";
import Form from "./Form";

interface NewsCompProps {
  locale: string;
}

  export default function Main({ locale }: NewsCompProps) {
  return (
    <main className=" bg-[#303030] flex flex-col gap-[90px] mdl:gap-[130px] xl:gap-[180px]">
      <div>
        <ContentMarketing />
        <Card />
      </div>
      <Services id="services" />
      <LearningMarketing />
      <ReviewsClients />
      <PartnersSlider />
      <Result />
      <Subscribe />
      <Blog locale={locale}/>
      <Map id="contacts" />
      <Form />
    </main>
  );
}
