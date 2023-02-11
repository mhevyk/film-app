import useWindowDimensions from "./useWindowDimensions";

export function useSlidesPerView(occurencyCoefitient, maxSlides = Infinity) {
    const { width } = useWindowDimensions();
    let slidesToShow = 1;
    if (width < 450) {
        return slidesToShow;
    }

    slidesToShow = Math.floor(width / occurencyCoefitient) + 0.4;

    if (slidesToShow > maxSlides) {
        return maxSlides;
    }

    return slidesToShow;
}