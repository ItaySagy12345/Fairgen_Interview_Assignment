import { useWindowSize } from "../../../Hooks/useWindowSize";
import { useMemo } from "react";

export function useCommentsContainer() {
    const [windowHeight, windowWidth] = useWindowSize();

    const numOfColumns = useMemo(() => {
        return windowWidth <= 1000 ? 1 : windowWidth <= 1500 ? 2 : 3;
    }, [windowWidth]);

    return {
        numOfColumns
    };
}