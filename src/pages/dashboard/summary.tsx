import { Fragment } from "react";

import { Dashboard_Revenue } from "@/assets/icons";
import DashboardCard from "@/components/dashboard-card";

export default function Component() {
    return (
        <Fragment>
            <main className="dashboard-summary__top">
                <ul>
                    {[...Array(6)].map(function (value, index) {
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
                                        <DashboardCard.Title title="Total Revenue" />

                                        <div className="flex items-start justify-start w-full gap-4">
                                            <DashboardCard.LeftContent
                                                isMoney={true}
                                                value="56,665,665"
                                            />
                                            <DashboardCard.RightContent
                                                isMoney={true}
                                                isProfit={true}
                                                profit="20%"
                                                value="56,665,665"
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
