import { useWindowSize } from "../../../Hooks/useWindowSize";

export function useCommentsContainer() {
    const [windowHeight, windowWidth] = useWindowSize();

    const getNumOfColumns = () => {
        return windowWidth <= 1000 ? 1 : windowWidth <= 1500 ? 2 : 3;
    };

    return {
        getNumOfColumns
    };
}