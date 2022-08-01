import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { AdminProvider } from "@contexts/admin-context";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AdminProvider>
        <Head>
          <meta
            name="description"
            content="День физкультурника 2022 в Лужниках"
          />
          <meta property="og:title" content="День физкультурника 2022" />
          <meta
            property="og:description"
            content="Настоящий праздник спорта состоится 13 августа на фестивальной площади СК «Лужники"
          />
          <meta property="og:url" content="https://Деньфизкультурника2022.рф" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="туткартинка" />

          <title>День физкультурника 2022</title>
        </Head>

        <Script
          id="id"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(89793100, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
  `,
          }}
        />

        <Box
          sx={{ display: "none" }}
          itemScope
          itemType="https://schema.org/Organization"
        >
          <span itemProp="name">День Физкультурника 2022</span>
          <div
            itemProp="address"
            itemScope
            itemType="http://schema.org/PostalAddress"
          >
            Адрес:
            <span itemProp="streetAddress">
              Г. МОСКВА, улица Лужники, 24с1, Фестивальная площадь
            </span>
          </div>
          <span itemProp="email">info@fizkult.moscow.sport</span>
          <div itemScope itemType="http://schema.org/ImageObject">
            <img src="/images/df1.jpg" itemProp="contentUrl" />
          </div>
        </Box>
        <Component {...pageProps} />
      </AdminProvider>
    </ChakraProvider>
  );
}

export default MyApp;
