import { createElement as h, forwardRef } from 'react';

export const NibToxic = forwardRef(function NibToxic({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2zM10 17v2M14 17v2M4 22l16-3M4 19l16 3", fill: "none" }),
    h('circle', { cx: "9.5", cy: "10", r: "1.2", fill: "none" }),
    h('circle', { cx: "14.5", cy: "10", r: "1.2", fill: "none" })
  );
});

export default NibToxic;
