import { createElement as h, forwardRef } from 'react';

export const NibRideShare = forwardRef(function NibRideShare({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21v-4l2-4h14l2 4v4zM3 17h18", fill: "none" }),
    h('circle', { cx: "8", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "16", cy: "5", r: "2", fill: "none" }),
    h('path', { d: "M5 11a3 3 0 0 1 6 0M13 11a3 3 0 0 1 6 0", fill: "none" })
  );
});

export default NibRideShare;
