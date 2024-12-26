import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";

import ProductsFilter from "@/components/analytics/filter";
import ProductsTable from "@/components/analytics/table";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/(app)/_app/analytics/_layout/")({
    component: function Component() {
        return (
            <Fragment>
                <main className={cn("analytics__filter")}>
                    <ProductsFilter />
                </main>

                <footer className={cn("analytics__table")}>
                    <ProductsTable />
                </footer>
            </Fragment>
        );
    },
});
