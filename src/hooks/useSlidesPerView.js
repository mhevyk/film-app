import useWindowDimensions from "./useWindowDimensions";

export function useSlidesPerView(occurencyCoefitient, maxSlides = Infinity) {
    const { width } = useWindowDimensions();
    let slidesToShow = 1;
    if (width < 500) {
        return slidesToShow;
    }

    slidesToShow = Math.round(width / occurencyCoefitient) + 0.4;

    if (slidesToShow > maxSlides) {
        return maxSlides;
    }

    return slidesToShow;
}