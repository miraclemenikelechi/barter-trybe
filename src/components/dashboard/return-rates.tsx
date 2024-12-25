import { useState } from "react";

import ChartCard from "@/components/chart-card";
import Dropdown from "@/components/drop-down";
import PieChart from "@/components/ui/full-pie-chart";
import { APP_CONSTANTS } from "@/lib/constants";
import { RETURN_RATE } from "@/lib/dashboard-page.config";
import { DropdownOption } from "@/types/drop-down";
import { transformDataForApexChart } from "@/utils/transdorm-data-to-apex-format";

export default function Component() {
    const [selected, setSelected] = useState<DropdownOption>(
        APP_CONSTANTS.CHART_DROPDOWN_OPTIONS[0]
    );

    const chartData = transformDataForApexChart({
        categoryKey: "duration",
        data: RETURN_RATE[selected.value as keyof typeof RETURN_RATE],
        seriesName: "Return Rate",
        valueKey: "sales",
    });

    return (
        <ChartCard>
            <ChartCard.Header
                title="Return Rate"
                description="New VS Returning Customers"
                className="px-3"
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
                chart={<PieChart data={chartData} />}
                className="size-full"
            />
        </ChartCard>
    );
}
