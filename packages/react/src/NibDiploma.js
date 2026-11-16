import { createElement as h, forwardRef } from 'react';

export const NibDiploma = forwardRef(function NibDiploma({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 8h14v9H5z", fill: "none" }),
    h('ellipse', { cx: "5", cy: "12.5", rx: "2", ry: "4.5", fill: "none" }),
    h('path', { d: "M19 8a2 4.5 0 0 1 0 9M12 17l-1.5 4 1.5-1 1.5 1z", fill: "none" })
  );
});

export default NibDiploma;
