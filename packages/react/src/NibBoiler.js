import { createElement as h, forwardRef } from 'react';

export const NibBoiler = forwardRef(function NibBoiler({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "5", width: "12", height: "16", rx: "6", fill: "none" }),
    h('path', { d: "M12 5V2M9 21v1M15 21v1M12 12c-1 1-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-.5-2-1.5-3zM18 10h3", fill: "none" })
  );
});

export default NibBoiler;
