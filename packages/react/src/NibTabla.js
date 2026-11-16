import { createElement as h, forwardRef } from 'react';

export const NibTabla = forwardRef(function NibTabla({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "7", cy: "8", rx: "4.5", ry: "1.8", fill: "none" }),
    h('path', { d: "M2.5 8c0 6 1.5 12 4.5 12s4.5-6 4.5-12", fill: "none" }),
    h('ellipse', { cx: "17", cy: "11", rx: "4.5", ry: "1.8", fill: "none" }),
    h('path', { d: "M12.5 11c0 4 1 9 4.5 9s4.5-5 4.5-9", fill: "none" }),
    h('circle', { cx: "7", cy: "8", r: ".6", fill: "none" }),
    h('circle', { cx: "17", cy: "11", r: ".6", fill: "none" })
  );
});

export default NibTabla;
