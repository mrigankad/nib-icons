import { createElement as h, forwardRef } from 'react';

export const NibWatchAnalog = forwardRef(function NibWatchAnalog({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "7", fill: "none" }),
    h('path', { d: "M12 8.5V12l2.5 1.5M9 5.3L10 2h4l1 3.3M9 18.7l1 3.3h4l1-3.3M18.5 11v2", fill: "none" })
  );
});

export default NibWatchAnalog;
