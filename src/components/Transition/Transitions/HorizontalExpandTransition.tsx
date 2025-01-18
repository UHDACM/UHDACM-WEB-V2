import { easingType, getEasingFunction } from "../../../scripts/easingFunctions";

/**
 * Transition that horizontally expands its contents.
 * @param param0 
 * @returns 
 */
export function HorizontalExpandTransition({
    children,
    tV,
    easing,
    forceStyle
  }: {
    children?: React.ReactNode;
    tV: number,
    easing: easingType,
    forceStyle?: React.CSSProperties
  }) {
    const transitionContainerWidth = getEasingFunction(easing)(tV);
    return <div style={{ transform: `scaleX(${transitionContainerWidth})`, ...forceStyle }}>
        {children}
    </div>;
}