import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link, Text } from "@chakra-ui/react";

type ExternalLinkWithTextProps = {
    children: React.ReactNode,
    href: string
}

const ExternalLinkWithText = ({ children, href }: ExternalLinkWithTextProps) : JSX.Element  => {
    return (
        <Link href={href} isExternal>
            {children}&nbsp;<ExternalLinkIcon />
        </Link>
    );
}

type TestimonialProps = {
    children: React.ReactNode,
    name: string,
    company: string,
    href: string
}

const Testimonial = ({ children, name, company, href }: TestimonialProps) : JSX.Element => {
    return (
        <Box 
            overflow="hidden" 
            p={4} 
            mb={4} 
            width={{base: "100%", md: "30%"}}
        >
            <Text 
                fontSize="lg" 
                mb={8}
            >
                {children}
            </Text>
            <Text fontWeight="bold" mb={2}>{name}</Text>
            <ExternalLinkWithText href={href}>{company}</ExternalLinkWithText>
        </Box>
    );
}

export default function Testimonials() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Box m={8} mt={32} mb={64} width={{base: "100%", md: "80%"}}>
                <Text fontSize="5xl" fontWeight="bold" mb={16} textAlign="center">What our users are saying</Text>
                <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                    <Testimonial name="Jeremy Evans" company="savvy" href="https://trysavvy.com/">
                        Holy crap, I'm <b>seriously impressed</b> 🤯. Other than one issue it seems to be <b>word-perfect</b>. Exactly how I'd write it, and it understands all our <b>company-specific concepts</b>. Very impressive! 🙌
                    </Testimonial>
                    <Testimonial name="Eduardo Reis" company="Plug 'n Plai" href="https://plugnplai.com">
                        ✨Wow! Just found sweep.dev from <ExternalLinkWithText href="https://twitter.com/wwzeng1">@wwzeng1</ExternalLinkWithText> <ExternalLinkWithText href="https://twitter.com/KevinLu45010771">@KevinLu45010771</ExternalLinkWithText>. It wrote these two PRs for <ExternalLinkWithText href="https://github.com/edreisMD/plugnplai/pull/91">edreisMD/plugnplai#91</ExternalLinkWithText> <ExternalLinkWithText href="https://github.com/edreisMD/plugnplai/pull/75">edreisMD/plugnplai#75</ExternalLinkWithText>
                        <b>Total lifesaver</b> 🙌. Sweep just saved me <b>6 hours of work</b>.
                    </Testimonial>
                    <Testimonial name="Kunal Gupta" company="withfriends" href="https://withfriends.co/">
                        Using this, it’s pretty cool. It’s a little bit like having a junior intern, which doesn’t sound like a lot at first, but you can run like <b>100 junior interns</b> at once and they can cover a <b>lot of ground</b> in parallel.
                    </Testimonial>
                </Box>
            </Box>
        </Box>
    );
}
