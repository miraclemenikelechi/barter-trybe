import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import { AuthenticationContextType } from "@/contexts/authentication";

type RouterContext = {
    authentication: AuthenticationContextType;
};

export const Route = createRootRouteWithContext<RouterContext>()({
    component: function () {
        return <Outlet />;
    },
});
