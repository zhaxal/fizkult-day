import { Container, Stack, useBreakpointValue, VStack } from "@chakra-ui/react";
import Heading from "@components/ui/Heading";
import Spinner from "@components/ui/Spinner";
import { usePage } from "@contexts/page-context";
import PerformanceCard from "./PerformanceCard";
import PerformanceCardMobile from "./PerformanceCardMobile";

const Performances = () => {
  const variant = useBreakpointValue({ md: true });
  const { performances } = usePage();

  let mb: string;
  if (variant) {
    mb = "80px";
  } else {
    mb = "32px";
  }

  return (
    <>
      <Heading text="ПОКАЗАТЕЛЬНЫЕ ВЫСТУПЛЕНИЯ" isMobile={!variant} />
      <Container mb="48px" maxW="1110px">
        {variant ? (
          <Stack spacing="160px">
            {performances
              ? performances.map((perf, i) => {
                  return (
                    <PerformanceCard
                      key={i}
                      type={"performance"}
                      position={perf.position}
                      date={perf.date}
                      image={perf.image}
                      title={perf.title}
                      desc={perf.desc}
                    />
                  );
                })
              :    <Spinner />}
          </Stack>
        ) : (
          <VStack>
            {performances
              ? performances.map((perf, i) => {
                  return (
                    <PerformanceCardMobile
                      key={i}
                      type={"performance"}
                      position={perf.position}
                      date={perf.date}
                      image={perf.image}
                      title={perf.title}
                      desc={perf.desc}
                    />
                  );
                })
              : null}
          </VStack>
        )}
      </Container>
    </>
  );
};

export default Performances;
