import { createElement as h, forwardRef } from 'react';

export const NibVendor = forwardRef(function NibVendor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M1 6h12v10H1zM13 10h4l3 3v3h-7", fill: "none" }),
    h('circle', { cx: "5", cy: "18", r: "2", fill: "none" }),
    h('circle', { cx: "17", cy: "18", r: "2", fill: "none" })
  );
});

export default NibVendor;
