import { useTranslation } from "react-i18next";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";
import useNavigateWithDelay from "../../hooks/navigate-with-delay";
import { NAVIGATION_DELAY } from "../../constants/common";

const ThirdStep = () => {
  const { t } = useTranslation();
  const navigateWithDelay = useNavigateWithDelay();

  const options = [
    { text: t("thirdQuestion.options.18") },
    { text: t("thirdQuestion.options.30") },
    { text: t("thirdQuestion.options.40") },
    { text: t("thirdQuestion.options.50") },
  ];

  const handleButtonClick = (value) => {
    const stepData = {
      order: "3",
      title: t("thirdQuestion.title"),
      type: "single-select",
      answer: value.text,
    };

    localStorage.setItem("question3", JSON.stringify(stepData));
    navigateWithDelay("/quiz/4", NAVIGATION_DELAY);
  };

  return (
    <>
      <TitleWithDescription title={t("thirdQuestion.title")} />
      <OptionList options={options} onClick={handleButtonClick} />
    </>
  );
};

export default ThirdStep;
