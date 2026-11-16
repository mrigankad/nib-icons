import { createElement as h, forwardRef } from 'react';

export const NibRangoli = forwardRef(function NibRangoli({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "2", fill: "none" }),
    h('path', { d: "M12 10c-2-3 0-6 0-6s2 3 0 6M14 12c3-2 6 0 6 0s-3 2-6 0M12 14c2 3 0 6 0 6s-2-3 0-6M10 12c-3 2-6 0-6 0s3-2 6 0", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "9.5", fill: "none", strokeDasharray: "1 2.5" })
  );
});

export default NibRangoli;
