import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import { AuthenticationContextType } from "@/contexts/authentication";

type RouterContext = {
    authentication: AuthenticationContextType;
    queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
    component: function () {
        return <Outlet />;
    },
});
