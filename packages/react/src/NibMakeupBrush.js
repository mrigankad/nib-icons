import { createElement as h, forwardRef } from 'react';

export const NibMakeupBrush = forwardRef(function NibMakeupBrush({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 3c3 0 6 3 6 6l-6 3-3-3zM12 9l-1 1 3 3 1-1M11 10L3 21l11-8", fill: "none" })
  );
});

export default NibMakeupBrush;
