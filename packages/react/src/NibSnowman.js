import { createElement as h, forwardRef } from 'react';

export const NibSnowman = forwardRef(function NibSnowman({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "7", r: "3.5", fill: "none" }),
    h('circle', { cx: "12", cy: "16", r: "5.5", fill: "none" }),
    h('path', { d: "M7 12L3 10M17 12l4-2M12 14v.01M12 17v.01M8.5 3h7", fill: "none" })
  );
});

export default NibSnowman;
