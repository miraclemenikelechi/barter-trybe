import { formatValue } from "@/utils/format-value";

import { GENERAL_SUMMARY_ITEM_TYPE } from "../types";

export function renderGeneralSummaryItem(
    value: GENERAL_SUMMARY_ITEM_TYPE,
    index: number
) {
    return (
        <li key={index}>
            <h4>{value.title}</h4>
            <span>{formatValue(value.isMoney, value.value)}</span>
        </li>
    );
}
