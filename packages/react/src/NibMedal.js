import { createElement as h, forwardRef } from 'react';

export const NibMedal = forwardRef(function NibMedal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 2l3 7M17 2l-3 7", fill: "none" }),
    h('circle', { cx: "12", cy: "15", r: "6", fill: "none" }),
    h('path', { d: "M12 12.5l.8 1.6 1.7.2-1.3 1.2.3 1.7-1.5-.8-1.5.8.3-1.7-1.3-1.2 1.7-.2z", fill: "none" })
  );
});

export default NibMedal;
