/**
 * Transforms the given data into a format suitable for use with ApexCharts.
 *
 * This function extracts the specified category and value keys from the data objects
 * and constructs a series object and categories array for use in configuring an ApexChart.
 *
 * @template T - The type of objects contained in the data array.
 * @param categoryKey - The key used to extract category labels from data objects.
 * @param data - An array of data objects to transform.
 * @param seriesName - The name of the series to be used in the chart.
 * @param valueKey - The key used to extract values from data objects for the series.
 * @returns An object containing a series formatted for ApexCharts and an array of categories.
 */
export function transformDataForApexChart<T>({
    categoryKey,
    data,
    seriesName,
    valueKey,
}: Props<T>) {
    return {
        series: [
            {
                name: seriesName,
                data: data.map((item) => item[valueKey] as number),
            },
        ],
        categories: data.map((item) => item[categoryKey] as string),
    };
}

type Props<T> = {
    categoryKey: keyof T;
    data: T[];
    seriesName: string;
    valueKey: keyof T;
};
