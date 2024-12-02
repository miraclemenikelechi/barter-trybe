type ChartTickValuesProps<T> = {
    data: T[];
    key: keyof T;
    maxTicks?: number;
};

/**
 * Generate an array of tick values for charts based on the provided data.
 *
 * This function takes an array of data objects and a specified key to extract numeric values,
 * then calculates and returns an array of tick values suitable for use on a chart axis.
 * The tick values are evenly spaced within the range defined by the data.
 *
 * @param props - The properties required to generate the tick values.
 * @param props.data - An array of data objects containing the values to analyze.
 * @param props.key - The key in the data objects to extract numeric values for tick generation.
 * @param props.maxTicks - The maximum number of ticks to generate. Defaults to 10 if not provided.
 *
 * @returns An array of tick values, which are evenly spaced numeric values
 * that can be used for chart axis labeling.
 */
export function chartTickValues<T>({
    data,
    key,
    maxTicks = 10,
}: ChartTickValuesProps<T>): number[] {
    const maxValue = Math.max(...data.map((item) => item[key] as number));

    // Use a more reasonable step size for smaller values
    const rawStep = maxValue / maxTicks;

    // Get the magnitude (scale) of the value
    const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));

    // We want the step to be rounded to a multiple of 100, 200, 500, etc.
    let step = Math.ceil(rawStep / magnitude) * magnitude;

    // Ensure the step is not too small by enforcing a minimum step of 100
    step = step < 100 ? 100 : step;

    // Generate ticks based on the calculated step size
    const ticks: number[] = [];
    for (
        let index = 0;
        index <= Math.ceil(maxValue / step) * step;
        index += step
    ) {
        // Only add the ticks within a reasonable range (less than maxValue + step)
        if (index <= maxValue) {
            ticks.push(index);
        }
    }

    return ticks;
}

/**
 * Format tick values into human-readable format (e.g., K for thousands, M for millions).
 *
 * @param value - The numeric value to format.
 * @returns A formatted string with appropriate suffix.
 */
export function formatTickValue(value: number): string {
    if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
    if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
    return value.toString(); // For smaller numbers, return the raw value
}
