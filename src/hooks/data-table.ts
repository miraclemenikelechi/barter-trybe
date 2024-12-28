import {
    type ColumnDef,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type SortingState,
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
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),

        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),

        manualPagination: false,
        pageCount: Math.ceil(data.length / pagination.pageSize),
        state: {
            globalFilter,
            pagination,
            sorting,
        },

        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
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
