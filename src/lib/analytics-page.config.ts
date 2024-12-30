import type { IProductsTable, ProductsFilter } from "@/types";
import { generateTableData } from "@/utils/analytics-page.utils";

export const PRODUCTS_FILTER: ProductsFilter[] = [
    {
        title: "Region",
        options: [
            {
                label: "Region",
                value: "region",
            },
        ],
    },
    {
        title: "State",
        options: [
            {
                label: "Region",
                value: "region",
            },
        ],
    },
    {
        title: "City",
        options: [
            {
                label: "Region",
                value: "region",
            },
        ],
    },
    {
        title: "Product Category",
        options: [
            {
                label: "Region",
                value: "region",
            },
        ],
    },
];

export const PRODUCTS_TABLE: IProductsTable[] = [...generateTableData(100)];
