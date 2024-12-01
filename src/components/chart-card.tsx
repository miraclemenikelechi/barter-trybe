import { PropsWithChildren, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ComponentProps = PropsWithChildren & { className?: string };

export default function Component({ children, className }: ComponentProps) {
    return (
        <section
            className={cn(
                className,
                "size-full bg-[var(--white--100)] rounded-lg"
            )}
        >
            {children}
        </section>
    );
}

type HeaderProps = {
    description: string;
    title: string;
    className?: string;
    dropdown?: ReactNode;
};

Component.Header = function Component({
    className,
    description,
    dropdown,
    title,
}: HeaderProps) {
    return (
        <header className={cn(className, "py-3 px-6 flex justify-between")}>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            {dropdown ? (
                <div className="flex items-center justify-center">
                    {dropdown}
                </div>
            ) : null}
        </header>
    );
};

type FooterProps = { chart: ReactNode; className?: string };

Component.Footer = function Component({ className, chart }: FooterProps) {
    return (
        <footer className={cn(className, "py-3 px-6")}>
            <div className="size-full">{chart}</div>
        </footer>
    );
};
