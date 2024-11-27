import { Fragment, PropsWithChildren, ReactNode } from "react";

import { Dashboard_Star } from "@/assets/icons";
import { cn } from "@/lib/utils";

type CardProps = PropsWithChildren & { className?: string };

type CardTitleProps = { title: string; className?: string };

type CardContentProps = {
    value: ReactNode;
    className?: string;
    isRating?: boolean;
    isMoney?: boolean;
};

type CardRightContentProps = CardContentProps & {
    profit: string;
    isProfit?: boolean;
};

type CardPredictionProps = Omit<CardProps, "title"> & { value: string };

export default function Component({ children, className }: CardProps) {
    return <article className={cn(className, `size-full`)}>{children}</article>;
}

function CardIcon({ children, className }: CardProps) {
    return <i className={cn(className, ``)}>{children}</i>;
}

function CardTitle({ title, className }: CardTitleProps) {
    return <h3 className={cn(className, ``)}>{title}</h3>;
}

function CardLeftContent({ className, isRating, value }: CardContentProps) {
    return (
        <aside
            className={cn(
                className,
                `bg-[var(--white--300)] h-[4rem] rounded-lg py-2 px-3`
            )}
        >
            <h4>Last Week</h4>
            <span>
                {isRating ? (
                    <Fragment>
                        <b>{value}</b>
                        <i className="inline-flex">
                            <Dashboard_Star />
                        </i>
                    </Fragment>
                ) : (
                    value
                )}
            </span>
        </aside>
    );
}

function CardRightContent({
    className,
    isProfit,
    isRating,
    profit,
    value,
}: CardRightContentProps) {
    return (
        <aside
            className={cn(
                className,
                `bg-[var(--white--300)] h-[4rem] rounded-lg py-2 px-3`
            )}
        >
            <h4>This Week</h4>

            <div>
                <span
                    className={cn({
                        "text-inherit": isRating,
                        "text-[var(--green--100)]": isProfit && !isRating,
                        "text-[var(--red--100)]": !isRating && !isProfit,
                    })}
                >
                    {isRating ? (
                        <Fragment>
                            <b>{value}</b>
                            <i className="inline-flex">
                                <Dashboard_Star />
                            </i>
                        </Fragment>
                    ) : (
                        value
                    )}
                </span>

                <span
                    className={cn(
                        isProfit
                            ? "bg-[var(--green--100)]"
                            : "bg-[var(--red--100)]"
                    )}
                >
                    {isProfit ? "+" : "-"}
                    {profit}
                </span>
            </div>
        </aside>
    );
}

function CardPrediction({ value, className }: CardPredictionProps) {
    return (
        <div
            className={cn(
                className,
                `bg-[var(--orange--100)] rounded-lg h-6 w-[12.5rem] px-2`
            )}
        >
            <span>Next week AI Prediction: {value}</span>
        </div>
    );
}

Component.LeftContent = CardLeftContent;
Component.Prediction = CardPrediction;
Component.RightContent = CardRightContent;
Component.Icon = CardIcon;
Component.Title = CardTitle;
