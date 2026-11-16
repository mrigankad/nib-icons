import { createElement as h, forwardRef } from 'react';

export const NibMoneyBag = forwardRef(function NibMoneyBag({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3h6l-1.5 3h-3zM10.5 6C6 8 4 12 4 15a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5c0-3-2-7-6.5-9M12 10v8M14 11.5a1.8 1.8 0 0 0-1.8-1.3h-.5a1.6 1.6 0 0 0 0 3.2h.6a1.6 1.6 0 0 1 0 3.2h-.6a1.8 1.8 0 0 1-1.7-1.3", fill: "none" })
  );
});

export default NibMoneyBag;
