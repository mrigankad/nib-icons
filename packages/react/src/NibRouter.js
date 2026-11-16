import { createElement as h, forwardRef } from 'react';

export const NibRouter = forwardRef(function NibRouter({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "13", width: "20", height: "7", rx: "2", fill: "none" }),
    h('path', { d: "M6 16.5h.01M10 16.5h.01M17 13V9.5M14.5 9a3.5 3.5 0 0 1 5 0M12.5 6.5a6.5 6.5 0 0 1 9 0", fill: "none" })
  );
});

export default NibRouter;
