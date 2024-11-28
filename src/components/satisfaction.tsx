import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type CardProps = PropsWithChildren & { className?: string };

type CardTitleProps = { title: string; className?: string };

type CardDescriptionProps = Omit<CardProps, "title"> & { value: string };

const emojiMap: Record<number, string> = {
    1: "😖",
    2: "☹️",
    3: "😐",
    4: "😃",
    5: "😍",
};

export default function Component({ className, children }: CardProps) {
    return (
        <section
            className={cn(
                className,
                "size-full bg-[var(--white--100)] py-2 px-6"
            )}
        >
            {children}
        </section>
    );
}

function CardTitle({ title, className }: CardTitleProps) {
    return <h3 className={cn(className, ``)}>{title}</h3>;
}

function CardDescription({ value, className }: CardDescriptionProps) {
    return <span className={cn(className, "")}>{value}</span>;
}

function Rating({
    rating,
    percentage,
}: {
    rating: number;
    percentage: number;
}) {
    return (
        <article className="w-full h-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-0.5">
                <span>{emojiMap[rating]}</span>
                <span className="flex items-center justify-center w-2">
                    {rating}
                </span>
            </div>

            <div className="w-full h-2 rounded-full bg-[var(--white--200)]">
                <span
                    className={`rounded-full bg-[var(--black--200)] h-full flex`}
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <span className="w-10">{percentage}%</span>
        </article>
    );
}

Component.Title = CardTitle;
Component.Description = CardDescription;
Component.Rating = Rating;
