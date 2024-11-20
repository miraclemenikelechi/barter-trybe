import nProgress from "nprogress";
import {
    Fragment,
    PropsWithChildren,
    ReactNode,
    Suspense,
    useEffect,
    useState,
} from "react";

type DelayedSuspenseProps = PropsWithChildren & {
    delay?: number;
    fallback?: ReactNode;
};

export function DelayedSuspense({
    children,
    delay,
    fallback,
}: DelayedSuspenseProps) {
    const [showFallback, setShowFallback] = useState<boolean>(false);

    useEffect(
        function () {
            nProgress.start();

            const timer: NodeJS.Timeout = setTimeout(function () {
                setShowFallback(true);
                nProgress.done();
            }, delay);

            return function () {
                clearTimeout(timer);
                nProgress.done();
            };
        },
        [delay]
    );

    if (!showFallback) {
        return <Fragment>{fallback}</Fragment>;
    }

    return <Suspense fallback={fallback}>{children}</Suspense>;
}
