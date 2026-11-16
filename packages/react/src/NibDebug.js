import { createElement as h, forwardRef } from 'react';

export const NibDebug = forwardRef(function NibDebug({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "11", cy: "11", r: "7.5", fill: "none" }),
    h('path', { d: "M21 21l-4.5-4.5M9 9a2 2 0 0 1 4 0v3.5a2 2 0 0 1-4 0zM7 10.5h2M13 10.5h2", fill: "none" })
  );
});

export default NibDebug;
