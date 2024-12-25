import { Link, useMatchRoute } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import type { ILink } from "@/types";
import { isActiveLink } from "@/utils/active-link";

export default function Component({ links }: { links: ILink[] }) {
    const matchRoute = useMatchRoute();

    return links.map((value: ILink, index: number) => (
        <Link
            className={cn(isActiveLink(!!matchRoute({ to: value.href })))}
            key={index}
            to={value.href}
        >
            {value.title}
        </Link>
    ));
}
