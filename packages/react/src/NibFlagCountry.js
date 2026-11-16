import { createElement as h, forwardRef } from 'react';

export const NibFlagCountry = forwardRef(function NibFlagCountry({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 22V3M4 4h16v11H4M4 7.7h16M4 11.3h16", fill: "none" }),
    h('circle', { cx: "12", cy: "9.5", r: "1", fill: "none" })
  );
});

export default NibFlagCountry;
