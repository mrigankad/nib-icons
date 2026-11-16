import { createElement as h, forwardRef } from 'react';

export const NibDosa = forwardRef(function NibDosa({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 17.5c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5", fill: "none" }),
    h('path', { d: "M3.5 15.5L17 6a2.6 2.6 0 0 1 3.4 3.8L7 18.5", fill: "none" }),
    h('path', { d: "M3.5 15.5c-.6 1.6 1.4 3.4 3.5 3", fill: "none" }),
    h('path', { d: "M8.5 12l2 2.5M12 9.5l2 2.5", fill: "none" }),
    h('circle', { cx: "18.5", cy: "16", r: "2", fill: "none" })
  );
});

export default NibDosa;
