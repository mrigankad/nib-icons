import { createElement as h, forwardRef } from 'react';

export const NibRakhi = forwardRef(function NibRakhi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12h7M15 12h7", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" }),
    h('path', { d: "M12 9a3 3 0 0 1 0-6 3 3 0 0 1 0 6M12 15a3 3 0 0 0 0 6 3 3 0 0 0 0-6M9 12a3 3 0 0 0-3-3M15 12a3 3 0 0 1 3 3", fill: "none" })
  );
});

export default NibRakhi;
