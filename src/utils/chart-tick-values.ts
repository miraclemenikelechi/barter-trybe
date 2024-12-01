// type ChartTickValuesProps<T> = {
//     data: T[];
//     key: keyof T;
//     maxTicks?: number;
// };

// export function chartTickValues<T>({
//     data,
//     key,
//     maxTicks = 10,
// }: ChartTickValuesProps<T>): number[] {
//     const maxValue = Math.max(...data.map((item) => item[key] as number));

//     const rawStep = maxValue / maxTicks;

//     const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
//     const step = Math.ceil(rawStep / magnitude) * magnitude;

//     const ticks: number[] = [];

//     let finalTick = Math.ceil(maxValue / step) * step;

//     if (finalTick > maxValue * 1.25)
//         finalTick = Math.ceil(maxValue / step) * step - step;

//     for (let index = 0; index <= finalTick; index += step) {
//         ticks.push(index);
//     }

//     return ticks;
// }


type ChartTickValuesProps<T> = {
    data: T[];
    key: keyof T;
    maxTicks?: number;
};

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
