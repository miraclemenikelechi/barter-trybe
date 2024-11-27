export function formatValue(isMoney: boolean, value: number) {
    return isMoney
        ? String.fromCharCode(8358) + value.toLocaleString("en-NG")
        : value.toLocaleString();
}
