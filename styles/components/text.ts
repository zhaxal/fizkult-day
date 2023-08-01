import { CSSObject } from "@chakra-ui/react";

export const Text: CSSObject = {
  variants: {
    heading: {
      lineHeight: "60px",
      color: "#FFFFFF",
      fontSize: "64px",
      textTransform: "uppercase",
      fontFamily: "Mossport",
    },
    ["heading.blue"]: {
      lineHeight: "30%",
      fontSize: "64px",
      color: "#00A3D3",
      textTransform: "uppercase",
      fontFamily: "Mossport",
    },
    ["heading.blue.mobile"]: {
      lineHeight: "30%",
      fontSize: "32px",
      color: "#00A3D3",
      textTransform: "uppercase",
      fontFamily: "Mossport",
    },
    ["heading.mobile"]: {
      lineHeight: "30px",
      color: "#FFFFFF",
      fontSize: "32px",
      textTransform: "uppercase",
      fontFamily: "Mossport",
    },
    ["heading.mobile.performance"]: {
      lineHeight: "30px",
      color: "#00ACEF",
      fontSize: "32px",
      textTransform: "uppercase",
      fontFamily: "Mossport",
    },
    ["heading.small"]: {
      lineHeight: "50px",
      color: "#222220",
      fontSize: "64px",
      textTransform: "uppercase",
      fontFamily: "Mossport",
    },
    ["heading.small.mobile"]: {
      lineHeight: "32px",
      color: "#222220",
      fontSize: "32px",
      textTransform: "uppercase",
      fontFamily: "Mossport",
    },
    body: {
      color: "#434B53",
      fontSize: "24px",
      fontFamily: "Gotham Pro Regular",
      lineHeight: "140%",
    },
    ["body.mobile"]: {
      color: "#434B53",
      fontSize: "16px",
      fontFamily: "Gotham Pro Regular",
      lineHeight: "150%",
    },
    ["body.bold"]: {
      color: "#434B53",
      fontSize: "24px",
      fontFamily: "Gotham Pro Medium",
      lineHeight: "140%",
    },
    ["body.bold.mobile"]: {
      color: "#434B53",
      fontSize: "16px",
      fontFamily: "Gotham Pro Medium",
      lineHeight: "150%",
    },
    date: {
      textTransform: "uppercase",
      fontSize: "11px",
      fontFamily: "Gotham Pro Medium",
      color: "#2E363E",
      borderRadius: 5,
      py: "10px",
      px: "18px",
    },
  },
};
