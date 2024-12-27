import { Link } from "@tanstack/react-router";
import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoveDown, MoveUp, Search } from "lucide-react";
import {
    ChangeEvent,
    type FormEvent,
    Fragment,
    ReactNode,
    useMemo,
    useState,
} from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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
    const config = useMemo(
        () => ({
            columns: PRODUCTS_TABLE_COLUMNS,
            data: PRODUCTS_TABLE,
        }),
        []
    );

    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState<string>("");
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 8,
    });

    const table = useReactTable({
        columns: config.columns,
        data: config.data,
        state: {
            sorting,
            globalFilter,
            pagination,
        },
        getCoreRowModel: getCoreRowModel(),

        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),

        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),

        pageCount: Math.ceil(config.data.length / pagination.pageSize),
        manualPagination: false,
        onPaginationChange: setPagination,
    });

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
                        value={globalFilter ?? ""}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setGlobalFilter(event?.target.value)
                        }
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
                                                        header.column.columnDef
                                                            .header,
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
                                                    cell.column.id ===
                                                        "batchNumber" ||
                                                        cell.column.id ===
                                                            "category" ||
                                                        cell.column.id ===
                                                            "shelf" ||
                                                        cell.column.id ===
                                                            "unit" ||
                                                        cell.column.id ===
                                                            "name"
                                                        ? "text-left"
                                                        : "text-center"
                                                )}
                                            >
                                                {cell.column.id ===
                                                "serialNumber" ? (
                                                    <span
                                                        className={cn(
                                                            "font-semibold text-[var(--blue--900)]"
                                                        )}
                                                    >
                                                        {index + 1}
                                                    </span>
                                                ) : (
                                                    flexRender(
                                                        cell.column.columnDef
                                                            .cell,
                                                        cell.getContext()
                                                    )
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr key={"no-data"}>
                                    <td colSpan={config.columns.length}>
                                        <span className="flex items-center justify-center p-5 text-base font-semibold font-inter">
                                            No data available!
                                        </span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={config.columns.length}>
                                    <div
                                        className={cn(
                                            "flex justify-between px-5 py-2.5"
                                        )}
                                    >
                                        <aside className={cn("flex gap-2")}>
                                            <span>
                                                Number of Items displayed per
                                                page
                                            </span>

                                            <Select
                                                onValueChange={(event) =>
                                                    table.setPageSize(
                                                        Number(event)
                                                    )
                                                }
                                            >
                                                <SelectTrigger
                                                    className={cn(
                                                        "w-[3.75rem] h-[1.5rem] bg-[var(--blue--100)] text-xs text-white font-inter",
                                                        "focus:ring-0 hover:ring-0 ring-0"
                                                    )}
                                                >
                                                    <SelectValue
                                                        placeholder={
                                                            table.getState()
                                                                .pagination
                                                                .pageSize
                                                        }
                                                    />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    <SelectGroup>
                                                        {[
                                                            10, 20, 30, 40, 50,
                                                        ].map((pageSize) => (
                                                            <SelectItem
                                                                value={String(
                                                                    pageSize
                                                                )}
                                                                key={pageSize}
                                                            >
                                                                {pageSize}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>

                                            <span>
                                                {table.getState().pagination
                                                    .pageIndex *
                                                    table.getState().pagination
                                                        .pageSize +
                                                    1}{" "}
                                                - {""}
                                                {Math.min(
                                                    (table.getState().pagination
                                                        .pageIndex +
                                                        1) *
                                                        table.getState()
                                                            .pagination
                                                            .pageSize,
                                                    table.getFilteredRowModel()
                                                        .rows.length
                                                )}{" "}
                                                of{" "}
                                                {
                                                    table.getFilteredRowModel()
                                                        .rows.length
                                                }{" "}
                                                items
                                            </span>
                                        </aside>

                                        <aside>
                                            <button
                                                disabled={
                                                    !table.getCanPreviousPage()
                                                }
                                                onClick={() =>
                                                    table.previousPage()
                                                }
                                            >
                                                prev
                                            </button>

                                            {Array.from(
                                                {
                                                    length: table.getPageCount(),
                                                },
                                                (_, i) => i + 1
                                            )
                                                .filter(function (page) {
                                                    const currentPage =
                                                        table.getState()
                                                            .pagination
                                                            .pageIndex + 1;

                                                    const totalPages =
                                                        table.getPageCount();

                                                    return (
                                                        page === 1 ||
                                                        page === totalPages ||
                                                        (page >=
                                                            currentPage - 1 &&
                                                            page <=
                                                                currentPage + 1)
                                                    );
                                                })
                                                .map(
                                                    function (
                                                        page,
                                                        index,
                                                        visiblePages
                                                    ) {
                                                        return (
                                                            <Fragment
                                                                key={index}
                                                            >
                                                                {index > 0 ? (
                                                                    page >
                                                                    visiblePages[
                                                                        index -
                                                                            1
                                                                    ] +
                                                                        1 ? (
                                                                        <>...</>
                                                                    ) : null
                                                                ) : null}

                                                                <button
                                                                    onClick={() =>
                                                                        table.setPageIndex(
                                                                            page -
                                                                                1
                                                                        )
                                                                    }
                                                                >
                                                                    {page}
                                                                </button>
                                                            </Fragment>
                                                        );
                                                    }
                                                )}

                                            <button
                                                onClick={() => table.nextPage()}
                                                disabled={
                                                    !table.getCanNextPage()
                                                }
                                            >
                                                next
                                            </button>
                                        </aside>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            </footer>
        </Fragment>
    );
}
