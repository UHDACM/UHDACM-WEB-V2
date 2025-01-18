import {
  easingType,
  getEasingFunction,
} from "../../../scripts/easingFunctions";

export default function WipeTransition({
  tV,
  children,
  easing,
  toggle,
  forceStyle
}: {
  tV: number;
  children?: React.ReactNode;
  easing: easingType;
  toggle: boolean;
  forceStyle?: React.CSSProperties
}) {
  const easingFunction = getEasingFunction(easing);
  const tVAdjusted = easingFunction(1-tV) * 100;
  return (
    <div style={{ clipPath: `inset(0% ${toggle?0:tVAdjusted}% 0% ${toggle?tVAdjusted:0}%)`, ...forceStyle }}>
      {children}
    </div>
  );
}
