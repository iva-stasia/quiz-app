import { useTranslation } from "react-i18next";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";

import { NAVIGATION_DELAY } from "../../constants/common";
import useNavigateWithDelay from "../../hooks/navigate-with-delay";
import { userService } from "../../services/user-service";
import getOptions from "../../utils/get-options";

const SecondStep = () => {
  const { t } = useTranslation();
  const navigateWithDelay = useNavigateWithDelay();

  const options = getOptions(t, "question2");

  const handleButtonClick = (value) => {
    const stepData = {
      order: "2",
      title: t("secondQuestion.title"),
      type: "single-select-image",
      answer: value.text,
    };

    userService.updateUserData("question2", stepData);
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
