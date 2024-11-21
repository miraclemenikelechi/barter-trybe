import {
    ChangeEvent,
    ClipboardEvent,
    KeyboardEvent,
    useEffect,
    useRef,
    useState,
} from "react";

/**
 * Custom hook for handling OTP input logic.
 *
 * @param length - Number of OTP input fields.
 * @returns Object containing OTP state and handlers.
 */
export function useOtpHandler(length: number) {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
    const [activeInputIndex, setActiveInputIndex] = useState<number>(0);
    const inputRefs = useRef<HTMLInputElement[]>([]);

    /**
     * Handles change event for OTP input fields.
     *
     * @param event - Change event from input element.
     * @param index - Index of the input field.
     */
    function handleChange(
        event: ChangeEvent<HTMLInputElement>,
        index: number
    ): void {
        const value = event.target.value;

        if (isNaN(Number(value))) return; // already disabled in CSS but just in case

        /**
         * Update OTP state with changed value.
         */
        const OTP: string[] = [...otp];
        OTP[activeInputIndex] = value.substring(value.length - 1); // get last digit pressed
        setOtp(OTP);

        /**
         * Move focus to next input field if value is entered.
         */
        if (value && index < length - 1) {
            setActiveInputIndex(index + 1);
            inputRefs.current[index + 1]?.focus();
        }
    }

    /**
     * Handles key down event for OTP input fields.
     *
     * @param event - Key down event from input element.
     * @param index - Index of the input field.
     */
    function handleKeyDown(
        event: KeyboardEvent<HTMLInputElement>,
        index: number
    ): void {
        if (event.key === "Backspace") {
            event.preventDefault();

            /**
             * Clear current input value if not empty.
             */
            if (otp[index]) {
                const OTP: string[] = [...otp];
                OTP[index] = "";
                setOtp(OTP);
            } else if (index > 0) {
                /**
                 * Move focus to previous input field if current input is empty.
                 */
                setActiveInputIndex(index - 1);
            }
        }
    }

    /**
     * Handles paste event to allow pasting the full OTP.
     *
     * @param event - Clipboard event from input element.
     */
    function handlePaste(event: ClipboardEvent<HTMLInputElement>): void {
        event.preventDefault();
        const pasteData = event.clipboardData.getData("text");

        if (!/^\d+$/.test(pasteData)) return; // Ensure only numbers are pasted

        const OTP = pasteData.split("").slice(0, length); // Limit to OTP length

        setOtp((previous) => {
            const newOtp = [...previous];
            OTP.forEach((value, index) => {
                if (index < length) newOtp[index] = value;
            });

            return newOtp;
        });

        // Move focus to the next empty input after pasting
        const filledIndex = OTP.length - 1;
        const nextIndex = Math.min(filledIndex + 1, length - 1);
        setActiveInputIndex(nextIndex);
        inputRefs.current[nextIndex]?.focus();
    }

    /**
     * Check if a field should be disabled.
     *
     * @param index - Index of the field to check.
     * @returns True if the field should be disabled.
     */
    function isFieldDisabled(index: number): boolean {
        return index !== activeInputIndex;
    }

    /**
     * Ensures focus is set to the active input field.
     */
    useEffect(() => {
        if (inputRefs.current[activeInputIndex]) {
            inputRefs.current[activeInputIndex]?.focus();
        }
    }, [activeInputIndex]);

    /**
     * Check if OTP is complete.
     */
    const isOtpComplete = otp.every((value) => !!value);

    return {
        handleChange,
        handleKeyDown,
        handlePaste,
        isFieldDisabled,
        activeInputIndex,
        inputRefs,
        isOtpComplete,
        otp,
    };
}
