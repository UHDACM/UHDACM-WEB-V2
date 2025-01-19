import { useEffect, useRef, useState } from "react";
import { easingType } from "../../scripts/easingFunctions";
import { HorizontalExpandTransition } from "./Transitions/HorizontalExpandTransition";
import { CardFlipTransition } from "./Transitions/CardFlipTransition";
import WipeTransition from "./Transitions/WipeTransition";
import DiagonalTransition from "./Transitions/DiagonalExpandTransition";
import FadeTransition from "./Transitions/FadeTransition";

type TransitionType =
  | "horizontalExpand"
  | "horizontalExpandLayered"
  | "cardFlip"
  | "wipe"
  | "diagonal"
  | "fade";
/**
 *
 * Note: container width and height do not work very well at the moment.
 * @param param0
 * @returns
 */
export default function Transition({
  type,
  toggle,
  forceStyle,
  forceClass,
  children,
  numFrames = 30,
  transitionSpeedMS = 200,
  delay = 0,
  delayBefore,
  delayAfter,
  easing = "linear",
  cardStyle,
  cardChildren,
  hideOnToggleOff = true,
}: {
  type: TransitionType;
  toggle: boolean;
  children?: React.ReactNode;
  forceStyle?: React.CSSProperties;
  forceClass?: string;
  transitionSpeedMS?: number;
  numFrames?: number;
  delay?: number;
  delayBefore?: number;
  delayAfter?: number;
  easing?: easingType;
  cardStyle?: React.CSSProperties;
  cardChildren?: React.ReactNode;
  hideOnToggleOff?: boolean;
}) {
  if (transitionSpeedMS < 1) {
    throw new Error("Transition speed cannot be less than 1 ms.");
  } else if (numFrames < 2) {
    throw new Error("Number of frames cannot be less than 2");
  } else if (delay < 0) {
    throw new Error("Delay cannot be negative");
  } else if ((delayBefore || delayAfter) && delay) {
    throw new Error("Cannot combine delay with delayBefore and delayAfter");
  }
  const [trueToggle, setTrueToggle] = useState(false);
  const trueToggleTimeoutRef = useRef(-1000);

  const [tV, setTV] = useState(0); // short for Transition Value
  const tVIntervalRef = useRef(-1294); // stores interval to cancel later if toggle is changed mid transition
  const transitionUpdateDelayMS = transitionSpeedMS / numFrames;

  // if delay is active, true toggle will be changed some time after toggle is changed.
  useEffect(() => {
    clearTimeout(trueToggleTimeoutRef.current);
    if (delay) {
      trueToggleTimeoutRef.current = setTimeout(() => {
        setTrueToggle(toggle);
      }, delay);
    } else if (delayBefore && toggle) {
      trueToggleTimeoutRef.current = setTimeout(() => {
        setTrueToggle(toggle);
      }, delayBefore);
    } else if (delayAfter && !toggle) {
      trueToggleTimeoutRef.current = setTimeout(() => {
        setTrueToggle(toggle);
      }, delayAfter);
    } else {
      setTrueToggle(toggle);
    }
  }, [
    toggle,
    delay,
    delayBefore,
    delayAfter,
    setTrueToggle,
    trueToggle,
    trueToggleTimeoutRef,
  ]);

  // handles adjusting tV according to value of
  useEffect(() => {
    function cancelInterval() {
      clearInterval(tVIntervalRef.current);
    }
    cancelInterval();
    let count = Math.floor(tV * numFrames);
    tVIntervalRef.current = setInterval(() => {
      if (trueToggle) {
        if (count <= numFrames) {
          setTV(count / numFrames);
          count++;
        } else {
          cancelInterval();
        }
      } else {
        if (count >= 0) {
          setTV(count / numFrames);
          count--;
        } else {
          cancelInterval();
        }
      }
    }, transitionUpdateDelayMS);
  }, [trueToggle]);

  if (hideOnToggleOff && tV == 0) {
    return null;
  }

  return (
    <>
      {type == "horizontalExpand" && (
        <HorizontalExpandTransition
          forceStyle={forceStyle}
          tV={tV}
          easing={easing}
          forceClass={forceClass}
        >
          {children}
        </HorizontalExpandTransition>
      )}

      {type == "cardFlip" && (
        <CardFlipTransition
          tV={tV}
          easing={easing}
          cardChildren={cardChildren}
          cardStyle={cardStyle}
          forceStyle={forceStyle}
          forceClass={forceClass}
        >
          {children}
        </CardFlipTransition>
      )}

      {type == "wipe" && (
        <WipeTransition
          toggle={trueToggle}
          easing={easing}
          tV={tV}
          children={children}
          forceStyle={forceStyle}
          forceClass={forceClass}
        />
      )}
      {type == "diagonal" && (
        <DiagonalTransition
          toggle={trueToggle}
          easing={easing}
          tV={tV}
          children={children}
          forceStyle={forceStyle}
          forceClass={forceClass}
        />
      )}
      {type == "fade" && (
        <FadeTransition
          tV={tV}
          children={children}
          forceStyle={forceStyle}
          forceClass={forceClass}
        />
      )}
    </>
  );
}
