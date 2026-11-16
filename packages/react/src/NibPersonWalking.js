import { createElement as h, forwardRef } from 'react';

export const NibPersonWalking = forwardRef(function NibPersonWalking({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "13.5", cy: "4", r: "2.2", fill: "none" }),
    h('path', { d: "M13 8.5l-1.5 5.5 3.5 3.5.5 4M11.5 14L8.5 17.5 6.5 20.5M13 9.5l3.5 3M12.5 9.5L9 11.5l-1 3", fill: "none" })
  );
});

export default NibPersonWalking;
