import { createElement as h, forwardRef } from 'react';

export const NibTreadmill = forwardRef(function NibTreadmill({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 18h17l3-12h-3M19 6l-1 4M2 18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2", fill: "none" }),
    h('circle', { cx: "11", cy: "5", r: "1.5", fill: "none" }),
    h('path', { d: "M11 7l-2 4 3 2-1 4M9 11L6 10M12 8l3 2", fill: "none" })
  );
});

export default NibTreadmill;
