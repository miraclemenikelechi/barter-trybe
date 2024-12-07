import { useState } from "react";

import DashboardTable from "@/components/dashboard-table";
import Dropdown from "@/components/drop-down";
import SatisfactionCard from "@/components/satisfaction";
import { APP_CONSTANTS } from "@/lib/constants";
import { DropdownOption } from "@/types/drop-down";
import { CHARTS_PAGE_TABLE } from "@/types/tables";

import { renderSatisfactionRatingItem } from "./components/customer-satisfaction-rating-item";
import { renderGeneralSummaryItem } from "./components/general-summary-item";
import ReturnRateChart from "./components/return-rates-chart";
import RevenueReportChart from "./components/revenue-report-chart";
import SalesTrendChart from "./components/sales-trend-chart";
import { GENERAL_SUMMARY } from "./config";
import {
    generateRandomSatisfactionData,
    generateTableData,
} from "./utils/generate-random-charts-data";

export default function Component() {
    return (
        <main className="dashboard-charts">
            <section className="dashboard-charts__top">
                <GeneralSummary />
                <SatisfactionSummary />
            </section>

            <section className="dashboard-charts__center">
                <div>{SalesTrendChart()}</div>
                <div>{RevenueReportChart()}</div>
            </section>

            <section className="dashboard-charts__bottom">
                <div>{ReturnRateChart()}</div>
                <div>{TopProductsTable()}</div>
                <div>{LowStockTable()}</div>
            </section>
        </main>
    );
}

function GeneralSummary() {
    const [selected, setSelected] = useState<DropdownOption>(
        APP_CONSTANTS.CHART_DROPDOWN_OPTIONS[0]
    );

    const data =
        GENERAL_SUMMARY[selected.value as keyof typeof GENERAL_SUMMARY];

    return (
        <div className="dashboard-charts__summary">
            <aside>
                <h3>General Summary</h3>
                <div className="flex items-center justify-center">
                    <Dropdown
                        onChange={(option) =>
                            setSelected(
                                APP_CONSTANTS.CHART_DROPDOWN_OPTIONS.find(
                                    (item) => item.value === option
                                )!
                            )
                        }
                        options={APP_CONSTANTS.CHART_DROPDOWN_OPTIONS}
                        value={selected}
                        placeholder="Filter By..."
                    />
                </div>
            </aside>

            <ul>{data.map(renderGeneralSummaryItem)}</ul>
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

function TopProductsTable() {
    return (
        <DashboardTable className="flex flex-col">
            <DashboardTable.Header href="" title="Top Products" />
            <DashboardTable.Footer
                columns={
                    APP_CONSTANTS.TABLE_COLUMNS.DASHBOARD as {
                        value: keyof CHARTS_PAGE_TABLE;
                        label: string;
                    }[]
                }
                data={generateTableData(10)}
                sticky="name"
                styles={{
                    footer: "flex-1 overflow-hidden",
                    name: "font-medium !text-[var(--blue--900)] !text-left",
                    price: "!font-semibold",
                }}
            />
        </DashboardTable>
    );
}

function LowStockTable() {
    return (
        <DashboardTable className="flex flex-col">
            <DashboardTable.Header href="" title="Low Stock" />
            <DashboardTable.Footer
                columns={
                    APP_CONSTANTS.TABLE_COLUMNS.DASHBOARD as {
                        value: keyof CHARTS_PAGE_TABLE;
                        label: string;
                    }[]
                }
                data={generateTableData(20)}
                sticky="name"
                styles={{
                    name: "!text-red-600 font-medium !text-left",
                    footer: "flex-1 overflow-hidden",
                    price: "!font-semibold",
                }}
            />
        </DashboardTable>
    );
}
