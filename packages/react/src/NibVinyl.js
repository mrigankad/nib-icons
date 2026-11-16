import { createElement as h, forwardRef } from 'react';

export const NibVinyl = forwardRef(function NibVinyl({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "2.5", fill: "none" }),
    h('path', { d: "M12 5.5a6.5 6.5 0 0 1 6.5 6.5M5.5 12a6.5 6.5 0 0 0 6.5 6.5", fill: "none" })
  );
});

export default NibVinyl;
