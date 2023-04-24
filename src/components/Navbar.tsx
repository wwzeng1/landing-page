import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Text,
  IconButton,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

export default () => {
  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4}>
      <HStack spacing="10" justify="space-between">
        <Flex justify="space-between" flex="1">
          <HStack>
            <Image src={logo} alt="logo" width={10} borderRadius={12} />
            <Button variant="ghost">Sweep AI</Button>
          </HStack>
          <ButtonGroup variant="link">
            <IconButton
              variant="ghost"
              icon={<FaTwitter />}
              aria-label="Open Menu"
              onClick={() => {
                document.location.href = "https://twitter.com/sweep__ai";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<FaGithub />}
              aria-label="Open Menu"
              onClick={() => {
                document.location.href = "https://github.com/sweepai";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<EmailIcon />}
              aria-label="Open Menu"
              onClick={() => {
                document.location.href = "mailto:team@sweep.dev";
              }}
            />
          </ButtonGroup>
        </Flex>
      </HStack>
    </Box>
  );
};
