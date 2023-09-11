/**
 * Function to get the initials from a name
 * @param name - The name to get initials from
 * @returns The initials of the name
 */
const getInitials = (name: string): string => {
    return name.split(' ').map(word => word[0]).join('');
}

export default getInitials;
