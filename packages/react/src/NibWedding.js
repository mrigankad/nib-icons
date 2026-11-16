import { createElement as h, forwardRef } from 'react';

export const NibWedding = forwardRef(function NibWedding({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "8.5", cy: "14", r: "5.5", fill: "none" }),
    h('circle', { cx: "15.5", cy: "14", r: "5.5", fill: "none" }),
    h('path', { d: "M12 4c-1-1-2.5-.5-2.5.5 0 1.3 2.5 2.5 2.5 2.5s2.5-1.2 2.5-2.5c0-1-1.5-1.5-2.5-.5z", fill: "none" })
  );
});

export default NibWedding;
