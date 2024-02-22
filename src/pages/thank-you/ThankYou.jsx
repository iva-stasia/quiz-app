import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";

import { Container, DownloadButton, InnerContainer, Title } from "./ThankYou.styled";
import AppButton from "../../components/app-button/AppButton";

import checkmarkIcon from "../../assets/icons/checkmark.png";
import { headers } from "../../constants/csv-headers";
import { getFullUserData } from "../../utils/get-full-user-data";

const ThankYou = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const data = getFullUserData();

  console.log(data);

  const handleAppButtonClick = () => {
    localStorage.clear();
    navigate("/quiz/1");
  };

  return (
    <Container>
      <InnerContainer>
        <div>
          <Title>{t("thankYou.title")}</Title>
          <p>{t("thankYou.description")}</p>
        </div>
        <img src={checkmarkIcon} alt="Icon" width={118} />
      </InnerContainer>
      <CSVLink data={data} headers={headers} target="_blank" style={{}}>
        <DownloadButton type="button">{t("thankYou.downloadButtonTitle")}</DownloadButton>
      </CSVLink>
      <AppButton title={t("thankYou.buttonTitle")} onClick={handleAppButtonClick} />
    </Container>
  );
};

export default ThankYou;
