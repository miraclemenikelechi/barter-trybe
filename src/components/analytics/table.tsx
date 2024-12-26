import { Link } from "@tanstack/react-router";
import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoveDown, MoveUp, Search } from "lucide-react";
import { type FormEvent, Fragment, ReactNode, useMemo, useState } from "react";

import { PRODUCTS_TABLE } from "@/lib/analytics.config";
import { cn } from "@/lib/utils";
import { IProductsTable } from "@/types";

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
        header: ({ column }) => {
            return (
                <button
                    className={cn("flex items-center justify-start w-full")}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    <span>Name</span>
                    <i
                        className={cn(
                            "size-6 flex items-center justify-center"
                        )}
                    >
                        {column.getIsSorted() === "asc" ? (
                            <MoveUp className="w-4 h-4 ml-2" />
                        ) : column.getIsSorted() === "desc" ? (
                            <MoveDown className="w-4 h-4 ml-2" />
                        ) : (
                            <ArrowUpDown className="w-4 h-4 ml-2" />
                        )}
                    </i>
                </button>
            );
        },
    },
    {
        accessorKey: "batchNumber",
        cell: (info) => <span>{info.getValue() as ReactNode}</span>,
        header: ({ column }) => {
            return (
                <button
                    className={cn("flex items-center justify-start w-full")}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    <span>Batch Number</span>
                    <i
                        className={cn(
                            "size-6 flex items-center justify-center"
                        )}
                    >
                        {column.getIsSorted() === "asc" ? (
                            <MoveUp className="w-4 h-4 ml-2" />
                        ) : column.getIsSorted() === "desc" ? (
                            <MoveDown className="w-4 h-4 ml-2" />
                        ) : (
                            <ArrowUpDown className="w-4 h-4 ml-2" />
                        )}
                    </i>
                </button>
            );
        },
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
        cell: (info) => <span>{info.getValue() as ReactNode}</span>,
        header: () => <span>Expired Items</span>,
    },
    {
        accessorKey: "expiredLoss",
        cell: (info) => <span>{info.getValue() as ReactNode}</span>,
        header: () => <span>Expired Loss</span>,
    },
    {
        accessorKey: "unit",
        cell: (info) => <span>{info.getValue() as ReactNode}</span>,
        header: ({ column }) => {
            return (
                <button
                    className={cn("flex items-center justify-start w-full")}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    <span>Unit</span>
                    <i
                        className={cn(
                            "size-6 flex items-center justify-center"
                        )}
                    >
                        {column.getIsSorted() === "asc" ? (
                            <MoveUp className="w-4 h-4 ml-2" />
                        ) : column.getIsSorted() === "desc" ? (
                            <MoveDown className="w-4 h-4 ml-2" />
                        ) : (
                            <ArrowUpDown className="w-4 h-4 ml-2" />
                        )}
                    </i>
                </button>
            );
        },
    },
    {
        accessorKey: "shelf",
        cell: (info) => <span>{info.getValue() as ReactNode}</span>,
        header: ({ column }) => {
            return (
                <button
                    className={cn("flex items-center justify-start w-full")}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    <span>Shelf</span>
                    <i
                        className={cn(
                            "size-6 flex items-center justify-center"
                        )}
                    >
                        {column.getIsSorted() === "asc" ? (
                            <MoveUp className="w-4 h-4 ml-2" />
                        ) : column.getIsSorted() === "desc" ? (
                            <MoveDown className="w-4 h-4 ml-2" />
                        ) : (
                            <ArrowUpDown className="w-4 h-4 ml-2" />
                        )}
                    </i>
                </button>
            );
        },
    },
    {
        accessorKey: "category",
        cell: (info) => <span>{info.getValue() as ReactNode}</span>,
        header: ({ column }) => {
            return (
                <button
                    className={cn("flex items-center justify-start w-full")}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    <span>Category</span>
                    <i
                        className={cn(
                            "size-6 flex items-center justify-center"
                        )}
                    >
                        {column.getIsSorted() === "asc" ? (
                            <MoveUp className="w-4 h-4 ml-2" />
                        ) : column.getIsSorted() === "desc" ? (
                            <MoveDown className="w-4 h-4 ml-2" />
                        ) : (
                            <ArrowUpDown className="w-4 h-4 ml-2" />
                        )}
                    </i>
                </button>
            );
        },
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
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <Fragment>
            <header className={cn("px-5 py-6 flex gap-4 items-center")}>
                <div className={cn("space-y-2")}>
                    <h3
                        className={cn(
                            "text-base font-semibold font-inter text-[var(--blue--900)]"
                        )}
                    >
                        Products List
                    </h3>
                    <p
                        className={cn(
                            "text-sm font-inter text-[var(--blue--700)]"
                        )}
                    >
                        This shows a list of all Products available in the
                        system
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className={cn(
                        "flex w-[28rem] border rounded-lg items-center overflow-hidden"
                    )}
                >
                    <i className={cn("p-1 w-10")}>
                        <Search
                            className={cn("size-5")}
                            color="var(--blue--700)"
                        />
                    </i>
                    <input
                        type="text"
                        className={cn("w-full ml-auto")}
                        placeholder="Search..."
                    />
                    <button
                        className={cn(
                            "bg-[var(--blue--100)] ml-auto w-[5.25rem] px-4 py-1.5 font-inter text-base font-medium text-white"
                        )}
                    >
                        Search
                    </button>
                </form>
            </header>

            <footer>
                <RenderTable
                    columns={PRODUCTS_TABLE_COLUMNS}
                    data={PRODUCTS_TABLE}
                />
            </footer>
        </Fragment>
    );
}

interface TableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

function RenderTable<TData, TValue>({
    columns,
    data,
}: TableProps<TData, TValue>) {
    const config = useMemo(
        () => ({
            columns,
            data,
        }),
        [columns, data]
    );

    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        columns: config.columns,
        data: config.data,
        state: {
            sorting,
        },
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <section>
            <table className={cn("size-full")}>
                <thead className={cn("border-y")}>
                    {table.getHeaderGroups().map((headerGroup) => {
                        return (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <th
                                            key={header.id}
                                            className={cn(
                                                "px-2 py-3 text-[var(--blue--700)] text-xs font-inter"
                                            )}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </th>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </thead>

                <tbody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row, index) => (
                            <tr key={row.id} className={cn("border-b")}>
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className={cn(
                                            "p-2 text-sm font-inter text-[var(--blue--700)]",
                                            cell.column.id === "batchNumber" ||
                                                cell.column.id === "category" ||
                                                cell.column.id === "shelf" ||
                                                cell.column.id === "unit" ||
                                                cell.column.id === "name"
                                                ? "text-left"
                                                : "text-center"
                                        )}
                                    >
                                        {cell.column.id === "serialNumber" ? (
                                            <span
                                                className={cn(
                                                    "font-semibold text-[var(--blue--900)]"
                                                )}
                                            >
                                                {index + 1}
                                            </span>
                                        ) : (
                                            flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr key={"no-data"}>
                            <td colSpan={columns.length}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
}
