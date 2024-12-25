import Image from "next/image";
// import { useTranslations } from "next-intl";
import arrow_right_black from "@/public/svg/arrows/arrow_right_black.svg";

export default function LearningMarketing() {
    // const t = useTranslations("Main.LearningMarketing"); // ← Если нужны переводы

    return (
        <div className="bg-[#303030] text-white w-full py-10">
            <div className="max-w-[1440px] mx-auto px-[15px] w-full flex flex-col gap-8">
                {/* Заголовок блока */}
                <h2 className="text-2xl md:text-3xl font-bold">
                    Обучаем контент-маркетингу
                </h2>

                {/* Первый большой блок (красный) */}
                <div className="bg-corporate rounded-[30px] flex flex-col gap-4 p-[30px] mdx:max-w-[536px]">
                    <h3 className="text-[25px] mdx:text-[30px] font-bold leading-normal uppercase">
                        Процесс работы максимально чистый и прозрачный
                    </h3>
                    {/* Кнопка */}
                    <button className="inline-flex items-center justify-around pl-[12px] pr-[4px] py-[6px] mdx:pl-[24px] mdx:pr-[6px] mdx:py-[10px] bg-inherit text-white text-[14px] font-semibold rounded-full shadow hover:bg-red-500 transition duration-300 border-white border text-[14px] mdx:text-[20px]">
                        Бесплатная консультация
                        <span className="ml-[10px] hover:pl-4 transition-all duration-200 bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                            <Image
                                src={arrow_right_black}
                                alt="arrow rightb black"
                                width={20} // Укажите нужный размер
                                height={20}
                                className="rounded-lg "
                            />
                        </span>
                    </button>
                </div>

                {/* Карточки с белым фоном */}
                <div className="flex flex-col gap-4">
                    {/* Первая карточка */}
                    <div className="bg-white text-black rounded-[30px] p-6 md:p-8 flex flex-col gap-4">
                        <h3 className="text-xl md:text-2xl font-semibold">
                            Работаем по договору
                        </h3>
                        <p className="text-sm md:text-base">
                            Мы тщательно прорабатываем все детали и фиксируем наши обязательства в договоре. Это гарантирует прозрачность, защищает ваши интересы и обеспечивает надёжность наших услуг.
                        </p>
                        <button className="flex items-center font-semibold text-red-500 hover:underline w-fit">
                            Подробнее
                            <span className="ml-2">&rarr;</span>
                        </button>
                    </div>

                    {/* Вторая карточка */}
                    <div className="bg-white text-black rounded-[30px] p-6 md:p-8 flex flex-col gap-4">
                        <h3 className="text-xl md:text-2xl font-semibold">
                            Утверждаем планы
                        </h3>
                        <p className="text-sm md:text-base">
                            На этом этапе мы окончательно согласовываем все детали проекта, включая сроки, ресурсы и этапы выполнения. Важно, чтобы все участники имели чёткое представление о ходе работы.
                        </p>
                        <button className="flex items-center font-semibold text-red-500 hover:underline w-fit">
                            Подробнее
                            <span className="ml-2">&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
