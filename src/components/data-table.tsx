import { ColumnDef } from "@tanstack/react-table";

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
    initialPageSize = 10,
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

Component.Search = function Search() {
    const { globalFilter } = useTableContext();
};

Component.TableHeader = function () {};

Component.TableBody = function () {};

Component.TableFooter = function () {};
