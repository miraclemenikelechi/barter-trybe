export function isActiveLink(isActive: boolean): string {
    return isActive
        ? `bg-[var(--black--100)] text-[var(--white--100)]`
        : `bg-[var(--white--100)] text-[var(--black--100)]`;
}
