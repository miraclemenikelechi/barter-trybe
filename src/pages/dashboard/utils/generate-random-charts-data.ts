import { fakerEN_NG as faker } from "@faker-js/faker";

import { SATISFACTION_TYPE } from "../types";

export function generateRandomSatisfactionData(): SATISFACTION_TYPE[] {
    return Array.from({ length: 5 }, function (_, index) {
        return {
            percentage: faker.number.int({ max: 100, min: 10 }),
            rating: index + 1,
        };
    });
}

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

export function generateLineChartData() {}
