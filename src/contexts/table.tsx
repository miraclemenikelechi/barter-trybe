import { ColumnDef } from "@tanstack/react-table";
import { PropsWithChildren } from "react";

import { useDataTable } from "@/hooks/data-table";
import { TableContext } from "@/hooks/table-context";

interface Props<TData, TValue> extends PropsWithChildren {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    initialPageSize?: number;
}

export function TableContextProvider<TData, TValue>({
    children,
    columns,
    data,
    initialPageSize = 10,
}: Props<TData, TValue>) {
    const tableState = useDataTable({ columns, data, initialPageSize });

    return (
        <TableContext.Provider value={tableState}>
            {children}
        </TableContext.Provider>
    );
}
