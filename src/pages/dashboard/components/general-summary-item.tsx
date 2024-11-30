import { GENERAL_SUMMARY_TYPE } from "../types";
import { formatValue } from "../utils/format-value";

export function renderGenralSummaryItem(
    value: GENERAL_SUMMARY_TYPE,
    index: number
) {
    return (
        <li key={index}>
            <h4>{value.title}</h4>
            <span>{formatValue(value.isMoney, value.value)}</span>
        </li>
    );
}
