import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import AppButton from "../../components/app-button/AppButton";
import BubbleList from "../../components/bubble-list/BubbleList";
import { PaddingContainer } from "./FifthStep.styled";

import { NAVIGATION_DELAY } from "../../constants/common";
import useNavigateWithDelay from "../../hooks/navigate-with-delay";
import { userService } from "../../services/user-service";
import getOptions from "../../utils/get-options";

const FifthStep = () => {
  const { t } = useTranslation();
  const navigateWithDelay = useNavigateWithDelay();
  const [checked, setChecked] = useState([]);
  const [isStepConfirm, setIsStepConfirm] = useState(false);

  useEffect(() => {
    const userData = userService.getUserDataByQuestion("question5");
    if (!userData || !userData.answer) return;
    setChecked(userData.answer.split(","));
  }, []);

  useEffect(() => {
    const stepData = {
      order: "5",
      title: t("fifthQuestion.title"),
      type: "bubble",
      answer: [checked].join(", "),
    };

    userService.updateUserData("question5", stepData);
  }, [checked]);

  const userAge = userService.getUserDataByQuestion("question3").answer;
  const optionsVariant = userAge === "18-29 years" || userAge === "30-39 years" ? "variant1" : "variant2";
  const options = getOptions(t, "question5", optionsVariant);

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
    navigateWithDelay("/email", NAVIGATION_DELAY);
  };

  return (
    <>
      <PaddingContainer>
        <TitleWithDescription title={t("fifthQuestion.title")} description={t("fifthQuestion.description")} />
      </PaddingContainer>
      <BubbleList options={options} onClick={handleCheckboxClick} checked={checked} isStepConfirm={isStepConfirm} />
      <PaddingContainer>
        <AppButton
          onClick={handleAppButtonClick}
          title={t("fifthQuestion.buttonTitle")}
          disabled={checked.length === 0}
        />
      </PaddingContainer>
    </>
  );
};

export default FifthStep;
