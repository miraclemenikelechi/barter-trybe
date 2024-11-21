import Spinner from "@/components/spinner";
import { cn } from "@/lib/utils";

import { FormButtonProps } from "../types";

export default function Component({
    className,
    disabled,
    filled,
    label,
    ...rest
}: FormButtonProps) {
    const styles = {
        button: filled ? `bg-[var(--blue--100)]` : `bg-[var(--white--100)]`,
        span: disabled
            ? "text-gray-400"
            : filled
            ? `text-[var(--white--100)]`
            : `text-[var(--blue--100)]`,
        disabled: disabled
            ? `opacity-50 bg-[var(--blue--300)] cursor-not-allowed text-[var(--white--100)]`
            : ``,
    };

    return (
        <button
            className={cn(styles.button, styles.disabled, className)}
            disabled={disabled}
            {...rest}
        >
            <span className={styles.span}>{label}</span>
            {disabled ? <Spinner /> : null}
        </button>
    );
}
