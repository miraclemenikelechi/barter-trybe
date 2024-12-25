import { useState } from "react";

import ChartCard from "@/components/chart-card";
import Dropdown from "@/components/drop-down";
import BarChart from "@/components/ui/bar-chart";
import { APP_CONSTANTS } from "@/lib/constants";
import { SALES_TRENDS } from "@/lib/dashboard-page.config";
import type { IDropdownOption } from "@/types";
import { transformDataForApexChart } from "@/utils/transdorm-data-to-apex-format";

export default function Component() {
    const [selected, setSelected] = useState<IDropdownOption>(
        APP_CONSTANTS.CHART_DROPDOWN_OPTIONS[0]
    );

    const chartData = transformDataForApexChart({
        categoryKey: "duration",
        data: SALES_TRENDS[selected.value as keyof typeof SALES_TRENDS],
        seriesName: "Sales",
        valueKey: "sales",
    });

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

            <ChartCard.Footer
                className="px-1 py-0"
                chart={<BarChart data={chartData} />}
            />
        </ChartCard>
    );
}
