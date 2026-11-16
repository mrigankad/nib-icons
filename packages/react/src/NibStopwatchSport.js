import { createElement as h, forwardRef } from 'react';

export const NibStopwatchSport = forwardRef(function NibStopwatchSport({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "14", r: "8", fill: "none" }),
    h('path', { d: "M10 2h4M12 2v4M12 14l3-3M19 6l1.5-1.5", fill: "none" })
  );
});

export default NibStopwatchSport;
