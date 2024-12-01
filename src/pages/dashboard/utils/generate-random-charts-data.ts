import { fakerEN_NG as faker } from "@faker-js/faker";

import { SALES_TREND_ITEM_TYPE, SATISFACTION_TYPE } from "../types";

export function generateRandomSatisfactionData(): SATISFACTION_TYPE[] {
    return Array.from({ length: 5 }, function (_, index) {
        return {
            percentage: faker.number.int({ max: 100, min: 10 }),
            rating: index + 1,
        };
    });
}

export function generateWeekData(): SALES_TREND_ITEM_TYPE[] {
    return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
        function (day) {
            return {
                duration: day,
                sales: faker.number.int({ min: 100, max: 900 }),
            };
        }
    );
}

export function generateMonthData(): SALES_TREND_ITEM_TYPE[] {
    return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ].map(function (month) {
        return {
            duration: month,
            sales: faker.number.int({ min: 100, max: 850 }),
        };
    });
}

export function generateYearData(): SALES_TREND_ITEM_TYPE[] {
    return Array.from({ length: 5 }, function (_, index) {
        return {
            duration: (2020 + index).toString(),
            sales: faker.number.int({ min: 100, max: 900 }),
        };
    });
}
