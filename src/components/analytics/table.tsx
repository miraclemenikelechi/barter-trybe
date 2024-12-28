import { Link } from "@tanstack/react-router";
import { type ColumnDef } from "@tanstack/react-table";
import { Fragment, ReactNode, useMemo } from "react";

import DataTable from "@/components/data-table";
import { PRODUCTS_TABLE } from "@/lib/analytics.config";
import { cn } from "@/lib/utils";
import { IProductsTable } from "@/types";
import { formatValue } from "@/utils/format-value";

const PRODUCTS_TABLE_COLUMNS: ColumnDef<IProductsTable>[] = [
    {
        accessorKey: "serialNumber",
        cell: () => null,
        header: () => <span>S/N</span>,
    },
    {
        accessorKey: "name",
        cell: (info) => (
            <span
                className={cn(
                    "font-semibold text-[var(--blue--900)] text-left"
                )}
            >
                {info.getValue() as ReactNode}
            </span>
        ),
        header: ({ column }) => (
            <DataTable.TableSort column={column} label="Name" />
        ),
    },
    {
        accessorKey: "batchNumber",
        cell: (info) => <span>{info.getValue() as ReactNode}</span>,
        header: ({ column }) => (
            <DataTable.TableSort column={column} label="Batch Number" />
        ),
    },
    {
        accessorKey: "expiresIn",
        cell: (info) => <span>{info.getValue() as ReactNode}</span>,
        header: () => <span>Expires In</span>,
    },
    {
        accessorKey: "expiryThreshold",
        cell: (info) => (
            <span>
                {info.getValue() as ReactNode}{" "}
                {Number(info.getValue()) !== 1 ? "Days" : "Day"}
            </span>
        ),
        header: () => <span>Expiry Threshold</span>,
    },
    {
        accessorKey: "expiredItems",
        cell: (info) => (
            <span>{formatValue(false, Number(info.getValue()))}</span>
        ),
        header: () => <span>Expired Items</span>,
    },
    {
        accessorKey: "expiredLoss",
        cell: (info) => (
            <span>{formatValue(true, Number(info.getValue()))}</span>
        ),
        header: () => <span>Expired Loss</span>,
    },
    {
        accessorKey: "unit",
        cell: (info) => <span>{info.getValue() as ReactNode}</span>,
        header: ({ column }) => (
            <DataTable.TableSort column={column} label="Unit" />
        ),
    },
    {
        accessorKey: "shelf",
        cell: (info) => (
            <span className="uppercase">{info.getValue() as ReactNode}</span>
        ),
        header: ({ column }) => (
            <DataTable.TableSort column={column} label="Shelf" />
        ),
    },
    {
        accessorKey: "category",
        cell: (info) => <span>{info.getValue() as ReactNode}</span>,
        header: ({ column }) => (
            <DataTable.TableSort column={column} label="Category" />
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const data = row.original;

            return (
                <Link
                    className={cn(
                        "bg-[var(--blue--100)] h-8 w-16 rounded text-white font-inter text-sm font-medium"
                    )}
                >
                    View
                </Link>
            );
        },
    },
];

export default function Component() {
    const config = useMemo(
        () => ({
            columns: PRODUCTS_TABLE_COLUMNS,
            data: PRODUCTS_TABLE,
        }),
        []
    );

    const leftAlignedColumns = [
        "batchNumber",
        "category",
        "name",
        "shelf",
        "unit",
    ];

    return (
        <Fragment>
            <DataTable columns={config.columns} data={config.data}>
                <header className={cn("px-5 py-6 flex gap-4 items-center")}>
                    <DataTable.Title
                        description="This shows a list of all Products available in the system"
                        title="Products List"
                    />
                    <DataTable.Search />
                </header>

                <table className={cn("size-full")}>
                    <DataTable.TableHeader />
                    <DataTable.TableBody
                        leftAlignedColumns={leftAlignedColumns}
                    />
                    <DataTable.TableFooter />
                </table>
            </DataTable>
        </Fragment>
    );
}
