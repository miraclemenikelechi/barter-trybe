/**
 * Truncate an email address for display.
 * Keeps the first part of the username and domain, obfuscating the rest.
 *
 * @param email - The email address to truncate.
 * @param maxLength - Maximum length for the username and domain before truncation.
 * @returns Truncated email string.
 */
export function truncateEmail(email: string, maxLength: number = 3): string {
    if (!email.includes("@")) {
        throw new Error("Invalid email format");
    }

    const [username, domain] = email.split("@");
    const [domainName, domainExtension] = domain.split(".");

    const truncatedUsername =
        username.length > maxLength
            ? `${username.slice(0, maxLength)}***`
            : username;

    const truncatedDomainName =
        domainName.length > maxLength
            ? `${domainName.slice(0, maxLength)}***`
            : domainName;

    return `${truncatedUsername}@${truncatedDomainName}.${domainExtension}`;
}
