import { createElement as h, forwardRef } from 'react';

export const NibHeatwave = forwardRef(function NibHeatwave({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "7", r: "3.5", fill: "none" }),
    h('path', { d: "M12 1.5v.5M5.5 7H6M18 7h.5M7 13c1 1 0 2 1 3s0 2 1 3M12 13c1 1 0 2 1 3s0 2 1 3M17 13c1 1 0 2 1 3s0 2 1 3", fill: "none" })
  );
});

export default NibHeatwave;
