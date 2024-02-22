import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";
import { Highlight } from "./FourthStep.styled";
import AppButton from "../../components/app-button/AppButton";

const FourthStep = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [checked, setChecked] = useState([]);

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
    navigate("/quiz/5");
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
      <OptionList options={options} multiselect onClick={handleCheckboxClick} checked={checked} />
      <AppButton
        onClick={handleAppButtonClick}
        title={t("fourthQuestion.buttonTitle")}
        disabled={checked.length === 0}
      />
    </>
  );
};

export default FourthStep;
