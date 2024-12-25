import { fakerEN_NG as faker } from "@faker-js/faker";

/**
 * Generates an array of 5 random customer satisfaction data points.
 *
 * Each data point is an object with two properties:
 * - percentage: a random number between 10 and 100
 * - rating: a number between 1 and 5, indicating the rating of the customer
 *   satisfaction from lowest (1) to highest (5)
 *
 * @returns {Array<{percentage: number, rating: number}>}
 */
export function generateRandomSatisfactionData(): Array<{
    percentage: number;
    rating: number;
}> {
    return Array.from({ length: 5 }, function (_, index) {
        return {
            percentage: faker.number.int({ max: 100, min: 10 }),
            rating: index + 1,
        };
    });
}

/**
 * Generates an array of chart data objects based on provided labels and sales range.
 *
 * This function accepts an array of labels or a function that returns such an array,
 * and generates an array of objects, each containing a duration and a sales value.
 * The sales value is a random integer within the specified min and max sales range.
 *
 * @param labels - An array of strings or a function that returns an array of strings
 *                 representing the labels for the chart data.
 * @param minSales - The minimum sales value for generating random sales data.
 * @param maxSales - The maximum sales value for generating random sales data.
 * @returns An array of objects, each with a 'duration' and a 'sales' property.
 */

export function generateChartData({
    labels,
    minSales,
    maxSales,
}: {
    labels: string[] | (() => string[]);
    minSales: number;
    maxSales: number;
}) {
    const labelsArray = typeof labels === "function" ? labels() : labels;

    return labelsArray.map(function (label) {
        return {
            duration: label as string,
            sales: faker.number.int({ min: minSales, max: maxSales }),
        };
    });
}

/**
 * Generates an array of week labels, with a random length of 4 or 5.
 *
 * The labels are in the format "Week X", where X is the week number.
 *
 * @returns {string[]}
 */
export function generateWeeks(): string[] {
    return Array.from(
        { length: faker.datatype.boolean() ? 5 : 4 },
        function (_, index) {
            return `Week ${index + 1}`;
        }
    );
}

/**
 * Generates an array of objects, each with properties:
 * - name: a product name using faker.commerce.product()
 * - sold: a random number between 50 and 300 using faker.number.int()
 * - remaining: a random number between 10 and 200 using faker.number.int()
 * - price: a random price between $100 and $200 using faker.commerce.price()
 *
 * @param length - The length of the array to generate.
 * @returns {object[]} An array of objects, each with the properties listed above.
 */
export function generateTableData(length: number): {
    name: string;
    sold: number;
    remaining: number;
    price: number;
}[] {
    return Array.from({ length }, function () {
        return {
            name: faker.commerce.product(),
            sold: faker.number.int({ min: 50, max: 300 }),
            remaining: faker.number.int({ min: 10, max: 200 }),
            price: Number(faker.commerce.price({ min: 100, max: 200 })),
        };
    });
}
