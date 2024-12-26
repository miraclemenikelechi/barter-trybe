import { FormEvent, useEffect, useReducer } from "react";

import Dropdown from "@/components/drop-down";
import { PRODUCTS_FILTER } from "@/lib/analytics.config";
import { cn } from "@/lib/utils";
import type { IDropdownOption, ProductsFilter } from "@/types";

/**
 * Actions for the filter reducer.
 */
type FilterActions =
    | { type: "INITIALIZE"; filters: ProductsFilter[] }
    | { type: "UPDATE"; title: string; selected: IDropdownOption }
    | { type: "RESET" };

/**
 * Reducer function to manage filter state.
 *
 * @param state - Current state of the filters.
 * @param action - Action to perform on the state.
 * @returns Updated state after applying the action.
 */
function reducer(
    state: Record<string, IDropdownOption | null>,
    action: FilterActions
) {
    switch (action.type) {
        case "INITIALIZE":
            return action.filters.reduce(
                function (previousValue, currentValue) {
                    previousValue[currentValue.title] = null;
                    return previousValue;
                },
                {} as Record<string, IDropdownOption | null>
            );

        case "UPDATE":
            return {
                ...state,
                [action.title]: action.selected,
            };

        case "RESET":
            return Object.keys(state).reduce(
                function (previousValue, currentValue) {
                    previousValue[currentValue] = null;
                    return previousValue;
                },
                {} as Record<string, IDropdownOption | null>
            );

        default:
            return state;
    }
}

/**
 * Filter Component
 *
 * This component renders a form with dropdown filters for products and handles filter changes.
 *
 * @returns {JSX.Element} The rendered filter form.
 */
export default function Component(): JSX.Element {
    const [selectedFilters, dispatch] = useReducer(reducer, {});

    useEffect(function () {
        dispatch({
            type: "INITIALIZE",
            filters: PRODUCTS_FILTER,
        });
    }, []);

    /**
     * Handles changes in filter selection.
     *
     * @param title - The title of the filter being updated.
     * @param selectedOption - The selected option for the filter.
     */
    function handleFilterChange(
        title: string,
        selectedOption: IDropdownOption
    ) {
        dispatch({
            type: "UPDATE",
            title,
            selected: selectedOption,
        });
    }

    /**
     * Handles the submission of the filter form.
     *
     * @param event - The form submission event.
     */
    function handleApplyFilters(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(selectedFilters);
    }

    return (
        <form className={cn("flex gap-6")} onSubmit={handleApplyFilters}>
            <div className={cn("flex flex-1 justify-between gap-6")}>
                {PRODUCTS_FILTER.map((filter) => (
                    <Filter
                        key={filter.title}
                        title={filter.title}
                        options={filter.options}
                        value={selectedFilters[filter.title]}
                        onChange={(selectedOption) =>
                            handleFilterChange(filter.title, selectedOption)
                        }
                    />
                ))}
            </div>

            <FilterActionButtons onClear={() => dispatch({ type: "RESET" })} />
        </form>
    );
}

/**
 * FilterActionButtons Component
 *
 * This component renders buttons for applying or resetting filters.
 *
 * @param onClear - Function to call when clearing filters.
 */
function FilterActionButtons({ onClear }: { onClear: () => void }) {
    return (
        <div className={cn("flex flex-col w-[9.75rem] gap-2.5")}>
            <button
                type="button"
                onClick={onClear}
                className={cn(
                    "analytics__filter-clear",
                    "h-10 rounded-lg text-center font-inter font-medium text-sm text-red-500"
                )}
            >
                Reset
            </button>

            <button
                type="submit"
                className={cn(
                    "analytics__filter-apply",
                    "h-10 rounded-lg text-center font-inter font-medium text-sm bg-[var(--blue--100)] text-white"
                )}
            >
                Apply Filter
            </button>
        </div>
    );
}

/**
 * Filter Component
 *
 * This component renders a dropdown filter for selecting options.
 *
 * @param onChange - Function to call when an option is selected.
 * @param options - Array of options for the dropdown.
 * @param title - Title of the filter.
 * @param value - Currently selected value for the filter.
 * @param placeholder - Placeholder text for the dropdown (optional).
 */
interface FilterProps {
    onChange: (value: IDropdownOption) => void;
    options: IDropdownOption[];
    placeholder?: string;
    title: string;
    value: IDropdownOption | null;
}

function Filter({ onChange, options, title, value, placeholder }: FilterProps) {
    /**
     * Handles change in dropdown selection.
     *
     * @param option - The value of the selected option.
     */
    function handleChange(option: string) {
        const selectedOption = options.find((item) => item.value === option);
        if (selectedOption) onChange(selectedOption);
    }

    return (
        <section className={cn("flex flex-col max-w-[14.25rem] w-full gap-2.5")}>
            <span
                className={cn(
                    "font-inter font-semibold text-base text-[var(--black--300)]"
                )}
            >
                {title}
            </span>

            <Dropdown
                onChange={handleChange}
                options={options}
                value={value ?? { value: "", label: "Filter By..." }}
                placeholder={placeholder || "Filter By..."}
                styles={{ placeholder: "text-base" }}
            />
        </section>
    );
}
