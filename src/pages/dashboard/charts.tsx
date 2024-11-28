import SatisfactionCard from "@/components/satisfaction";

import { GENERAL_SUMMARY, SATISFACTION } from "./config";
import { formatValue } from "./utils/format-value";

export default function Component() {
    return (
        <main className="dashboard-charts">
            <section className="dashboard-charts__top">
                <div className="dashboard-charts__summary">
                    <aside>
                        <h3>General Summary</h3>
                        <div>dropdown component</div>
                    </aside>

                    <ul>
                        {GENERAL_SUMMARY.map(function (value, index) {
                            return (
                                <li key={index}>
                                    <h4>{value.title}</h4>
                                    <span>
                                        {formatValue(
                                            value.isMoney,
                                            value.value
                                        )}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="dashboard-charts__satisfaction">
                    <SatisfactionCard>
                        <SatisfactionCard.Title
                            title="Customer Satisfaction"
                            className="dashboard-charts__satisfaction__title"
                        />

                        <ul className="dashboard-charts__satisfaction__list">
                            {SATISFACTION.map(function (value, index) {
                                return (
                                    <li key={index}>
                                        <SatisfactionCard.Rating
                                            percentage={value.percentage}
                                            rating={value.rating}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </SatisfactionCard>
                </div>
            </section>

            <section className="dashboard-charts__center"></section>

            <section className="dashboard-charts__bottom"></section>
        </main>
    );
}
