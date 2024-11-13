import DOMPurify from "dompurify";

export function purifyMarkup({ markup }: { markup: string; }): { __html: string; } {
    return {
        __html: DOMPurify.sanitize(markup),
    };
}