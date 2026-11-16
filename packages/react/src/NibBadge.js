import { createElement as h, forwardRef } from 'react';

export const NibBadge = forwardRef(function NibBadge({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z", fill: "none" }),
    h('path', { d: "M12 8l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z", fill: "none" })
  );
});

export default NibBadge;
