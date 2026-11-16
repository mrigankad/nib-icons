import { createElement as h, forwardRef } from 'react';

export const NibAdjustments = forwardRef(function NibAdjustments({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h9M18 6h3M3 12h3M12 12h9M3 18h11M20 18h1", fill: "none" }),
    h('circle', { cx: "15", cy: "6", r: "2.5", fill: "none" }),
    h('circle', { cx: "9", cy: "12", r: "2.5", fill: "none" }),
    h('circle', { cx: "17", cy: "18", r: "2.5", fill: "none" })
  );
});

export default NibAdjustments;
