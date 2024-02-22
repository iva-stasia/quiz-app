import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import AppButton from "../../components/app-button/AppButton";
import BubbleList from "../../components/bubble-list/BubbleList";
import { PaddingContainer } from "./FifthStep.styled";

import werewolfEmoji from "../../assets/emoji/werewolf.png";
import actionEmoji from "../../assets/emoji/action.png";
import billionaireEmoji from "../../assets/emoji/billionaire.png";
import romanceEmoji from "../../assets/emoji/romance.png";
import royalEmoji from "../../assets/emoji/royal.png";
import youngEmoji from "../../assets/emoji/young.png";
import badBoyEmoji from "../../assets/emoji/bad-boy.png";
import { NAVIGATION_DELAY } from "../../constants/common";
import useNavigateWithDelay from "../../hooks/navigate-with-delay";

const FifthStep = () => {
  const { t } = useTranslation();
  const navigateWithDelay = useNavigateWithDelay();
  const [checked, setChecked] = useState([]);
  const [isStepConfirm, setIsStepConfirm] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("question5"));
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

    localStorage.setItem("question5", JSON.stringify(stepData));
  }, [checked]);

  const options = [
    { text: t("fifthQuestion.options.werewolf"), icon: werewolfEmoji },
    { text: t("fifthQuestion.options.action"), icon: actionEmoji },
    { text: t("fifthQuestion.options.royalObsession"), icon: royalEmoji },
    { text: t("fifthQuestion.options.billionaire"), icon: billionaireEmoji },
    { text: t("fifthQuestion.options.romance"), icon: romanceEmoji },
    { text: t("fifthQuestion.options.youngAdult"), icon: youngEmoji },
    { text: t("fifthQuestion.options.badBoy"), icon: badBoyEmoji },
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
