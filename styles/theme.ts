import { extendTheme } from "@chakra-ui/react";
import { Text } from "./components/text";
import { Button } from "./components/button";

const theme = extendTheme({
  components: {
    Text,
    Button,
  },
});

export default theme;
