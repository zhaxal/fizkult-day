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
    ["heading.small"]: {
      lineHeight: "50px",
      color: "#222220",
      fontSize: "64px",
      textTransform: "uppercase",
      fontFamily: "Mossport",
    },
    body: {
      color: "#434B53",
      fontSize: "24px",
      fontFamily: "Gotham Pro Regular",
    },
    ["body.bold"]: {
      color: "#434B53",
      fontSize: "24px",
      fontFamily: "Gotham Pro Medium",
    },
    date: {
      fontSize: 11,
      fontFamily: "Gotham Pro Medium",
      color: "#2E363E",
      backgroundColor: "#F2F6FA",
      borderRadius: 5,
      py: "10px",
      px: "18px",
    },
  },
};
