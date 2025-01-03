import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { ParentComponentProps } from "@/types";
import { formatValue } from "@/utils/format-value";

export default function Component({
    children,
    className,
}: ParentComponentProps) {
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

Component.Header = function Component ({
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
                className={cn(
                    "text-[var(--blue--100)] font-inter",
                    styles?.link
                )}
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

Component.Footer = function Component<T>({
    columns,
    data,
    sticky,
    styles,
}: FooterProps<T>) {
    return (
        <footer className={cn("size-full", styles?.footer)}>
            <div className="h-full overflow-auto">
                <table className="w-full">
                    <thead className="sticky top-0 z-10 bg-white border-b">
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

function TableHead<T>({ columns, sticky }: TableHeadProps<T>) {
    return columns.map(function (column, index) {
        return (
            <th
                key={index}
                className={cn(
                    column.value === sticky
                        ? "sticky left-0 bg-white text-left !px-2"
                        : "",
                    "text-nowrap px-3 text-xs font-inter text-[var(--blue--700)] font-medium h-[2.75rem]"
                )}
            >
                {column.label}
            </th>
        );
    });
}

function TableBody<T>({ columns, data, sticky, styles }: FooterProps<T>) {
    return data.map((row, rowIndex) => (
        <tr key={rowIndex} className={cn(styles?.tableRow, "border-b")}>
            {columns.map((column, colIndex) => (
                <td
                    key={colIndex}
                    className={cn(
                        column.value === sticky
                            ? "sticky left-0 bg-white border-b"
                            : "",
                        styles?.[column.value as string],
                        "text-center h-[2.75rem] font-inter text-sm text-[#667085] px-2"
                    )}
                >
                    {column.value === "price"
                        ? formatValue(true, row[column.value] as number)
                        : (row[column.value] as ReactNode)}
                </td>
            ))}
        </tr>
    ));
}
