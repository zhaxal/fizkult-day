import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { AdminProvider } from "@contexts/admin-context";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AdminProvider>
        <Head>
          <meta
            name="description"
            content="День физкультурника 2023 в Лужниках"
          />
          <meta property="og:title" content="День физкультурника 2023" />
          <meta
            property="og:description"
            content="Настоящий праздник спорта состоится 12 августа на территории Южного спортивного центра ОК «Лужники»"
          />
          <meta property="og:url" content="https://деньфизкультурника2022.рф" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/DF.png" />

          <title>День физкультурника 2023</title>
        </Head>

        <Script
          id="id"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
         
            ym(94503335, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true,
                 webvisor:true
            });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/94503335"
              alt="Description"
              style={{
                position: "absolute",
                left: "-9999px",
              }}
            />
          </div>
        </noscript>

        <Box
          sx={{ display: "none" }}
          itemScope
          itemType="https://schema.org/Organization"
        >
          <span itemProp="name">День Физкультурника 2023</span>
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
            <Image src="/images/df1.jpg" itemProp="contentUrl" layout="fill" />
          </div>
        </Box>
        <Component {...pageProps} />
      </AdminProvider>
    </ChakraProvider>
  );
}

export default MyApp;
