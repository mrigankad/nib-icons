import { createElement as h, forwardRef } from 'react';

export const NibPressure = forwardRef(function NibPressure({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "10", r: "7", fill: "none" }),
    h('path', { d: "M12 10l-3-3M12 17v5M9 22h6M8 13h8", fill: "none" })
  );
});

export default NibPressure;
