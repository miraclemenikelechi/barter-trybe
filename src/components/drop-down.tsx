import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { cn } from "@/lib/utils";
import { DropdownOption } from "@/types/drop-down";

type DropdownProps = {
    onChange: Dispatch<SetStateAction<DropdownOption>>;
    options: DropdownOption[];
    value: DropdownOption;
    className?: string;
    placeholder?: string;
    showPlaceholder?: boolean;
};

export default function Component({
    className,
    onChange,
    options,
    placeholder = "Select",
    showPlaceholder = true,
    value,
}: DropdownProps) {
    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        const selected = event.target.value;
        const selectedOption = options.find(
            (option) => option.value.toString() === selected
        );

        if (selectedOption) onChange(selectedOption);
    }

    return (
        <select
            className={cn(className, "size-full")}
            value={value.value}
            onChange={handleChange}
        >
            {showPlaceholder && !value ? (
                <option value="">{placeholder}</option>
            ) : null}

            {options.map(renderOptions)}
        </select>
    );
}

function renderOptions(value: DropdownOption, index: number) {
    return (
        <option key={index} value={value.value}>
            {value.label}
        </option>
    );
}
