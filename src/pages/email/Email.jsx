import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import Loader from "../../components/loader/Loader";
import TitleWithDescription from "../../components/title-with-description/TitleWithDescription";
import AppInput from "../../components/app-input/AppInput";
import AppButton from "../../components/app-button/AppButton";
import { AgreementContainer, Container, InnerContainer, LinkTitle } from "./Email.styled";
import { emailValidation } from "../../utils/validations";

const Email = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [percentage, setPercentage] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("question6"));
    if (!userData) return;
    setValue(userData.answer);
  }, []);

  useEffect(() => {
    const totalDuration = 5000;
    const intervalDuration = totalDuration / 100;

    const intervalId = setInterval(() => {
      if (percentage < 100) {
        setPercentage((prevPercentage) => prevPercentage + 1);
      } else {
        clearInterval(intervalId);
        setShowLoader(false);
      }
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [percentage]);

  const handleAppButtonClick = () => {
    const stepData = {
      order: "6",
      title: t("email.title"),
      type: "email",
      answer: value,
    };

    localStorage.setItem("question6", JSON.stringify(stepData));
    navigate("/thank-you");
  };

  const handleInputChange = (value) => {
    setValue(value);

    if (error) handleInputBlur();
  };

  const handleInputBlur = () => {
    const emailError = emailValidation(value);
    if (emailError) {
      setError(t(emailError));
    } else {
      setError("");
    }
  };

  const Agreement = () => {
    return (
      <AgreementContainer>
        <span>{t("email.agreement.byContinuing")}</span>{" "}
        <Link to="#">
          <LinkTitle>{t("email.agreement.privacyPolicy")}</LinkTitle>
        </Link>{" "}
        <span>{t("email.agreement.and")}</span>{" "}
        <Link to="#">
          <LinkTitle>{t("email.agreement.termOfUse")}</LinkTitle>
        </Link>
      </AgreementContainer>
    );
  };

  return showLoader ? (
    <Loader percentage={percentage} description={t("loader.description")} />
  ) : (
    <Container>
      <InnerContainer>
        <TitleWithDescription title={t("email.title")} description={t("email.description")} />
        <AppInput
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={t("email.inputPlaceholder")}
          error={error}
        />
        <Agreement />
      </InnerContainer>
      <AppButton title={t("email.buttonTitle")} onClick={handleAppButtonClick} disabled={!value || error} />
    </Container>
  );
};

export default Email;
