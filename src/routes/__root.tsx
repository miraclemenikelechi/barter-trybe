import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import type { AuthenticationContextType } from "@/types";

type RouterContext = {
    authentication: AuthenticationContextType;
    queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
    component: () => <Outlet />,
});
