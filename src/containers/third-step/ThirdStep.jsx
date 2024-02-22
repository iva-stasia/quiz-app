import { useTranslation } from "react-i18next";

import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import OptionList from "../../components/option-list/OptionList";
import useNavigateWithDelay from "../../hooks/navigate-with-delay";
import { NAVIGATION_DELAY } from "../../constants/common";
import { userService } from "../../services/user-service";
import getOptions from "../../utils/get-options";

const ThirdStep = () => {
  const { t } = useTranslation();
  const navigateWithDelay = useNavigateWithDelay();

  const options = getOptions(t, "question3");

  const handleButtonClick = (value) => {
    const stepData = {
      order: "3",
      title: t("thirdQuestion.title"),
      type: "single-select",
      answer: value.text,
    };

    userService.updateUserData("question3", stepData);
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
