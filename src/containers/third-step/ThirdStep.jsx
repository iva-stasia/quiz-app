import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";

const ThirdStep = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    navigate("/quiz/4");
  };

  return (
    <>
      <TitleWithDescription title={t("thirdQuestion.title")} />
      <OptionList options={options} onClick={handleButtonClick} />
    </>
  );
};

export default ThirdStep;
