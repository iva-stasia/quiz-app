import { useTranslation } from "react-i18next";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";
import useNavigateWithDelay from "../../hooks/navigate-with-delay";
import { NAVIGATION_DELAY } from "../../constants/common";
import { userService } from "../../services/user-service";
import getOptions from "../../utils/get-options";

const FirstStep = () => {
  const { t, i18n } = useTranslation();
  const navigateWithDelay = useNavigateWithDelay();

  const options = getOptions(t, "question1");

  const handleButtonClick = (value) => {
    const stepData = {
      order: "1",
      title: t("firstQuestion.title"),
      type: "single-select",
      answer: value.text,
    };

    userService.updateUserData("question1", stepData);
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
