import { FormInputProps } from "../types";

export default function Component({
    className,
    error,
    label,
    name,
    onChange,
    placeholder,
    value,
    ...rest
}: FormInputProps) {
    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                {...rest}
            />
            {error ? (
                <span className="-mt-2 text-sm text-red-400">{error}</span>
            ) : null}
        </div>
    );
}
