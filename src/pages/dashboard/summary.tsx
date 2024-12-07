import { Fragment } from "react";

import DashboardCard from "@/components/dashboard-card";
import { cn } from "@/lib/utils";

import { DASHBOARD_SUMMARY, DASHBOARD_TOP_PRODUCTS } from "./config";
import { DASHBOARD_SUMMARY_TYPE, DASHBOARD_TOP_PRODUCTS_TYPE } from "./types";
import { formatValue } from "../../utils/format-value";

export default function Component() {
    return (
        <Fragment>
            <main className={cn("dashboard-summary__top", "space-y-6")}>
                <ul>
                    {DASHBOARD_SUMMARY.map(function (value, index) {
                        return <SummaryItem key={index} {...value} />;
                    })}
                </ul>

                <ul>
                    {DASHBOARD_TOP_PRODUCTS.map(function (value, index) {
                        return <TopProductsCard key={index} {...value} />;
                    })}
                </ul>
            </main>

            <footer className="dashboard-summary__bottom">
                <h3>AI Recommendations</h3>
                <ul>
                    {[].map(function (value, index) {
                        return (
                            <li
                                key={index}
                                className="dashboard-summary__bottom__item"
                            >
                                <span>{value}</span>
                            </li>
                        );
                    })}
                </ul>
            </footer>
        </Fragment>
    );
}

function SummaryItem({
    icon: Icon,
    isMoney,
    isProfit,
    isRating,
    lastWeek,
    prediction,
    profit,
    thisWeek,
    title,
}: DASHBOARD_SUMMARY_TYPE) {
    return (
        <li className="dashboard-summary__top__item">
            <DashboardCard className="dashboard-summary__card">
                <section>
                    <DashboardCard.Icon className="size-10">
                        <Icon />
                    </DashboardCard.Icon>
                </section>

                <section>
                    <DashboardCard.Title title={title} />

                    <div className="flex items-start justify-start w-full gap-4">
                        <DashboardCard.LeftContent
                            className="dashboard-summary__card__left"
                            isRating={isRating}
                            value={formatValue(isMoney, lastWeek)}
                        />
                        <DashboardCard.RightContent
                            className="dashboard-summary__card__right"
                            isProfit={isProfit}
                            profit={`${profit}%`}
                            value={formatValue(isMoney, thisWeek)}
                            isRating={isRating}
                        />
                    </div>

                    <DashboardCard.Prediction value={`${prediction}%`} />
                </section>
            </DashboardCard>
        </li>
    );
}

function TopProductsCard({
    icon: Icon,
    products,
    title,
}: DASHBOARD_TOP_PRODUCTS_TYPE) {
    return (
        <li className="dashboard-summary__top__item">
            <DashboardCard className="dashboard-summary__card">
                <section>
                    <DashboardCard.Icon className="size-10">
                        <Icon />
                    </DashboardCard.Icon>
                </section>

                <section className="flex flex-col !justify-start">
                    <DashboardCard.Title title={title} />

                    <div className="flex-wrap w-full !justify-start">
                        {products.map(function (value, index) {
                            return (
                                <article className="w-1/2" key={index}>
                                    {value}
                                </article>
                            );
                        })}
                    </div>
                </section>
            </DashboardCard>
        </li>
    );
}
