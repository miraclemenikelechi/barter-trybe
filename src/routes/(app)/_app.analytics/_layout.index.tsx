import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";

import { cn } from "@/lib/utils";

export const Route = createFileRoute("/(app)/_app/analytics/_layout/")({
    component: function Component() {
        return (
            <Fragment>
                <main className={cn("analytics__filter")}>
                    <></>
                </main>

                <footer>table</footer>
            </Fragment>
        );
    },
});
