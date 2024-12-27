import { createContext, useContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableContext = createContext<any>(undefined);

export function useTableContext() {
    const context = useContext(TableContext);
    if (context === undefined || context === null || !context) {
        throw new Error(
            "useTableContext must be used within a TableContextProvider"
        );
    }
    return context;
}
