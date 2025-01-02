"use client";

import { useState, ChangeEvent, MouseEvent } from "react";
import Image from "next/image";
import close from "@/public/svg/tools/close-modal.svg";
import arrow from "@/public/svg/arrows/ArrowBottomBlack.svg";
import arrow_right_black from "@/public/svg/arrows/arrow_right_black.svg";
import axios from "axios";
import { useTranslations } from "next-intl";
import ModalOk from "./Ok";

interface QuestionSentProps {
  closeModal: () => void;
}

// Интерфейс для состояния формы
interface FormValues {
  name: string;         // обязательное поле
  phone: string;        // обязательное поле
  comment?: string;     // необязательное поле
  service?: string;     // необязательное поле
}

// Интерфейс для результата валидации
interface ValidationResult {
  isValid: boolean;
  message: string;
}

const QuestionSent: React.FC<QuestionSentProps> = ({ closeModal }) => {
  const t = useTranslations("Modal");

  const [showModalOk, setShowModalOk] = useState<boolean>(false);

  const handleClose = () => {
    closeModal();
    setShowModalOk(false);
  };

  const formatText = (text: string): JSX.Element[] => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  // Закрытие модального окна при клике вне его содержимого
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Начальные значения формы
  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    comment: "",
    service: t("text-3") // можно считать как дефолтное значение
  });

  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Сервисы, переведенные с помощью next-intl
  const services: string[] = [
    t("services-1"),
    t("services-2"),
    t("services-3"),
    t("services-4"),
    t("services-5"),
    t("services-6"),
    t("services-7")
  ];

  // Обработчик изменения полей ввода
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Разрешаем только цифры, плюс, пробелы, дефисы и скобки
      const filteredValue = value.replace(/[^\d+()\s-]/g, "");
      setValues((prevValues) => ({
        ...prevValues,
        phone: filteredValue
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value
      }));
    }
  };

  // Функция валидации полей name и phone
  const validateInput = (name: keyof FormValues, value: string): ValidationResult => {
    if (name === "name") {
      return value.trim().length >= 3
        ? { isValid: true, message: t("correct") }
        : { isValid: false, message: t("enter_full_name") };
    } else if (name === "phone") {
      // Обновлённый регекс для номеров телефонов с поддержкой скобок
      const phoneRegex = /^\+?[\d\s()-]{7,20}$/;
      return phoneRegex.test(value)
        ? { isValid: true, message: t("correct") }
        : { isValid: false, message: t("enter_valid_phone_number") };
    }
    // Для необязательных полей (comment и service) не делаем строгую валидацию
    return { isValid: true, message: "" };
  };

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleSelectService = (service: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      service
    }));
    setIsDropdownOpen(false);
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, phone, comment, service } = values;

    // Проверяем только обязательные поля name и phone
    if (!name || !phone) {
      // Можно добавить уведомление пользователю, что эти поля обязательны
      return;
    }

    // Составляем payload для API
    const payload = {
      name: name,
      phoneNumber: phone,
      service: service,   // можно отправлять даже если это "text-3"
      comment: comment    // отправится пустым, если пользователь оставил пустую строку
    };

    try {
      const response = await axios.post(
        "https://api.in-te.uz/v1/application/",
        payload
      );
      if (response.status === 200 || response.status === 201) {
        setShowModalOk(true);
        // Сбрасываем значения формы
        setValues({
          name: "",
          phone: "",
          comment: "",
          service: t("text-3") // снова дефолтное значение
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      // Обработка ошибки (уведомления и т.п.)
    }
  };

  return (
    <>
      {/* Основное модальное окно */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]"
        onClick={handleBackdropClick}
      >
        <div className="bg-white p-6 mdx:p-[30px] shadow-md w-[90%] rounded-[30px] max-w-[466px] relative flex flex-col items-center justify-center">
          <div className="flex justify-between items-start w-full text-[#010101]">
            <h2 className=" lh text-[18px] font-semibold mdx:text-[25px] xl:text-[30px]">
              {formatText(t("type-of-service"))}
            </h2>
            <div
              onClick={handleClose}
              className="w-full h-full max-w-[25px] max-h-[25px] mdx:max-w-[30px] mdx:max-h-[30px] absolute right-[15px] top-[15px] cursor-pointer"
            >
              <Image
                src={close}
                width={100}
                height={100}
                quality={100}
                alt="close"
                className="h-full w-full max-w-[25px] max-h-[25px] mdx:max-w-[30px] mdx:max-h-[30px]"
              />
            </div>
          </div>
          <form
            className="flex flex-col gap-[16px] mdx:gap-[20px] w-full mt-[20px] mdx:mt-[40px]"
            onSubmit={handleSubmit}
          >
            {/* Поля name и phone (обязательные) */}
            {["name", "phone"].map((field) => (
              <div className="relative" key={field}>
                <input
                  type={field === "phone" ? "tel" : "text"}
                  name={field}
                  value={values[field as keyof FormValues] as string}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedInput(field)}
                  onBlur={() => setFocusedInput(null)}
                  className={`block w-full px-3 py-[22px] text-[#666666] placeholder-transparent focus:outline-none border border-[#F0F0F0] rounded-[20px] ${focusedInput === field
                    ? validateInput(
                      field as keyof FormValues,
                      values[field as keyof FormValues] as string
                    ).isValid
                      ? "border-[#EEEEEE] text-black"
                      : "border-red-500 text-black"
                    : "border-[#EEEEEE] text-black"
                    }`}
                  placeholder={
                    field === "name"
                      ? t("full-name")
                      : t("telephone-number")
                  }
                  inputMode={field === "phone" ? "numeric" : undefined}
                />
                <label
                  htmlFor={field}
                  className={`absolute transition-all text-[16px] mdx:text-[19px] ${focusedInput === field ||
                    (values[field as keyof FormValues] &&
                      (values[field as keyof FormValues] as string).length > 0)
                    ? "-top-4 text-xs"
                    : "top-[22px] left-[24px] text-[16px] mdx:text-[20px]"
                    } ${focusedInput === field
                      ? "text-[#666666] opacity-[0.8]"
                      : "text-[#666666] opacity-[0.8]"
                    } cursor-text`}
                  onClick={() => {
                    const input = document.getElementsByName(field)[0] as HTMLElement;
                    input.focus();
                  }}
                >
                  {focusedInput === field &&
                    (values[field as keyof FormValues] as string).length > 0
                    ? validateInput(
                      field as keyof FormValues,
                      values[field as keyof FormValues] as string
                    ).message
                    : field === "name"
                      ? t("full-name")
                      : t("telephone-number")}
                </label>
                {/* Опционально: отображение сообщения об ошибке валидации */}
                {(focusedInput === field ||
                  (values[field as keyof FormValues] &&
                    (values[field as keyof FormValues] as string).length > 0)) &&
                  !validateInput(
                    field as keyof FormValues,
                    values[field as keyof FormValues] as string
                  ).isValid ? (
                  <span className="text-red-500 text-sm">
                    {
                      validateInput(
                        field as keyof FormValues,
                        values[field as keyof FormValues] as string
                      ).message
                    }
                  </span>
                ) : null}
              </div>
            ))}

            {/* Необязательный выпадающий список для выбора услуги */}
            <div className="relative border rounded-[20px] border-[#F0F0F0] border-opacity-[0.8] mt-3">
              <button
                type="button"
                className="w-full text-[#666666] py-[22px] pl-[24px] opacity-[0.8] text-[16px] mdx:text-[20px] text-left border-[#E1E1E1] flex justify-between items-center"
                onClick={toggleDropdown}
              >
                {values.service}
                <Image
                  quality={100}
                  src={arrow}
                  alt="arrow"
                  className="w-5 h-5 mr-[24px]"
                />
              </button>

              {isDropdownOpen && (
                <ul className="absolute bg-white border border-gray-300 w-full mt-1 z-10 max-h-[190px] overflow-y-auto">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="p-3 text-[#A6A6A6] hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSelectService(service)}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Необязательное поле comment */}
            <div className="relative" key="comment">
              <input
                name="comment"
                value={values.comment ?? ""}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput("comment")}
                onBlur={() => setFocusedInput(null)}
                className={`block w-full px-3 py-[22px] text-[#666666] placeholder-transparent focus:outline-none border border-[#F0F0F0] rounded-[20px] ${focusedInput === "comment"
                  ? "border-[#EEEEEE] text-black"
                  : "border-[#EEEEEE] text-black"
                  }`}
                placeholder={t("comment-placeholder")}
              />
              <label
                htmlFor="comment"
                className={`absolute transition-all text-[16px] mdx:text-[19px] ${focusedInput === "comment" || (values.comment && values.comment.length > 0)
                  ? "-top-4 text-xs"
                  : "top-[22px] left-[24px] text-[16px] mdx:text-[20px]"
                  } ${focusedInput === "comment"
                    ? "text-[#666666] opacity-[0.8]"
                    : "text-[#666666] opacity-[0.8]"
                  } cursor-text`}
                onClick={() => {
                  const textarea = document.getElementsByName("comment")[0] as HTMLElement;
                  textarea.focus();
                }}
              >
                {focusedInput === "comment" && values.comment
                  ? values.comment
                  : t("comment")}
              </label>
            </div>



            <div className="flex justify-start w-full">
              <button className="group border rounded-full border-[#fff] flex flex-row items-center justify-between bg-corporate pr-[6px] mdx:pr-[12px] py-[4px] mdx:py-[12px] overflow-hidden w-full">
                <p className="text-[#fff] pl-[24px] pr-[10px] text-[16px] mdx:text-[18px] xl:text-[20px] font-semibold">
                  {t("send")}
                </p>
                <div className="relative rounded-full bg-[#ffff] w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
                  <Image
                    src={arrow_right_black}
                    alt={t("arrowAlt") || "arrow black right"}
                    width={100}
                    height={100}
                    quality={100}
                    className="w-[20px] h-[20px] transition-transform duration-300 transform group-hover:translate-x-[10px]"
                  />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      {showModalOk && <ModalOk closeModal={handleClose} />}
    </>
  );
};

export default QuestionSent;
