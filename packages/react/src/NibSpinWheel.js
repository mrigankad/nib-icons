import { createElement as h, forwardRef } from 'react';

export const NibSpinWheel = forwardRef(function NibSpinWheel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "13", r: "8", fill: "none" }),
    h('path', { d: "M12 5v16M4 13h16M6.3 7.3l11.4 11.4M17.7 7.3L6.3 18.7M10 2h4l-2 3z", fill: "none" })
  );
});

export default NibSpinWheel;
