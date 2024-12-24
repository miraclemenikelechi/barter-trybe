import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";

import ProductsFilter from "@/components/analytics/products-filter";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/(app)/_app/analytics/_layout/")({
    component: function Component() {
        return (
            <Fragment>
                <main className={cn("analytics__filter")}>
                    <ProductsFilter />
                </main>

                <footer>table</footer>
            </Fragment>
        );
    },
});
