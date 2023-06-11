import { Box, Link, Stack } from "@chakra-ui/react";
import YCLogo from "../assets/yc.webp";


export default function Footer() {
  return (
    <Box as="footer" py={4} bg="#0e1018">
      <Stack direction="row" spacing={4} align="center" justify="center" fontSize={"sm"}>
        <Link href="https://github.com/sweepai">Github</Link>
        <Link href="https://discord.gg/j8XxQmpHEF">Discord</Link>
        <Link href="https://docs.sweep.dev/start">Docs</Link>
        <Link href="https://buy.stripe.com/7sI1793ap5Xi3MQ001">Sweep Pro</Link>

        <Link href="https://ycombinator.com/companies/sweep" target="_blank" rel="noopener noreferrer" display="inline-flex" alignItems="center">
            Backed by <img src={YCLogo} alt="Y Combinator" style={{marginLeft: "10px"}} height="10px" />
        </Link>
      </Stack>
    </Box>
  );
};


