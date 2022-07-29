import { CSSObject } from "@chakra-ui/react";

export const Button: CSSObject = {
  variants: {
    register: {
      backgroundColor: "#FFB600",
      borderRadius: "8px",
      padding: "30px 50px",
      height: "100%",
      fontSize: "18px",
      fontFamily: "Gotham Pro Regular",
      _hover: {
        opacity: 0.8,
      },
      _active: {
        opacity: 1,
      },
    },
    ["competition.join"]: {
      width: "255px",
      backgroundColor: "#E93734",
      borderRadius: "8px",
      padding: "30px 50px",
      height: "100%",
      color: "#FFFFFF",
      fontSize: "18px",
      fontFamily: "Gotham Pro Regular",
      _hover: {
        opacity: 0.8,
      },
      _active: {
        opacity: 1,
      },
    },
    ["competition.watch"]: {
      width: "255px",
      backgroundColor: "#FFFFFF",
      borderRadius: "8px",
      padding: "30px 50px",
      height: "100%",
      color: "#E93734",
      fontSize: "18px",
      fontFamily: "Gotham Pro Regular",
      _hover: {
        opacity: 0.8,
      },
      _active: {
        opacity: 1,
      },
    },

    ["section.register"]: {
      backgroundColor: "#FFB600",
      borderRadius: "8px",
      padding: "30px 50px",
      fontSize: "18px",
      fontFamily: "Gotham Pro Regular",
      _hover: {
        opacity: 0.8,
      },
      _active: {
        opacity: 1,
      },
    },
  },
};
