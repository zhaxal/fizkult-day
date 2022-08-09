import { Stack, Spinner as Loading } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Loading />
    </Stack>
  );
};

export default Spinner;
