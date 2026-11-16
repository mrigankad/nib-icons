import { createElement as h, forwardRef } from 'react';

export const NibBrainstorm = forwardRef(function NibBrainstorm({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" }),
    h('circle', { cx: "4", cy: "5", r: "1.8", fill: "none" }),
    h('circle', { cx: "20", cy: "5", r: "1.8", fill: "none" }),
    h('circle', { cx: "4", cy: "19", r: "1.8", fill: "none" }),
    h('circle', { cx: "20", cy: "19", r: "1.8", fill: "none" }),
    h('path', { d: "M5.5 6.5l4.3 3.3M18.5 6.5l-4.3 3.3M5.5 17.5l4.3-3.3M18.5 17.5l-4.3-3.3", fill: "none" })
  );
});

export default NibBrainstorm;
