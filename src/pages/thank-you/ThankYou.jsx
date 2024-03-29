import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";

import { Container, DownloadButton, InnerContainer, Title } from "./ThankYou.styled";
import AppButton from "../../components/app-button/AppButton";

import checkmarkIcon from "../../assets/icons/checkmark.png";
import downloadIcon from "../../assets/icons/download.svg";
import { headers } from "../../constants/csv-headers";
import { userService } from "../../services/user-service";

const ThankYou = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const data = userService.getUserData();

  const handleAppButtonClick = () => {
    userService.deleteUserData();
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
        <DownloadButton type="button">
          <img src={downloadIcon} alt="Icon" />
          {t("thankYou.downloadButtonTitle")}
        </DownloadButton>
      </CSVLink>
      <AppButton title={t("thankYou.buttonTitle")} onClick={handleAppButtonClick} />
    </Container>
  );
};

export default ThankYou;
