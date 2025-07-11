import { Box, Container, Divider, Image, Stack, Text } from "@chakra-ui/react";
import Script from "next/script";
import React from "react";
import Heading from "./Heading";

const Footer = () => {
  return (
    <>
      <Heading text="где нас найти?" />

      <Container mb="25px" maxW="1110px">
        <Stack spacing="190px" direction="row">
          <Stack ml="70px" mt="80px" spacing="30px">
            <Box>
              <Text variant="body.bold">Эл. почта</Text>
              <Text variant="body">
                <a href="mailto:df2022@yandex.ru">df2022@yandex.ru</a>
              </Text>
            </Box>

            <Box>
              <Text variant="body.bold">Место проведения</Text>
              <Text variant="body">СК “ЛУЖНИКИ”</Text>
              <Text variant="body">Фестивальная площадь</Text>
            </Box>
          </Stack>

          <Box width="100%" height="490px" bg="grey">
            <iframe
              id="map_942407939"
              frameBorder="0"
              width="100%"
              height="490px"
              sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
            ></iframe>
            <Script
              id="2gis-map"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                (function (e, t) {
                  var r = document.getElementById(e);
                  r.contentWindow.document.open(),
                    r.contentWindow.document.write(atob(t)),
                    r.contentWindow.document.close();
                })(
                  "map_942407939",
                  "PGJvZHk+PHN0eWxlPgogICAgICAgIGh0bWwsIGJvZHkgewogICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgfQogICAgICAgIGh0bWwsIGJvZHksICNtYXAgewogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIH0KICAgICAgICAuYnVsbGV0LW1hcmtlciB7CiAgICAgICAgICAgIHdpZHRoOiAyMHB4OwogICAgICAgICAgICBoZWlnaHQ6IDIwcHg7CiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7CiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTsKICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzAyODFmMjsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICAgIH0KICAgICAgICAucGVybWFuZW50LXRvb2x0aXAgewogICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lOwogICAgICAgICAgICBib3gtc2hhZG93OiBub25lOwogICAgICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4OwogICAgICAgICAgICBjb2xvcjogIzI2MjYyNjsKICAgICAgICB9CiAgICAgICAgLnBlcm1hbmVudC10b29sdGlwOmJlZm9yZSB7CiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7CiAgICAgICAgfQogICAgICAgIC5kZy1wb3B1cF9oaWRkZW5fdHJ1ZSB7CiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgIH0KICAgICAgICAubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtcG9wdXAgLmxlYWZsZXQtcG9wdXAtY2xvc2UtYnV0dG9uIHsKICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICByaWdodDogMDsKICAgICAgICAgICAgd2lkdGg6IDIwcHg7CiAgICAgICAgICAgIGhlaWdodDogMjBweDsKICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4OwogICAgICAgICAgICBsaW5lLWhlaWdodDogMTsKICAgICAgICB9CiAgICA8L3N0eWxlPjxkaXYgaWQ9Im1hcCI+PC9kaXY+PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIHNyYz0iaHR0cHM6Ly9tYXBzLmFwaS4yZ2lzLnJ1LzIuMC9sb2FkZXIuanM/cGtnPWZ1bGwmYW1wO3NraW49bGlnaHQiPjwvc2NyaXB0PjxzY3JpcHQ+KGZ1bmN0aW9uIChlKXt2YXIgdD1KU09OLnBhcnNlKGUpLHI9dC5vcmRlcmVkR2VvbWV0cmllcyxuPXQubWFwUG9zaXRpb24sYT10LmlzV2hlZWxab29tRW5hYmxlZDtmdW5jdGlvbiBvKGUpe3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoYXRvYihlKS5zcGxpdCgiIikubWFwKGZ1bmN0aW9uKGUpe3JldHVybiIlIisoIjAwIitlLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMil9KS5qb2luKCIiKSl9REcudGhlbihmdW5jdGlvbigpe3ZhciBlPURHLm1hcCgibWFwIix7Y2VudGVyOltuLmxhdCxuLmxvbl0sem9vbTpuLnpvb20sc2Nyb2xsV2hlZWxab29tOmEsem9vbUNvbnRyb2w6IWF9KTtERy5nZW9KU09OKHIse3N0eWxlOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbixhLG87cmV0dXJue2ZpbGxDb2xvcjpudWxsPT09KHQ9ZSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQucHJvcGVydGllcy5maWxsQ29sb3IsZmlsbE9wYWNpdHk6bnVsbD09PShyPWUpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLnByb3BlcnRpZXMuZmlsbE9wYWNpdHksY29sb3I6bnVsbD09PShuPWUpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLnByb3BlcnRpZXMuc3Ryb2tlQ29sb3Isd2VpZ2h0Om51bGw9PT0oYT1lKXx8dm9pZCAwPT09YT92b2lkIDA6YS5wcm9wZXJ0aWVzLnN0cm9rZVdpZHRoLG9wYWNpdHk6bnVsbD09PShvPWUpfHx2b2lkIDA9PT1vP3ZvaWQgMDpvLnByb3BlcnRpZXMuc3Ryb2tlT3BhY2l0eX19LHBvaW50VG9MYXllcjpmdW5jdGlvbihlLHQpe3JldHVybiJyYWRpdXMiaW4gZS5wcm9wZXJ0aWVzP0RHLmNpcmNsZSh0LGUucHJvcGVydGllcy5yYWRpdXMpOkRHLm1hcmtlcih0LHtpY29uOmZ1bmN0aW9uKGUpe3JldHVybiBERy5kaXZJY29uKHtodG1sOiI8ZGl2IGNsYXNzPSdidWxsZXQtbWFya2VyJyBzdHlsZT0nYm9yZGVyLWNvbG9yOiAiK2UrIjsnPjwvZGl2PiIsY2xhc3NOYW1lOiJvdmVycmlkZS1kZWZhdWx0IixpY29uU2l6ZTpbMjAsMjBdLGljb25BbmNob3I6WzEwLDEwXX0pfShlLnByb3BlcnRpZXMuY29sb3IpfSl9LG9uRWFjaEZlYXR1cmU6ZnVuY3Rpb24oZSx0KXtlLnByb3BlcnRpZXMuZGVzY3JpcHRpb24mJnQuYmluZFBvcHVwKG8oZS5wcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSx7Y2xvc2VCdXR0b246ITAsY2xvc2VPbkVzY2FwZUtleTohMH0pLGUucHJvcGVydGllcy50aXRsZSYmdC5iaW5kVG9vbHRpcChvKGUucHJvcGVydGllcy50aXRsZSkse3Blcm1hbmVudDohMCxvcGFjaXR5OjEsY2xhc3NOYW1lOiJwZXJtYW5lbnQtdG9vbHRpcCJ9KX19KS5hZGRUbyhlKX0pfSkoJ3sib3JkZXJlZEdlb21ldHJpZXMiOlt7InR5cGUiOiJGZWF0dXJlIiwicHJvcGVydGllcyI6eyJ0aXRsZSI6IiIsImRlc2NyaXB0aW9uIjoiIiwiY29sb3IiOiIjMDI4MWYyIiwiekluZGV4IjoxMDAwMDAwMDAwfSwiZ2VvbWV0cnkiOnsidHlwZSI6IlBvaW50IiwiY29vcmRpbmF0ZXMiOlszNy41NTE1NDMsNTUuNzE0NTkzXX0sImlkIjoxNDY2fV0sIm1hcFBvc2l0aW9uIjp7ImxhdCI6NTUuNzEzNTk4MzE4MTY5NzY1LCJsb24iOjM3LjU1MjI5OTQ5OTUxMTcyNiwiem9vbSI6MTV9LCJpc1doZWVsWm9vbUVuYWJsZWQiOnRydWV9Jyk8L3NjcmlwdD48c2NyaXB0IGFzeW5jPSIiIHR5cGU9InRleHQvamF2YXNjcmlwdCIgc3JjPSJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPVVBLTE1ODg2NjE2OC0xIj48L3NjcmlwdD48c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCI+KGZ1bmN0aW9uIChlKXtmdW5jdGlvbiB0KCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKX13aW5kb3cuZGF0YUxheWVyPXdpbmRvdy5kYXRhTGF5ZXJ8fFtdLHQoImpzIixuZXcgRGF0ZSksdCgiY29uZmlnIixlKSx3aW5kb3cuZ3RhZz10fSkoJ1VBLTE1ODg2NjE2OC0xJyk8L3NjcmlwdD48L2JvZHk+"
                );`,
              }}
            />
          </Box>
        </Stack>
      </Container>
      <Divider height="2px" orientation="horizontal" />

      <Container maxW="1110px">
        <Stack spacing="40px" height="90px" alignItems="center" direction="row">
          <Image height="50px" src="/images/department.svg" alt="department" />
          <Image height="50px" src="/images/mossport.svg" alt="mossport" />
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
