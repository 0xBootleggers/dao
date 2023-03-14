import { defaultDarkTheme } from "@daohaus/ui";

const greyBoots = {
  step1: "#fcfcfc",
  step2: "#f8f8f8",
  step3: "#f3f3f3",
  step4: "#ededed",
  step5: "#e8e8e8",
  step6: "#e2e2e2",
  step7: "#dbdbdb",
  step8: "#c7c7c7",
  step9: "#8f8f8f",
  step10: "#858585",
  step11: "#6f6f6f",
  step12: "#171717",
};

export const BOOTLEGGERS_THEME = {
  themeName: "bootleggers",
  rootBgColor: "#000000",
  rootFontColor: "white",
  transparent: "transparent",
  font: {
    family: {
      body: `'Alegreya', serif`,
      data: `'Space Mono', monospace`,
    },
  },
  button: {
    ...defaultDarkTheme.button,
    primary: {
      ...defaultDarkTheme.button.primary,
    },
    secondary: {
      ...defaultDarkTheme.button.secondary,
      text: "pink",
    },
  },
  primary: {
    step1: "white",
    step2: "white",
    step3: "white",
    step4: "white",
    step5: "white",
    step6: "white",
    step7: "white",
    step8: "white",
    step9: "white",
    step10: "white",
    step11: "white",
    step12: "white",
  },
  secondary: {
    ...defaultDarkTheme.secondary,
    step2: "#3d3d3d",
    step5: greyBoots.step5,
    step9: "white",
    step3: greyBoots.step11,
    step10: greyBoots.step10,
    step11: greyBoots.step1,
  },
};

defaultDarkTheme;
