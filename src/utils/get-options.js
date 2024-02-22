import femaleEmoji from "../assets/emoji/female.png";
import maleEmoji from "../assets/emoji/male.png";
import otherEmoji from "../assets/emoji/other.png";
import werewolfEmoji from "../assets/emoji/werewolf.png";
import actionEmoji from "../assets/emoji/action.png";
import billionaireEmoji from "../assets/emoji/billionaire.png";
import romanceEmoji from "../assets/emoji/romance.png";
import royalEmoji from "../assets/emoji/royal.png";
import youngEmoji from "../assets/emoji/young.png";
import badBoyEmoji from "../assets/emoji/bad-boy.png";
import castleEmoji from "../assets/emoji/castle.png";
import catEmoji from "../assets/emoji/cat.png";
import fairyEmoji from "../assets/emoji/fairy.png";
import gunEmoji from "../assets/emoji/gun.png";
import telescopeEmoji from "../assets/emoji/telescope.png";
import zombieEmoji from "../assets/emoji/zombie.png";
import crystalBallEmoji from "../assets/emoji/crystal-ball.png";

const getOptions = (t, question, variant = "variant1") => {
  const options = {
    question1: {
      variant1: [
        { text: t("firstQuestion.options.english"), code: "en" },
        { text: t("firstQuestion.options.french"), code: "fr" },
        { text: t("firstQuestion.options.german"), code: "de" },
        { text: t("firstQuestion.options.spanish"), code: "es" },
      ],
    },
    question2: {
      variant1: [
        { text: t("secondQuestion.options.female"), icon: femaleEmoji },
        { text: t("secondQuestion.options.male"), icon: maleEmoji },
        { text: t("secondQuestion.options.other"), icon: otherEmoji },
      ],
    },
    question3: {
      variant1: [
        { text: t("thirdQuestion.options.18") },
        { text: t("thirdQuestion.options.30") },
        { text: t("thirdQuestion.options.40") },
        { text: t("thirdQuestion.options.50") },
      ],
    },
    question4: {
      variant1: [
        { text: t("fourthQuestion.options.lackOfLogic") },
        { text: t("fourthQuestion.options.slowSpeed") },
        { text: t("fourthQuestion.options.lackOfHumor") },
        { text: t("fourthQuestion.options.wayTooEnergeticEnding") },
      ],
    },
    question5: {
      variant1: [
        { text: t("fifthQuestion.options.variant1.werewolf"), icon: werewolfEmoji },
        { text: t("fifthQuestion.options.variant1.action"), icon: actionEmoji },
        { text: t("fifthQuestion.options.variant1.royalObsession"), icon: royalEmoji },
        { text: t("fifthQuestion.options.variant1.billionaire"), icon: billionaireEmoji },
        { text: t("fifthQuestion.options.variant1.romance"), icon: romanceEmoji },
        { text: t("fifthQuestion.options.variant1.youngAdult"), icon: youngEmoji },
        { text: t("fifthQuestion.options.variant1.badBoy"), icon: badBoyEmoji },
      ],
      variant2: [
        { text: t("fifthQuestion.options.variant2.mystery"), icon: crystalBallEmoji },
        { text: t("fifthQuestion.options.variant2.fantasy"), icon: fairyEmoji },
        { text: t("fifthQuestion.options.variant2.scienceFiction"), icon: telescopeEmoji },
        { text: t("fifthQuestion.options.variant2.historicalFiction"), icon: castleEmoji },
        { text: t("fifthQuestion.options.variant2.thriller"), icon: gunEmoji },
        { text: t("fifthQuestion.options.variant2.horror"), icon: zombieEmoji },
        { text: t("fifthQuestion.options.variant2.comedy"), icon: catEmoji },
      ],
    },
  };

  return options[question][variant];
};

export default getOptions;
