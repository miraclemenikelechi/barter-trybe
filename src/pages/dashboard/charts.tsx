import SatisfactionCard from "@/components/satisfaction";

import { renderSatisfactionRatingItem } from "./components/customer-satisfaction-rating-item";
import { renderGenralSummaryItem } from "./components/general-summary-item";
import SalesTrendChart from "./components/sales-trend-chart";
import { GENERAL_SUMMARY } from "./config";
import { generateRandomSatisfactionData } from "./utils/generate-random-charts-data";

export default function Component() {
    return (
        <main className="dashboard-charts">
            <section className="dashboard-charts__top">
                <GeneralSummary />
                <SatisfactionSummary />
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

function GeneralSummary() {
    return (
        <div className="dashboard-charts__summary">
            <aside>
                <h3>General Summary</h3>
                <div>dropdown component</div>
            </aside>

            <ul>{GENERAL_SUMMARY.map(renderGenralSummaryItem)}</ul>
        </div>
    );
}

function SatisfactionSummary() {
    return (
        <div className="dashboard-charts__satisfaction">
            <SatisfactionCard>
                <SatisfactionCard.Title
                    title="Customer Satisfaction"
                    className="dashboard-charts__satisfaction__title"
                />

                <ul className="dashboard-charts__satisfaction__list">
                    {generateRandomSatisfactionData().map(
                        renderSatisfactionRatingItem
                    )}
                </ul>
            </SatisfactionCard>
        </div>
    );
}
