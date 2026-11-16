import { createElement as h, forwardRef } from 'react';

export const NibToolCall = forwardRef(function NibToolCall({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 6L3 12l5 6M16 6l5 6-5 6M14.5 8.5a2.5 2.5 0 0 0-3.3 3.3L9 14l1 1 2.2-2.2a2.5 2.5 0 0 0 3.3-3.3l-1.2 1.2-1-1z", fill: "none" })
  );
});

export default NibToolCall;
