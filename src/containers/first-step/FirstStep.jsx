import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";
import languages from "../../constants/languages";

const FirstStep = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const options = [
    { text: t("firstQuestion.options.english") },
    { text: t("firstQuestion.options.french") },
    { text: t("firstQuestion.options.german") },
    { text: t("firstQuestion.options.spanish") },
  ];

  const handleButtonClick = (value) => {
    const language = languages[value.text];
    const stepData = {
      order: "1",
      title: t("firstQuestion.title"),
      type: "single-select",
      answer: value.text,
    };

    localStorage.setItem("question1", JSON.stringify(stepData));
    i18n.changeLanguage(language);
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
