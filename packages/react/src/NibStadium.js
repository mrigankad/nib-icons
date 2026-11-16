import { createElement as h, forwardRef } from 'react';

export const NibStadium = forwardRef(function NibStadium({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "9", rx: "10", ry: "4", fill: "none" }),
    h('ellipse', { cx: "12", cy: "9", rx: "5", ry: "1.8", fill: "none" }),
    h('path', { d: "M2 9v7c0 2.2 4.5 4 10 4s10-1.8 10-4V9M6 12.5V19M18 12.5V19M12 13v7", fill: "none" })
  );
});

export default NibStadium;
