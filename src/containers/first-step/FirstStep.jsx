import { useTranslation } from "react-i18next";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";
import useNavigateWithDelay from "../../hooks/navigate-with-delay";
import { NAVIGATION_DELAY } from "../../constants/common";

const FirstStep = () => {
  const { t, i18n } = useTranslation();
  const navigateWithDelay = useNavigateWithDelay();

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
    navigateWithDelay("/quiz/2", NAVIGATION_DELAY);
  };

  return (
    <>
      <TitleWithDescription title={t("firstQuestion.title")} description={t("firstQuestion.description")} />
      <OptionList options={options} onClick={handleButtonClick} />
    </>
  );
};

export default FirstStep;
