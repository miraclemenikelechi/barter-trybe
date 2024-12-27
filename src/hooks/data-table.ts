import {
    ColumnDef,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import type { IPagination } from "@/types";

interface Props<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    initialPageSize?: number;
}

export function useDataTable<TData, TValue>({
    columns,
    data,
    initialPageSize,
}: Props<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState<string>("");
    const [pagination, setPagination] = useState<IPagination>({
        pageIndex: 0,
        pageSize: initialPageSize || 10,
    });

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),

        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),

        state: {
            sorting,
            globalFilter,
            pagination,
        },
        pageCount: Math.ceil(data.length / pagination.pageSize),
        manualPagination: false,

        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setPagination,
    });

    return {
        table,

        sorting,
        setSorting,

        globalFilter,
        setGlobalFilter,

        pagination,
        setPagination,
    } as const;
}
