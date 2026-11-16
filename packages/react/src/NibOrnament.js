import { createElement as h, forwardRef } from 'react';

export const NibOrnament = forwardRef(function NibOrnament({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "14", r: "7", fill: "none" }),
    h('path', { d: "M10 7V5h4v2M12 5V2M5.5 12c2 1 4.5 1 6.5 0s4.5-1 6.5 0", fill: "none" })
  );
});

export default NibOrnament;
