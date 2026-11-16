import { createElement as h, forwardRef } from 'react';

export const NibLocomotive = forwardRef(function NibLocomotive({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 17V9h9v8M12 12h8v5H3M14 12V7h4v5M5 9V5h4v4M5 3h4M20 17l2 2", fill: "none" }),
    h('circle', { cx: "6", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "15", cy: "19", r: "2", fill: "none" })
  );
});

export default NibLocomotive;
