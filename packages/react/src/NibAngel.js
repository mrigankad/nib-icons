import { createElement as h, forwardRef } from 'react';

export const NibAngel = forwardRef(function NibAngel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "13.5", r: "8", fill: "none" }),
    h('ellipse', { cx: "12", cy: "3", rx: "5", ry: "1.5", fill: "none" }),
    h('path', { d: "M9 11.5h.01M15 11.5h.01M8.5 15.5a4 4 0 0 0 7 0", fill: "none" })
  );
});

export default NibAngel;
