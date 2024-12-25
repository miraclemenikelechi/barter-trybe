import SatisfactionCard from "@/components/satisfaction";
import type { IDashboardChartCustomerSatisfaction } from "@/types";
import { generateRandomSatisfactionData } from "@/utils/dashboard-page.utils";

export default function Component() {
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

function renderSatisfactionRatingItem(
    value: IDashboardChartCustomerSatisfaction,
    index: number
) {
    return (
        <li key={index}>
            <SatisfactionCard.Rating
                percentage={value.percentage}
                rating={value.rating}
            />
        </li>
    );
}
