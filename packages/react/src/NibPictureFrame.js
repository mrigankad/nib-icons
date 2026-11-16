import { createElement as h, forwardRef } from 'react';

export const NibPictureFrame = forwardRef(function NibPictureFrame({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2L8 6M12 2l4 4", fill: "none" }),
    h('rect', { x: "3", y: "6", width: "18", height: "15", rx: "1", fill: "none" }),
    h('rect', { x: "6", y: "9", width: "12", height: "9", fill: "none" }),
    h('path', { d: "M6 16l4-4 3 3 2-2 3 3", fill: "none" })
  );
});

export default NibPictureFrame;
