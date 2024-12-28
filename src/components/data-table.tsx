import { type Column, type ColumnDef, flexRender } from "@tanstack/react-table";
import { ArrowUpDown, MoveDown, MoveUp, Search } from "lucide-react";
import {
    type ChangeEvent,
    type FormEvent,
    Fragment,
    type HTMLProps,
} from "react";

import { PaginationNext, PaginationPrevious } from "@/assets/icons";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { TableContextProvider } from "@/contexts/table";
import { useTableContext } from "@/hooks/table-context";
import { cn } from "@/lib/utils";
import type { ParentComponentProps } from "@/types";

interface Props<TData, TValue> extends ParentComponentProps {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    initialPageSize?: number;
}

interface IStyles {
    styles?: { [key: string]: HTMLProps<HTMLElement>["className"] };
}

export default function Component<TData, TValue>({
    children,
    className,
    columns,
    data,
    initialPageSize,
}: Props<TData, TValue>) {
    return (
        <TableContextProvider
            columns={columns}
            data={data}
            initialPageSize={initialPageSize}
        >
            <section className={cn(className, "")}>{children}</section>
        </TableContextProvider>
    );
}

interface TitleProps extends IStyles {
    title: string;
    description: string;
}

Component.Title = function Component({
    styles,
    title,
    description,
}: TitleProps) {
    return (
        <div className={cn(styles?.wrapper, "space-y-2")}>
            <h3
                className={cn(
                    styles?.title,
                    "text-base font-semibold font-inter text-[var(--blue--900)]"
                )}
            >
                {title}
            </h3>
            <p
                className={cn(
                    styles?.description,
                    "text-sm font-inter text-[var(--blue--700)]"
                )}
            >
                {description}
            </p>
        </div>
    );
};

Component.Search = function Component({ styles }: IStyles) {
    const { globalFilter, setGlobalFilter } = useTableContext();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={cn(
                styles?.form,
                "flex w-[28rem] border rounded-lg items-center overflow-hidden"
            )}
        >
            <i className={cn("p-1 w-10")}>
                <Search className={cn("size-5")} color="var(--blue--700)" />
            </i>

            <input
                type="text"
                className={cn(styles?.input, "w-full ml-auto")}
                placeholder="Search..."
                value={globalFilter ?? ""}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setGlobalFilter(event?.target.value)
                }
            />

            <button
                className={cn(
                    styles?.button,
                    "bg-[var(--blue--100)] ml-auto w-[5.25rem] px-4 py-1.5 font-inter text-base font-medium text-white"
                )}
            >
                Search
            </button>
        </form>
    );
};

Component.TableHeader = function Component<T>({ styles }: IStyles) {
    const { table } = useTableContext<T>();

    return (
        <thead className={cn(styles?.thead, "border-y")}>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
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
                    ))}
                </tr>
            ))}
        </thead>
    );
};

interface TableBodyProps {
    leftAlignedColumns: string[];
}

Component.TableBody = function Component<T>({
    leftAlignedColumns,
}: TableBodyProps) {
    const { table } = useTableContext<T>();

    return (
        <tbody>
            {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row, index) => (
                    <tr key={row.id} className={cn("border-b")}>
                        {row.getVisibleCells().map((cell) => (
                            <td
                                key={cell.id}
                                className={cn(
                                    "p-2 text-sm font-inter text-[var(--blue--700)]",
                                    leftAlignedColumns.includes(cell.column.id)
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
                    <td colSpan={table.getAllColumns().length}>
                        <span className="flex items-center justify-center p-5 text-base font-semibold font-inter">
                            No data available!
                        </span>
                    </td>
                </tr>
            )}
        </tbody>
    );
};

Component.TableFooter = function Component<T>() {
    const { table } = useTableContext<T>();

    const texts = {
        firstItemInPage:
            table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
            1,

        lastItemInPage: Math.min(
            (table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length
        ),

        totalItems: table.getFilteredRowModel().rows.length,

        currentPage: table.getState().pagination.pageIndex + 1,

        totalPages: table.getPageCount(),
    };

    return (
        <tfoot>
            <td colSpan={table.getAllColumns().length}>
                <div className={cn("flex justify-between px-5 py-2.5")}>
                    <aside
                        className={cn("flex gap-2 items-center justify-center")}
                    >
                        <span
                            className={cn(
                                "font-inter text-sm text-[var(--blue--700)]"
                            )}
                        >
                            Number of Items displayed per page
                        </span>

                        <Select
                            onValueChange={(event) =>
                                table.setPageSize(Number(event))
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
                                        table.getState().pagination.pageSize
                                    }
                                />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    {[10, 20, 30, 40, 50]
                                        .filter(
                                            (size) =>
                                                size === 10 ||
                                                size <=
                                                    table.getFilteredRowModel()
                                                        .rows.length
                                        )
                                        .map((pageSize) => (
                                            <SelectItem
                                                value={String(pageSize)}
                                                key={pageSize}
                                            >
                                                {pageSize}
                                            </SelectItem>
                                        ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <span
                            className={cn(
                                "font-inter text-sm text-[var(--blue--700)]"
                            )}
                        >
                            {texts.firstItemInPage}-{texts.lastItemInPage} of{" "}
                            {texts.totalItems} items
                        </span>
                    </aside>

                    <aside
                        className={cn(
                            "flex gap-2 items-center font-inter text-sm"
                        )}
                    >
                        <button
                            disabled={!table.getCanPreviousPage()}
                            onClick={() => table.previousPage()}
                            className={cn(
                                "disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--blue--200)] p-2 rounded"
                            )}
                        >
                            <i className="size-4">
                                <PaginationPrevious />
                            </i>
                        </button>

                        {Array.from(
                            {
                                length: table.getPageCount(),
                            },
                            (_, i) => i + 1
                        )
                            .filter(function (page) {
                                return (
                                    page === 1 ||
                                    page === texts.totalPages ||
                                    (page >= texts.currentPage - 1 &&
                                        page <= texts.currentPage + 1)
                                );
                            })
                            .map(function (page, index, visiblePages) {
                                return (
                                    <Fragment key={index}>
                                        {index > 0 ? (
                                            page >
                                            visiblePages[index - 1] + 1 ? (
                                                <span className="flex items-center justify-center size-8">
                                                    ...
                                                </span>
                                            ) : null
                                        ) : null}

                                        <button
                                            onClick={() =>
                                                table.setPageIndex(page - 1)
                                            }
                                            className={cn(
                                                "size-8 rounded",
                                                page - 1 ===
                                                    table.getState().pagination
                                                        .pageIndex
                                                    ? "bg-[var(--blue--100)] text-white font-bold"
                                                    : "bg-white text-[var(--blue--700)] hover:bg-[var(--blue--200)]"
                                            )}
                                        >
                                            {page}
                                        </button>
                                    </Fragment>
                                );
                            })}

                        <button
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                            className={cn(
                                "disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--blue--200)] p-2 rounded"
                            )}
                        >
                            <i className="size-4">
                                <PaginationNext />
                            </i>
                        </button>
                    </aside>
                </div>
            </td>
        </tfoot>
    );
};

interface TableSortProps<T> {
    label: string;
    column: Column<T, unknown>;
}

Component.TableSort = function Component<T>({
    label,
    column,
}: TableSortProps<T>) {
    return (
        <button
            className={cn("flex items-center justify-start w-full")}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            <span>{label}</span>
            <i className={cn("size-6 flex items-center justify-center")}>
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
};
