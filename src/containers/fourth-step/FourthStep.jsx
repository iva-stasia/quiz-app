import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";
import { Highlight } from "./FourthStep.styled";
import AppButton from "../../components/app-button/AppButton";
import useNavigateWithDelay from "../../hooks/navigate-with-delay";
import { NAVIGATION_DELAY } from "../../constants/common";

const FourthStep = () => {
  const { t } = useTranslation();
  const navigateWithDelay = useNavigateWithDelay();
  const [checked, setChecked] = useState([]);
  const [isStepConfirm, setIsStepConfirm] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("question4"));
    if (!userData || !userData.answer) return;
    setChecked(userData.answer.split(","));
  }, []);

  useEffect(() => {
    const stepData = {
      order: "4",
      title: `${t("fourthQuestion.title.start")} ${t("fourthQuestion.title.wordToHighlight")} ${t(
        "fourthQuestion.title.end"
      )}`,
      type: "multiple-select",
      answer: [checked].join(", "),
    };

    localStorage.setItem("question4", JSON.stringify(stepData));
  }, [checked]);

  const options = [
    { text: t("fourthQuestion.options.lackOfLogic") },
    { text: t("fourthQuestion.options.slowSpeed") },
    { text: t("fourthQuestion.options.lackOfHumor") },
    { text: t("fourthQuestion.options.wayTooEnergeticEnding") },
  ];

  const handleCheckboxClick = (value) => {
    const valueInChecked = checked.find((option) => option === value.text);

    if (!valueInChecked) {
      setChecked((prev) => [...prev, value.text]);
    } else {
      setChecked((prev) => [...prev.filter((checked) => checked !== value.text)]);
    }
  };

  const handleAppButtonClick = () => {
    setIsStepConfirm(true);
    navigateWithDelay("/quiz/5", NAVIGATION_DELAY);
  };

  const Title = () => {
    return (
      <span>
        {t("fourthQuestion.title.start")} <Highlight>{t("fourthQuestion.title.wordToHighlight")}</Highlight>{" "}
        {t("fourthQuestion.title.end")}
      </span>
    );
  };

  return (
    <>
      <TitleWithDescription title={<Title />} />
      <OptionList
        options={options}
        multiselect
        onClick={handleCheckboxClick}
        checked={checked}
        isStepConfirm={isStepConfirm}
      />
      <AppButton
        onClick={handleAppButtonClick}
        title={t("fourthQuestion.buttonTitle")}
        disabled={checked.length === 0}
      />
    </>
  );
};

export default FourthStep;
