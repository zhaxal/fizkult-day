import { Box } from "@chakra-ui/react";

const Divider = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(/images/divider.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "90px",
        py: 8,
        mb: "48px",
      }}
    />
  );
};

export default Divider;
