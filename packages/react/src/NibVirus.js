import { createElement as h, forwardRef } from 'react';

export const NibVirus = forwardRef(function NibVirus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "5", fill: "none" }),
    h('path', { d: "M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3.5 3.5M15.5 15.5L19 19M19 5l-3.5 3.5M8.5 15.5L5 19M10.5 2h3M10.5 22h3M2 10.5v3M22 10.5v3", fill: "none" })
  );
});

export default NibVirus;
