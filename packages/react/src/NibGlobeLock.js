import { createElement as h, forwardRef } from 'react';

export const NibGlobeLock = forwardRef(function NibGlobeLock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21.5 12A9.5 9.5 0 1 0 12 21.5M2.5 12h10M12 2.5a14 14 0 0 1 3.5 8M12 2.5a14 14 0 0 0 0 19M16.5 16.5V15a1.5 1.5 0 0 1 3 0v1.5", fill: "none" }),
    h('rect', { x: "15", y: "16.5", width: "6", height: "5", rx: "1", fill: "none" })
  );
});

export default NibGlobeLock;
