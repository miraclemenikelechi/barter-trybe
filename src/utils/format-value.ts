/**
 * Formats a value as money or a plain number.
 *
 * @param {boolean} isMoney - Whether to format the value as money.
 * @param {number} value - The value to be formatted.
 * @returns {string} The formatted value.
 *
 * @example
 * formatValue(true, 1000); // Returns "₦1,000"
 * formatValue(false, 1000); // Returns "1,000"
 */
export function formatValue(isMoney: boolean, value: number): string {
    return isMoney
        ? String.fromCharCode(8358) + value.toLocaleString("en-NG")
        : value.toLocaleString();
}
