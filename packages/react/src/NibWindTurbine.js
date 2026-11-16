import { createElement as h, forwardRef } from 'react';

export const NibWindTurbine = forwardRef(function NibWindTurbine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "9", r: "1.5", fill: "none" }),
    h('path', { d: "M12 7.5V2M13.3 9.8l4.7 2.7M10.7 9.8L6 12.5M11.5 10.5L10.5 22h3l-1-11.5M8 22h8", fill: "none" })
  );
});

export default NibWindTurbine;
