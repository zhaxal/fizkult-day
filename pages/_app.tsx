import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { AdminProvider } from "@contexts/admin-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AdminProvider>
        <Component {...pageProps} />
      </AdminProvider>
    </ChakraProvider>
  );
}

export default MyApp;
