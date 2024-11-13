import { Fragment, ReactNode } from "react";

export default function Component({ children }: { children: ReactNode }) {
    return <Fragment>{children}</Fragment>;
}
