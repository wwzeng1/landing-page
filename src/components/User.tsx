import { Box } from "@chakra-ui/react";

export default function User({ initials, ...props }: any) {
  return (
    <Box
      rounded="full"
      minW="3rem"
      w="3rem"
      h="3rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="purple.300"
      borderColor="purple.300"
      borderWidth={1}
      p={1}
      {...props}
    >
      {initials}
    </Box>
  );
}
