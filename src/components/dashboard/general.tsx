import { useState } from "react";

import Dropdown from "@/components/drop-down";
import { APP_CONSTANTS } from "@/lib/constants";
import { GENERAL_SUMMARY } from "@/lib/dashboard-page.config";
import type { IDashboardChartsGeneralSummary, IDropdownOption } from "@/types";
import { formatValue } from "@/utils/format-value";

export default function Component() {
    const [selected, setSelected] = useState<IDropdownOption>(
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

function renderGeneralSummaryItem(
    value: IDashboardChartsGeneralSummary,
    index: number
) {
    return (
        <li key={index}>
            <h4>{value.title}</h4>
            <span>{formatValue(value.isMoney, value.value)}</span>
        </li>
    );
}
