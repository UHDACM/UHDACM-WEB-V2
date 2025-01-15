import { useEffect, useRef, useState } from "react";

type TransitionType = "horizontalExpand";
export default function Transition({
  type,
  toggle,
  forceStyle,
  children,
  transitionEffectsSize=false,
}: {
  children?: React.ReactNode;
  forceStyle?: React.CSSProperties;
  type: TransitionType;
  toggle: boolean;
  transitionEffectsSize?: boolean;
}) {
    const [tV, setTV] = useState(0); // short for Transition Value
    const intervalRef = useRef(-1); // stores interval to cancel later if toggle is changed mid transition
    useEffect(() => {
        function cancelInterval() {
            
        }
        let count = 0;
        intervalRef.current = setInterval(() => {
            if (toggle) {
                if (count <= 100) {
                    setTV(count/100);
                    count++;
                } else {
                    clearInterval(intervalRef.current);
                }
            } else {
                if (count >= 0) {
                    setTV(count/100);
                    count--;
                } else {
                    clearInterval(intervalRef.current);
                }
            }
            console.log('interval');
        }, 30);
    }, [toggle]);
  return (
    <div style={{ ...forceStyle }}>
      {type == "horizontalExpand" && (
        <HorizontalExpandTransition>
            tV: {tV}
            {/* {children} */}
        </HorizontalExpandTransition>
      )}
    </div>
  );
}

function HorizontalExpandTransition({
  children,
  transitionEffectsSize=false
}: {
  children?: React.ReactNode;
  transitionEffectsSize?: boolean;
}) {
  return children;
}
