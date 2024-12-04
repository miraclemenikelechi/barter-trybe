/**
 * Formats a value as money or a plain number.
 *
 * @param {boolean} isMoney - Whether to format the value as money.
 * @param {number} value - The value to be formatted.
 * @returns {string} The formatted value.
 */
export function formatValue(isMoney: boolean, value: number): string {
    // return isMoney
    //     ? String.fromCharCode(8358) +
    //           value.toLocaleString("en-NG", {
    //               currency: "NGN",
    //               style: "currency",
    //           })
    //     : value.toLocaleString();

    return isMoney
        ? value.toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
        })
        : value.toLocaleString();
}
