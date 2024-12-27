"use client"
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import arrow_right_black from "@/public/svg/arrows/arrow_right_black.svg";

import red_rounded1 from "@/public/svg/gradient/last1.svg";
import red_rounded2 from "@/public/svg/gradient/last2.svg";
import Image from "next/image";
import ModalOk from "../Modals/Ok"; // Импортируем ваш кастомный модальный компонент

interface FormData {
    name: string;
    phoneNumber: string;
    email?: string;
}

export default function Form() {
    const t = useTranslations("Main.Form");

    // Состояния для полей формы
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // Состояния для управления статусом отправки и отображением модального окна
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Состояния для хранения ошибок
    const [nameError, setNameError] = useState<string | null>(null);
    const [phoneError, setPhoneError] = useState<string | null>(null);
    const [submissionError, setSubmissionError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Сброс предыдущих ошибок
        setNameError(null);
        setPhoneError(null);
        setSubmissionError(null);

        let hasError = false;

        // Простая валидация
        if (!name.trim()) {
            setNameError(t("validation.nameRequired") || "Имя обязательно для заполнения.");
            hasError = true;
        }

        if (!phoneNumber.trim()) {
            setPhoneError(t("validation.phoneRequired") || "Телефон обязателен для заполнения.");
            hasError = true;
        }

        const phoneRegex = /^\+?\d{7,15}$/;
        if (phoneNumber.trim() && !phoneRegex.test(phoneNumber)) {
            setPhoneError(t("validation.phoneInvalid") || "Неверный формат номера телефона.");
            hasError = true;
        }

        if (hasError) {
            return;
        }

        // Подготовка данных
        const data: FormData = {
            name: name.trim(),
            phoneNumber: phoneNumber.trim(),
        };

        if (email.trim()) {
            data.email = email.trim();
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.in-te.uz/v1/application/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || (t("errorMessage") || "Ошибка при отправке заявки."));
            }

            const result = await response.json();
            console.log(result); // Используйте result по необходимости

            // Отображение модального окна при успешной отправке
            setShowModal(true);

            // Сброс формы
            setName("");
            setEmail("");
            setPhoneNumber("");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setSubmissionError(error.message || (t("errorMessage") || "Произошла ошибка."));
            } else {
                setSubmissionError(t("errorMessage") || "Произошла ошибка.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Обновленный обработчик для поля телефона
    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        // Разрешаем только '+' в начале и цифры после него
        if (value.startsWith('+')) {
            // Удаляем все символы, кроме '+' и цифр
            value = '+' + value.slice(1).replace(/\D/g, '');
        } else {
            // Удаляем все нецифровые символы
            value = value.replace(/\D/g, '');
        }

        setPhoneNumber(value);
    };

    // Функция для закрытия модального окна
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="relative w-full mx-auto max-w-[1720px] flex justify-center items-center pb-[100px] mdx:pb-[120px] max-4xl:px-[15px]">
            {/* Основной блок формы */}
            <div className="relative bg-form p-[30px] mdx:p-[40px] 2xl:py-[120px] 2xl:px-[160px] rounded-[30px] mdx:rounded-[50px] xl:rounded-[80px] shadow-lg w-full z-10 2xl:flex 2xl:flex-row 2xl:gap-[117px] 2xl:justify-between overflow-hidden">
                {/* Градиенты */}
                <div className="absolute bottom-[-150px] left-[-150px] z-0 pointer-events-none">
                    <Image
                        src={red_rounded1}
                        alt="Red gradient circle 1"
                        width={500}
                        height={500}
                        className="w-[300px] md:w-[400px] xl:w-[500px] opacity-60"
                    />
                </div>
                <div className="absolute top-[-150px] right-[-150px] z-0 pointer-events-none">
                    <Image
                        src={red_rounded2}
                        alt="Red gradient circle 2"
                        width={500}
                        height={500}
                        className="w-[300px] md:w-[400px] xl:w-[500px]"
                    />
                </div>

                {/* Контент формы */}
                <h2 className="text-white text-[27px] mdx:text-[40px] xl:text-[50px] 4xl:text-[60px] xl:leading-[65px] font-bold mb-6 text-left">
                    {t("title") || "Обязательно зарегистрируйтесь"}
                </h2>
                {submissionError && (
                    <div className="mb-4 text-red-500 text-sm">
                        {submissionError}
                    </div>
                )}
                <form className="space-y-[16px] mdx:space-y-[20px] w-full" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={t("namePlaceholder") || "Имя"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full p-[16px] mdx:p-[20px] rounded-[100px] border ${nameError ? "border-red-500" : "border-white"} bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white`}
                            required
                        />
                        {nameError && (
                            <span className="absolute left-0 mt-1 text-red-500 text-sm">
                                {nameError}
                            </span>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder={t("emailPlaceholder") || "Email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-[16px] mdx:p-[20px] rounded-[100px] border border-white bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        {/* Если требуется валидация email, добавьте сообщение об ошибке здесь */}
                    </div>
                    <div className="relative">
                        <input
                            type="tel"
                            inputMode="tel" // Улучшает опыт на мобильных устройствах
                            pattern="\+?\d*" // Разрешает '+' в начале и цифры далее
                            placeholder={t("phonePlaceholder") || "Телефон"}
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange} // Используем обновленный обработчик
                            className={`w-full p-[16px] mdx:p-[20px] rounded-[100px] border ${phoneError ? "border-red-500" : "border-white"} bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white`}
                            required
                        />
                        {phoneError && (
                            <span className="absolute left-0 mt-1 text-red-500 text-sm">
                                {phoneError}
                            </span>
                        )}
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`group border rounded-full border-[#fff] flex flex-row items-center pr-[6px] py-[6px] overflow-hidden ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            <p className="text-[#fff] pl-[24px] pr-[10px] text-[18px] font-semibold">
                                {isSubmitting ? (t("submitting") || "Отправка...") : (t("button") || "Отправить")}
                            </p>
                            <div className="relative rounded-full bg-[#ffff] w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
                                <Image
                                    src={arrow_right_black}
                                    alt={t("arrowAlt") || "arrow black right"}
                                    width={100}
                                    height={100}
                                    quality={100}
                                    className={`w-[20px] h-[20px] transition-transform duration-300 transform ${isSubmitting ? "opacity-50" : "group-hover:translate-x-[10px]"
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </form>
            </div>

            {/* Условный рендеринг модального окна */}
            {showModal && <ModalOk closeModal={closeModal} />}
        </div>
    )
    };
