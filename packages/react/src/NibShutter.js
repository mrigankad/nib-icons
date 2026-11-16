import { createElement as h, forwardRef } from 'react';

export const NibShutter = forwardRef(function NibShutter({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "4", fill: "none" }),
    h('path', { d: "M12 2v6M20.7 7l-5.2 3M20.7 17l-5.2-3M12 22v-6M3.3 17l5.2-3M3.3 7l5.2 3", fill: "none" })
  );
});

export default NibShutter;
