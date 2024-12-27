import { createContext, useContext } from "react";

import type { TableContextType } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableContext = createContext<TableContextType<any> | undefined>(
    undefined
);

export function useTableContext<TData>() {
    const context = useContext(TableContext);
    if (context === undefined || context === null || !context) {
        throw new Error(
            "useTableContext must be used within a TableContextProvider"
        );
    }
    return context as TableContextType<TData>;
}
