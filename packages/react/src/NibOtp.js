import { createElement as h, forwardRef } from 'react';

export const NibOtp = forwardRef(function NibOtp({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "6", width: "20", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M5.5 11h1M9.5 11h1M13.5 11h1M17.5 11h1M5 14.5h2M9 14.5h2M13 14.5h2M17 14.5h2", fill: "none" })
  );
});

export default NibOtp;
