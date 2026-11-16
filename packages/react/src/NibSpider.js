import { createElement as h, forwardRef } from 'react';

export const NibSpider = forwardRef(function NibSpider({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "9", r: "2.5", fill: "none" }),
    h('ellipse', { cx: "12", cy: "15.5", rx: "3.5", ry: "4.5", fill: "none" }),
    h('path', { d: "M9.5 8L7 4 3 3M14.5 8L17 4l4-1M9 12l-5-2-2 2M15 12l5-2 2 2M9 15l-5 1-1 3M15 15l5 1 1 3M10 18l-3 3M14 18l3 3", fill: "none" })
  );
});

export default NibSpider;
