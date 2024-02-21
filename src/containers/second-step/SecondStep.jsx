import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";

import femaleEmoji from "../../assets/emoji/female.png";
import maleEmoji from "../../assets/emoji/male.png";
import otherEmoji from "../../assets/emoji/other.png";

const SecondStep = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const options = [
    { text: t("secondQuestion.options.female"), icon: femaleEmoji },
    { text: t("secondQuestion.options.male"), icon: maleEmoji },
    { text: t("secondQuestion.options.other"), icon: otherEmoji },
  ];

  const handleButtonClick = (value) => {
    const stepData = {
      order: "2",
      title: t("secondQuestion.title"),
      type: "single-select-image",
      answer: value.text,
    };

    localStorage.setItem("question2", JSON.stringify(stepData));
    navigate("/quiz/3");
  };

  return (
    <>
      <TitleWithDescription title={t("secondQuestion.title")} description={t("secondQuestion.description")} />
      <OptionList options={options} onClick={handleButtonClick} row />
    </>
  );
};

export default SecondStep;
