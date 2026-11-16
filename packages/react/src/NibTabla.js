import { createElement as h, forwardRef } from 'react';

export const NibTabla = forwardRef(function NibTabla({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "7.5", cy: "5.5", rx: "4", ry: "1.5", fill: "none" }),
    h('path', { d: "M3.5 5.5L4.5 19C4.5 20.5 10.5 20.5 10.5 19L11.5 5.5", fill: "none" }),
    h('ellipse', { cx: "17", cy: "9", rx: "4.5", ry: "1.75", fill: "none" }),
    h('path', { d: "M12.5 9C12.5 15 14 20.5 17 20.5C20 20.5 21.5 15 21.5 9", fill: "none" })
  );
});

export default NibTabla;
