import { createContext, ReactNode, useState } from "react";

export type DashboardPagesTitleContextType = {
    title: string | null;
    setTitle: (title: string | null) => void;
};

const DashboardPagesTitleContext =
    createContext<DashboardPagesTitleContextType | null>(null);

function DashboardPagesTitleContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [title, setTitle] = useState<string | null>(null);

    return (
        <DashboardPagesTitleContext.Provider value={{ title, setTitle }}>
            {children}
        </DashboardPagesTitleContext.Provider>
    );
}

export { DashboardPagesTitleContext, DashboardPagesTitleContextProvider };
