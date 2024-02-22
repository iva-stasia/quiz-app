import { useTranslation } from "react-i18next";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";

import femaleEmoji from "../../assets/emoji/female.png";
import maleEmoji from "../../assets/emoji/male.png";
import otherEmoji from "../../assets/emoji/other.png";
import { NAVIGATION_DELAY } from "../../constants/common";
import useNavigateWithDelay from "../../hooks/navigate-with-delay";

const SecondStep = () => {
  const { t } = useTranslation();
  const navigateWithDelay = useNavigateWithDelay();

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
    navigateWithDelay("/quiz/3", NAVIGATION_DELAY);
  };

  return (
    <>
      <TitleWithDescription title={t("secondQuestion.title")} description={t("secondQuestion.description")} />
      <OptionList options={options} onClick={handleButtonClick} row />
    </>
  );
};

export default SecondStep;
