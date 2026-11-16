import { createElement as h, forwardRef } from 'react';

export const NibOrange = forwardRef(function NibOrange({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "13", r: "8", fill: "none" }),
    h('path', { d: "M12 5V3M12 5c1-2 3-3 5-2-1 2-3 2-5 2zM9 10h.01M15 12h.01M11 16h.01", fill: "none" })
  );
});

export default NibOrange;
