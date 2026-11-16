import { createElement as h, forwardRef } from 'react';

export const NibRotateImage = forwardRef(function NibRotateImage({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "9", width: "12", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M12 3.5a7.5 7.5 0 0 1 7.5 7M17 8.5l2.5 2.5L22 8.5", fill: "none" })
  );
});

export default NibRotateImage;
