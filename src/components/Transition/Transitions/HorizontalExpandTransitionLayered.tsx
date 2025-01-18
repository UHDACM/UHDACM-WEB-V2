import { easingType, getEasingFunction } from "../../../scripts/easingFunctions";

/**
 * Transition that horizontally expands its contents.
 * @param param0 
 * @returns 
 */
export function HorizontalExpandTransitionLayered({
    children,
    tV,
    easing,
    layerDepth = 0,
    layerRateEasing = 'linear',
    forceStyle
  }: {
    children?: React.ReactNode;
    tV: number,
    easing: easingType,
    layerDepth?: number,
    layerRateEasing?: easingType
    forceStyle?: React.CSSProperties
  }) {
    const adjustedTV = tV * 1.5;
    const transitionContainerWidth = getEasingFunction(easing)(Math.min(adjustedTV, 1));
    const transitionLayerEasing = getEasingFunction(layerRateEasing);
    return <div style={{ transform: `scaleX(${transitionContainerWidth})`, ...forceStyle }}>
      {
        Array.from({ length: layerDepth }).map((_, layer) => {
          return <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: '#0002', transform: `scaleX(${transitionLayerEasing(1-Math.min(Math.max(adjustedTV - 0.5*((layer+1)/layerDepth)), 1))})` }} key={`HRlayer-${layer}`}/>;
        })
      }
      {children}
    </div>;
}