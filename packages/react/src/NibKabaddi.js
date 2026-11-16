import { createElement as h, forwardRef } from 'react';

export const NibKabaddi = forwardRef(function NibKabaddi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "7", cy: "5", r: "2", fill: "none" }),
    h('path', { d: "M7 8l1 6-3 7M8 14l3 7M7 10l5-1M12 2v20", fill: "none" }),
    h('circle', { cx: "17", cy: "7", r: "2", fill: "none" }),
    h('path', { d: "M17 10v5l-2 6M17 15l3 6M14 12l3-1 3 2", fill: "none" })
  );
});

export default NibKabaddi;
