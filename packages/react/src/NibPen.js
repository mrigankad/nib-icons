import { createElement as h, forwardRef } from 'react';

export const NibPen = forwardRef(function NibPen({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3l6 6-3 8H9L6 9zM12 3v7M8 21h8", fill: "none" }),
    h('circle', { cx: "12", cy: "11.5", r: "1.5", fill: "none" })
  );
});

export default NibPen;
