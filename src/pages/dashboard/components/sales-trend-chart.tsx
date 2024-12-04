import { useState } from "react";

import ChartCard from "@/components/chart-card";
import Dropdown from "@/components/drop-down";
import BarChart from "@/components/ui/bar-chart";
import { APP_CONSTANTS } from "@/lib/constants";
import { DropdownOption } from "@/types/drop-down";

import { SALES_TRENDS } from "../config";
import { SALES_TREND_ITEM_TYPE } from "../types";

export default function Component() {
    const [selected, setSelected] = useState<DropdownOption>(
        APP_CONSTANTS.CHART_DROPDOWN_OPTIONS[0]
    );

    function transformDataForApexChart(data: SALES_TREND_ITEM_TYPE[]) {
        return {
            series: [{ name: "Sales", data: data.map((item) => item.sales) }],
            categories: data.map((item) => item.duration),
        };
    }

    return (
        <ChartCard>
            <ChartCard.Header
                title="Sales Trend"
                description="Number Of Sales Made Over Time"
                dropdown={
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
                }
            />

            <hr />

            <ChartCard.Footer className="px-1 py-0"
                chart={
                    <BarChart
                        data={transformDataForApexChart(
                            SALES_TRENDS[
                                selected.value as keyof typeof SALES_TRENDS
                            ]
                        )}
                    />
                }
            />
        </ChartCard>
    );
}
