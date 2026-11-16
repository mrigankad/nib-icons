import { createElement as h, forwardRef } from 'react';

export const NibFlower = forwardRef(function NibFlower({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "4.5", rx: "2", ry: "2.5", fill: "none" }),
    h('ellipse', { cx: "12", cy: "11.5", rx: "2", ry: "2.5", fill: "none" }),
    h('ellipse', { cx: "8.5", cy: "8", rx: "2.5", ry: "2", fill: "none" }),
    h('ellipse', { cx: "15.5", cy: "8", rx: "2.5", ry: "2", fill: "none" }),
    h('path', { d: "M12 14v8M12 19c-2-2-4-2-5-1", fill: "none" })
  );
});

export default NibFlower;
