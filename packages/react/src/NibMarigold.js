import { createElement as h, forwardRef } from 'react';

export const NibMarigold = forwardRef(function NibMarigold({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" }),
    h('path', { d: "M12 5.5a2 2 0 0 1 2 1.6 2 2 0 0 1 2.9 2 2 2 0 0 1 1.6 2.9 2 2 0 0 1 0 0 2 2 0 0 1-1.6 2.9 2 2 0 0 1-2.9 2A2 2 0 0 1 12 18.5a2 2 0 0 1-2-1.6 2 2 0 0 1-2.9-2 2 2 0 0 1-1.6-2.9 2 2 0 0 1 1.6-2.9 2 2 0 0 1 2.9-2A2 2 0 0 1 12 5.5z", fill: "none" })
  );
});

export default NibMarigold;
