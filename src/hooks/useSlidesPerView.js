import useWindowDimensions from './useWindowDimensions';

export function useSlidesPerView({
  oneSlideBreakpoint = 450,
  breakpointPeriod,
  lastSlideVisiblePercent = 40,
}) {
  const { width } = useWindowDimensions();
  let slidesToShow = 1;
  
  if (width < oneSlideBreakpoint) {
    return slidesToShow;
  }

  slidesToShow =
    Math.floor(width / breakpointPeriod) + lastSlideVisiblePercent / 100;

  return slidesToShow;
}
