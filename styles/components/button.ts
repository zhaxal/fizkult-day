import { CSSObject } from "@chakra-ui/react";

export const Button: CSSObject = {
  variants: {
    register: {
      backgroundColor: "#E42975",
      borderRadius: "8px",
      color: "white",
      padding: "30px 50px",
      height: "100%",
      fontSize: "24px",
      fontFamily: "Gotham Pro Regular",
      _hover: {
        opacity: 0.8,
      },
      _active: {
        opacity: 1,
      },
    },
    ["register.mobile"]: {
      backgroundColor: "#E42975",
      borderRadius: "8px",
      color: "white",
      padding: "30px 50px",
      height: "100%",
      fontSize: "16",
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
        padding: "34px 47px",
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

["festivale.register"]: {
  backgroundColor: "#0087BE",
    borderRadius: "8px",
      padding: "30px 50px",
        _hover: {
    opacity: 0.8,
      },
  _active: {
    opacity: 1,
      },
},
  },
};
