import { createElement as h, forwardRef } from 'react';

export const NibFlammable = forwardRef(function NibFlammable({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l10 10-10 10L2 12zM12 17a2.5 2.5 0 0 1-2.5-2.5c0-2 2.5-3 2.5-6 1.5 1.5 2.5 3.5 2.5 6A2.5 2.5 0 0 1 12 17z", fill: "none" })
  );
});

export default NibFlammable;
