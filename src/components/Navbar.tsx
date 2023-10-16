import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaBook, FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";
import { fireworks } from 'tsParticles';

export default function NavBar() {

  const listDisplay = useBreakpointValue({ base: "none", lg: "flex" });
  const menuDisplay = useBreakpointValue({ base: "flex", lg: "none" });
  const navItems = [
    {
      label: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/sweep__ai",
    },
    {
      label: "Github",
      icon: <FaGithub />,
      link: "https://github.com/sweepai",
    },
    {
      label: "Discord",
      icon: <FaDiscord />,
      link: "https://discord.gg/sweep-ai",
    },
    {
      label: "Docs",
      icon: <FaBook />,
      link: "https://docs.sweep.dev/start",
    },
    {
      label: "Email",
      icon: <EmailIcon />,
      link: "mailto:team@sweep.dev",
    },
    {
      label: "Buy Sweep Pro",
      icon: <p>Buy Sweep Pro</p>,
      link: "https://buy.stripe.com/fZe03512h99u0AE6os",
    },
  ];

  // Set the options for the fireworks particles
  const fireworksOptions = {
    speed: 5,
    splitCount: 10,
  };

  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4}>
      <HStack spacing="10" justify="space-between">
        <Flex justify="space-between" flex="1">
          <HStack>
            <Button variant="ghost">
              <Image src={logo} alt="logo" width={10} borderRadius={12} />
              Sweep AI
            </Button>
          </HStack>
          <ButtonGroup variant="link" display={listDisplay}>
            {navItems.map((item) => (
              <IconButton
                key={item.label}
                icon={item.icon}
                variant="ghost"
                aria-label={item.label}
                onClick={() => {
                  window.open(item.link, "_blank");
                }}
                px={2}
              />
            ))}
          </ButtonGroup>
          <Menu>
            <IconButton
              key={"Sweep Pro"}
              icon={<p>Sweep Pro</p>}
              variant="ghost"
              aria-label={"Sweep Pro"}
              onClick={() => {
                window.open("https://buy.stripe.com/fZe03512h99u0AE6os", "_blank");
            
                // Create a new instance of the fireworks module
                const fireworksInstance = new fireworks();
            
                // Initialize the fireworks module with the options
                fireworksInstance.init(fireworksOptions);
            
                // Start the fireworks animation
                fireworksInstance.play();
              }}
              px={2}
              display={menuDisplay}
            />
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
              display={menuDisplay}
            />
            <MenuList
              backgroundColor="#333"
            >
              {navItems.map((item) => (
                <MenuItem backgroundColor="#333">
                  {item.label}
                  {
                    item.label !== "Buy Sweep Pro" &&
                    <IconButton
                      key={item.label}
                      icon={item.icon}
                      variant="ghost"
                      aria-label={item.label}
                      onClick={() => {
                        window.open(item.link, "_blank");
                      }}
                    />
                  }
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
}

