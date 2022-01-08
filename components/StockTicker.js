import { useState } from "react";
import Marquee from "react-marquee-slider";
import PropTypes from "prop-types";
import times from "lodash/times";

export default function StockTicker({ text }) {
  // still some unresolved issues with padding/margin
  // have to try on build server to check
  // on hot reload, the margin returns
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="bg-yellow-400 text-gray-800 uppercase tracking-wide font-bold"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Marquee velocity={paused ? 0 : 2}>
        {times(10, Number)
          .map((_) =>
            [].concat(text).map((text, i) => (
              <div key={i} className="m-3">
                {text}
              </div>
            ))
          )
          .flat()}
      </Marquee>
    </div>
  );
}

StockTicker.propTypes = {
  text: PropTypes.oneOf([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string).isRequired,
  ]),
};
