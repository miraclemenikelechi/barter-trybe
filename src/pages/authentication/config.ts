import { CSSObjectWithLabel, StylesConfig } from "react-select";

import { businessOption } from "./types";

/**
 * Custom styles for select input.
 */
export const dropdownStyles: StylesConfig<businessOption, false> = {
    /**
     * Styles for the container (outermost) element of the Select component.
     * @param base - The base styles provided by the Select component.
     * @returns The new styles object with the desired width and height.
     */
    container: function (base: CSSObjectWithLabel) {
        return {
            ...base,
            width: "100%",
            height: "3rem",
        };
    },
    /**
     * Styles for the control element (the visible part of the Select component).
     * @param base - The base styles provided by the Select component.
     * @returns The new styles object with the desired height.
     */
    control: (base: CSSObjectWithLabel) => ({
        ...base,
        height: "3rem",
    }),
    /**
     * Styles for the value container element (the container for the selected value
     * or placeholder text). This styles the container to have a fixed height and
     * aligns the content vertically to the center.
     * @param base - The base styles provided by the Select component.
     * @returns The new styles object with the desired height and alignment.
     */
    valueContainer: (base: CSSObjectWithLabel) => ({
        ...base,
        height: "3rem",
        alignContent: "center",
    }),
    /**
     * Styles for the indicators container element (the container for dropdown indicators
     * such as the dropdown arrow). This sets the height to occupy the full height of
     * the select component, ensuring proper alignment of the indicators.
     * @param base - The base styles provided by the Select component.
     * @returns The new styles object with the desired height.
     */
    indicatorsContainer: (base: CSSObjectWithLabel) => ({
        ...base,
        height: "100%",
    }),
    /**
     * Styles for the indicators separator element (the separator between the selected
     * value and the dropdown indicators). This sets the display to "none" to hide the
     * separator, as it is not needed in this select component.
     * @param base - The base styles provided by the Select component.
     * @returns The new styles object with the desired display.
     */
    indicatorSeparator: (base: CSSObjectWithLabel) => ({
        ...base,
        display: "none",
    }),
};
