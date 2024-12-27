import { fakerEN_NG as faker } from "@faker-js/faker";

export function generateTableData(length: number) {
    return Array.from({ length }, function () {
        return {
            name: faker.commerce.product(),
            batchNumber: faker.string.alphanumeric(6),
            expiresIn: generateFormattedDate(faker.date.soon({ days: 10 })),
            expiryThreshold: faker.number.int({ min: 0, max: 30 }),
            expiredItems: faker.number.int({ min: 5000, max: 50000 }),
            expiredLoss: faker.number.int({ min: 1000000, max: 999999999 }),
            unit: faker.number.int({ min: 10, max: 100 }),
            shelf: faker.number.hex(255),
            category: faker.commerce.department(),
        };
    });
}

function generateFormattedDate(date: Date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(2);

    return `${day}/${month}/${year}`;
}
