import useWindowDimensions from "./useWindowDimensions";

export function useSlidesPerView(occurencyCoefitient) {
    const { width } = useWindowDimensions();
    return (width < 500) ? 1 : Math.round(width / occurencyCoefitient) + 0.4;
}