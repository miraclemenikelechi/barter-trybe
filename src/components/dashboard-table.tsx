import { Link } from "@tanstack/react-router";
import { PropsWithChildren, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ComponentProps = PropsWithChildren & { className?: string };

export default function Component({ children, className }: ComponentProps) {
    return (
        <section
            className={cn(
                "bg-[var(--white--100)] size-full rounded-lg px-3 py-4",
                className
            )}
        >
            {children}
        </section>
    );
}

type HeaderProps = {
    href: string;
    title: string;
    linkText?: string;
    styles?: { [key: string]: string };
};

Component.Header = function ComponentHeader({
    href,
    linkText = "See All",
    styles,
    title,
}: HeaderProps) {
    return (
        <header
            className={cn(
                "flex items-center justify-between text-base font-semibold font-inter",
                styles?.header
            )}
        >
            <h3 className={styles?.title}>{title}</h3>

            <Link
                className={cn("text-[var(--blue--100)]", styles?.link)}
                to={href}
            >
                {linkText}
            </Link>
        </header>
    );
};

type FooterProps<T> = {
    columns: { value: keyof T; label: string }[];
    data: T[];
    sticky?: keyof T;
    styles?: { [key: string]: string };
};

Component.Footer = function ComponentFooter<T>({
    columns,
    data,
    sticky,
    styles,
}: FooterProps<T>) {
    return (
        <footer className={cn("size-full", styles?.footer)}>
            <div className="h-full overflow-auto border border-green-700">
                <table>
                    <thead className="sticky top-0 z-10 bg-white">
                        <tr>
                            <TableHead
                                columns={columns}
                                sticky={sticky}
                                styles={styles}
                            />
                        </tr>
                    </thead>

                    <tbody>
                        <TableBody
                            columns={columns}
                            data={data}
                            sticky={sticky}
                            styles={styles}
                        />
                    </tbody>
                </table>
            </div>
        </footer>
    );
};

type TableHeadProps<T> = Omit<FooterProps<T>, "data">;

function TableHead<T>({ columns, sticky, styles }: TableHeadProps<T>) {
    return columns.map(function (column, index) {
        return (
            <th
                key={index}
                className={cn(
                    styles?.tableHeaderCell,
                    column.value === sticky ? "sticky left-0 bg-white" : "",
                    "text-nowrap px-3"
                )}
            >
                {column.label}
            </th>
        );
    });
}

function TableBody<T>({ columns, data, sticky, styles }: FooterProps<T>) {
    return data.map((row, rowIndex) => (
        <tr key={rowIndex} className={styles?.tableRow}>
            {columns.map((column, colIndex) => (
                <td
                    key={colIndex}
                    className={cn(
                        styles?.tableCell,
                        column.value === sticky ? "sticky left-0 bg-white" : "",
                        styles?.[column.value as string]
                    )}
                >
                    {row[column.value] as ReactNode}
                </td>
            ))}
        </tr>
    ));
}
