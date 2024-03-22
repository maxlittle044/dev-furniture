import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import './card-counter.scss'

export default function Counter({
  startFrom,
  endTo,
  duration,
  cardCounterTitle,
  plusSign
}) {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <VisibilitySensor
      active={true}
      onChange={isVisible => {
        if (isVisible && !viewPortEntered) {
          setViewPortEntered(true);
        }
      }}
      delayedCall
    >
      {({ isVisible }) => (
        <div className="card-counter">
          <h2>
            <CountUp
              useEasing={false}
              start={viewPortEntered ? startFrom : null}
              end={isVisible ? endTo : null}
              duration={duration}
            />
            {plusSign && <span>+</span>}
          </h2>
          <p>{cardCounterTitle}</p>
        </div>
      )}
    </VisibilitySensor>
  );
}
