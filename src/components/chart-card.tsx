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
                <h3 className="text-base font-semibold text-inter text-[var(--black--500)]">
                    {title}
                </h3>
                <p className="text-xs font-inter text-[var(--black--300)]">
                    {description}
                </p>
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
        <footer className={cn(className, "py-3 px-6 h-[14rem]")}>
            <div className="size-full">{chart}</div>
        </footer>
    );
};
