import { createElement as h, forwardRef } from 'react';

export const NibWhiteboardEdu = forwardRef(function NibWhiteboardEdu({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "20", height: "13", rx: "1", fill: "none" }),
    h('path', { d: "M12 16v4M8 21l4-1 4 1M6 12l3-4 2 2 3-3 3 4", fill: "none" })
  );
});

export default NibWhiteboardEdu;
