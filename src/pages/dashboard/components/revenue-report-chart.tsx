import { useState } from "react";

import ChartCard from "@/components/chart-card";
import Dropdown from "@/components/drop-down";
import LineChart from "@/components/ui/line-chart";
import { APP_CONSTANTS } from "@/lib/constants";
import { DropdownOption } from "@/types/drop-down";
import { transformDataForApexChart } from "@/utils/transdorm-data-to-apex-format";

import { REPORT_REVENUE } from "../config";

export default function Component() {
    const [selected, setSelected] = useState<DropdownOption>(
        APP_CONSTANTS.CHART_DROPDOWN_OPTIONS[0]
    );

    const chartData = transformDataForApexChart({
        categoryKey: "duration",
        data: REPORT_REVENUE[selected.value as keyof typeof REPORT_REVENUE],
        seriesName: "Revenue",
        valueKey: "sales",
    });

    return (
        <ChartCard>
            <ChartCard.Header
                title="Revenue Report"
                description="Income Over Time"
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
                chart={<LineChart data={chartData} />}
            />
        </ChartCard>
    );
}
