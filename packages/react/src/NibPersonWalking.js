import { createElement as h, forwardRef } from 'react';

export const NibPersonWalking = forwardRef(function NibPersonWalking({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "13", cy: "4.5", r: "2.2", fill: "none" }),
    h('path', { d: "M12.5 8l-1 6", fill: "none" }),
    h('path', { d: "M12.4 9.5L9 12.5", fill: "none" }),
    h('path', { d: "M12.4 9.5l3.6 3 1.5-1.5", fill: "none" }),
    h('path', { d: "M11.5 14l3.5 3.5v4", fill: "none" }),
    h('path', { d: "M11.5 14L9 18l-2.5 2.5", fill: "none" })
  );
});

export default NibPersonWalking;
