import { Box } from "@chakra-ui/react";

type UserProps = {
    name: string;
}

export default function User({ name, ...props }: UserProps) {
    const getInitials = (name: string) => {
        let initials = name.split(' ').map((n: string)=>n[0]).join('');
        return initials.toUpperCase();
    }

    return (
        <Box rounded="full" minW="3rem" w="3rem" h="3rem" display="flex" justifyContent="center" alignItems="center" color="purple.300" borderColor="purple.300" borderWidth={1} p={1} {...props}>
            {getInitials(name)}
        </Box>
    );
}

