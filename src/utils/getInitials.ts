/**
 * Function to get the initials of a name
 * @param name - The name for which to get the initials
 * @returns The initials of the name
 */
export function getInitials(name: string): string {
    const words = name.split(' ');
    let initials = '';
    if (words.length === 1) {
        initials = words[0][0];
    } else {
        initials = words[0][0] + words[words.length - 1][0];
    }
    return initials.toUpperCase();
}
