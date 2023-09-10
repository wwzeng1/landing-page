import { Box } from "@chakra-ui/react";

function getInitials(name: string) {
    const parts = name.split(' ');
    return parts[0][0] + parts[parts.length - 1][0];
}

export default function User({ children, name, ...props }: any) {
    const initials = getInitials(name);
    return (
        <Box rounded="full" minW="3rem" w="3rem" h="3rem" display="flex" justifyContent="center" alignItems="center" color="purple.300" borderColor="purple.300" borderWidth={1} p={1} {...props}>
            {initials}
        </Box>
    );
}

