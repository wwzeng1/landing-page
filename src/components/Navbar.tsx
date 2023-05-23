import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaStripeS, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

export default function NavBar() {
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
              icon={<FaStripeS />}
              aria-label="Stripe"
              onClick={() => {
                document.location.href =
                  "https://buy.stripe.com/bIY5npdP3etO2IMfYY";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<FaTwitter />}
              aria-label="Twitter"
              onClick={() => {
                document.location.href = "https://twitter.com/sweep__ai";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<FaGithub />}
              aria-label="Github"
              onClick={() => {
                document.location.href = "https://github.com/sweepai";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<FaDiscord />}
              aria-label="Discord"
              onClick={() => {
                document.location.href = "https://discord.gg/j8XxQmpHEF";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<EmailIcon />}
              aria-label="Email"
              onClick={() => {
                document.location.href = "mailto:team@sweep.dev";
              }}
            />
          </ButtonGroup>
        </Flex>
      </HStack>
    </Box>
  );
}
