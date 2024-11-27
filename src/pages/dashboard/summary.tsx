import { Fragment } from "react";

import { Dashboard_Revenue } from "@/assets/icons";
import DashboardCard from "@/components/dashboard-card";

import { DASHBOARD_SUMMARY } from "./config";

export default function Component() {
    return (
        <Fragment>
            <main className="dashboard-summary__top">
                <ul>
                    {DASHBOARD_SUMMARY.map(function (value, index) {
                        function formatValue(cardValue: number) {
                            switch (true) {
                                case value.isMoney:
                                    return (
                                        String.fromCharCode(8358) +
                                        cardValue.toLocaleString("en-NG")
                                    );

                                default:
                                    return cardValue.toLocaleString();
                            }
                        }

                        return (
                            <li
                                key={index}
                                className="dashboard-summary__top__item"
                            >
                                <DashboardCard className="dashboard-summary__card">
                                    <section>
                                        <DashboardCard.Icon className="size-10">
                                            <Dashboard_Revenue />
                                        </DashboardCard.Icon>
                                    </section>
                                    <section>
                                        <DashboardCard.Title
                                            title={value.title}
                                        />

                                        <div className="flex items-start justify-start w-full gap-4">
                                            <DashboardCard.LeftContent
                                                className="dashboard-summary__card__left"
                                                isRating={value.isRating}
                                                value={formatValue(
                                                    value.lastWeek
                                                )}
                                            />
                                            <DashboardCard.RightContent
                                                className="dashboard-summary__card__right"
                                                isProfit={value.isProfit}
                                                profit={`${value.profit}%`}
                                                value={formatValue(
                                                    value.thisWeek
                                                )}
                                                isRating={value.isRating}
                                            />
                                        </div>

                                        <DashboardCard.Prediction value="+18%" />
                                    </section>
                                </DashboardCard>
                            </li>
                        );
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
