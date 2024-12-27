import { ColumnDef, flexRender } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { ChangeEvent, FormEvent } from "react";

import { TableContextProvider } from "@/contexts/table";
import { useTableContext } from "@/hooks/table-context";
import { cn } from "@/lib/utils";
import type { ParentComponentProps } from "@/types";

interface Props<TData, TValue> extends ParentComponentProps {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    initialPageSize?: number;
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

Component.Title = function () {};

Component.Search = function Component({
    styles,
}: {
    styles?: { [key: string]: string };
}) {
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

Component.TableHeader = function Component<T>() {
    const { table } = useTableContext<T>();

    return (
        <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th key={header.id}>
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

Component.TableBody = function Component<T>() {
    const { table } = useTableContext<T>();

    return (
        <tbody>
            {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row, index) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>
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

Component.TableFooter = function () {};
