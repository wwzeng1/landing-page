import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface UserProps {
  name?: string;
  children?: ReactNode;
}

export default function User({ name }: UserProps) {
  const initials = name
    ? name
        .split(" ")
        .map((part) => part[0])
        .join("")
    : "";
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
    >
      <Text color="white">{initials}</Text>
    </Box>
  );
}
