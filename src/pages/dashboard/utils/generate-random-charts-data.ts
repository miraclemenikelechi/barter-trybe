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

export function generateWeeks() {
    return Array.from(
        { length: faker.datatype.boolean() ? 5 : 4 },
        function (_, index) {
            return `Week ${index + 1}`;
        }
    );
}

export function generateTableData(length: number) {
    return Array.from({ length }, function () {
        return {
            name: faker.commerce.product(),
            sold: faker.number.int({ min: 50, max: 300 }),
            remaining: faker.number.int({ min: 10, max: 200 }),
            price: faker.commerce.price({ min: 100, max: 200 }),
        };
    });
}
