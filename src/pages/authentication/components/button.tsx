import { cn } from "@/lib/utils";

import { FormButtonProps } from "../types";

export default function Component({
    filled,
    label,
    className,
    ...rest
}: FormButtonProps) {
    const styles = {
        button: filled ? "bg-[var(--blue--100)]" : "bg-[var(--white--100)]",
        span: filled ? "text-[var(--white--100)]" : "text-[var(--blue--100)]",
    };

    return (
        <button {...rest} className={cn(styles.button, className)}>
            <span className={styles.span}>{label}</span>
        </button>
    );
}
