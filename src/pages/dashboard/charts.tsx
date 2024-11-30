import SatisfactionCard from "@/components/satisfaction";

import { renderSatisfactionRatingItem } from "./components/customer-satisfaction-rating-item";
import { renderGenralSummaryItem } from "./components/general-summary-item";
import { MyResponsivePie } from "./components/return-rates-chart";
import { MyResponsiveLine } from "./components/revenue-report-chart";
import SalesTrendChart from "./components/sales-trend-chart";
import { GENERAL_SUMMARY, SATISFACTION } from "./config";

export default function Component() {
    return (
        <main className="dashboard-charts">
            {/* TOP SECTION */}
            <section className="dashboard-charts__top">
                {/* GENERAL SUMMARY */}
                <div className="dashboard-charts__summary">
                    <aside>
                        <h3>General Summary</h3>
                        <div>dropdown component</div>
                    </aside>

                    <ul>{GENERAL_SUMMARY.map(renderGenralSummaryItem)}</ul>
                </div>

                {/* CUSTOMER SATISFACTION */}
                <div className="dashboard-charts__satisfaction">
                    <SatisfactionCard>
                        <SatisfactionCard.Title
                            title="Customer Satisfaction"
                            className="dashboard-charts__satisfaction__title"
                        />

                        <ul className="dashboard-charts__satisfaction__list">
                            {SATISFACTION.map(renderSatisfactionRatingItem)}
                        </ul>
                    </SatisfactionCard>
                </div>
            </section>

            <section className="dashboard-charts__center">
                <div>
                    <SalesTrendChart />
                </div>
                <div>
                    <SalesTrendChart />
                </div>
            </section>

            <section className="dashboard-charts__bottom"></section>
        </main>
    );
}
