import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { DropdownOption } from "@/types/drop-down";

type DropdownProps = {
    onChange: (value: string) => void;
    options: DropdownOption[];
    value: DropdownOption;
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
            <SelectContent>{options.map(renderOptions)}</SelectContent>
        </Select>
    );
}

function renderOptions(value: DropdownOption, index: number) {
    return (
        <SelectItem key={index} value={value.value}>
            <span
                className={cn("font-poppins text-xs text-[var(--black--500)]")}
            >
                {value.label}
            </span>
        </SelectItem>
    );
}
