import { Link, useMatchRoute } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { DASHBOARD_PAGE_NAVIGATION } from "@/types/links";
import { isActiveLink } from "@/utils/active-link";

interface Props {
    links: DASHBOARD_PAGE_NAVIGATION[];
}

export default function Component({ links }: Props) {
    const matchRoute = useMatchRoute();

    return links.map((value: DASHBOARD_PAGE_NAVIGATION, index: number) => (
        <Link
            className={cn(isActiveLink(!!matchRoute({ to: value.href })))}
            key={index}
            to={value.href}
        >
            {value.title}
        </Link>
    ));
}
