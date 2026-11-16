import { createElement as h, forwardRef } from 'react';

export const NibGauge = forwardRef(function NibGauge({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M12 12l4-4M7 15h10M6.5 9l1 .5M12 6v1M17.5 9l-1 .5", fill: "none" })
  );
});

export default NibGauge;
