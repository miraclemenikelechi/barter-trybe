import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { IDropdownOption } from "@/types";

type DropdownProps = {
    onChange: (value: string) => void;
    options: IDropdownOption[];
    value: IDropdownOption;
    placeholder?: string;
    styles?: { [key: string]: string };
};

export default function Component({
    onChange,
    options,
    placeholder = "Select",
    value,
    styles,
}: DropdownProps) {
    return (
        <Select value={value.value} onValueChange={onChange}>
            <SelectTrigger className={cn(styles?.trigger, "dropdown-trigger")}>
                <SelectValue
                    placeholder={
                        options.find((item) => item.value === value.value)
                            ?.label || placeholder
                    }
                />
            </SelectTrigger>

            <SelectContent>
                {options.map(function (value: IDropdownOption, index: number) {
                    return (
                        <SelectItem key={index} value={value.value}>
                            <span
                                className={cn(
                                    "font-inter text-xs text-[var(--black--500)]",
                                    styles?.placeholder
                                )}
                            >
                                {value.label}
                            </span>
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </Select>
    );
}
