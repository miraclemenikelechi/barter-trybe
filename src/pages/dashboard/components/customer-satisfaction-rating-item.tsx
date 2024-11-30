import SatisfactionCard from "@/components/satisfaction";

import { SATISFACTION_TYPE } from "../types";

export function renderSatisfactionRatingItem(
    value: SATISFACTION_TYPE,
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
