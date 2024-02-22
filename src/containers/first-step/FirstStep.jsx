import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";

const FirstStep = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const options = [
    { text: t("firstQuestion.options.english"), code: "en" },
    { text: t("firstQuestion.options.french"), code: "fr" },
    { text: t("firstQuestion.options.german"), code: "de" },
    { text: t("firstQuestion.options.spanish"), code: "es" },
  ];

  const handleButtonClick = (value) => {
    const stepData = {
      order: "1",
      title: t("firstQuestion.title"),
      type: "single-select",
      answer: value.text,
    };

    localStorage.setItem("question1", JSON.stringify(stepData));
    i18n.changeLanguage(value.code);
    navigate("/quiz/2");
  };

  return (
    <>
      <TitleWithDescription title={t("firstQuestion.title")} description={t("firstQuestion.description")} />
      <OptionList options={options} onClick={handleButtonClick} />
    </>
  );
};

export default FirstStep;
