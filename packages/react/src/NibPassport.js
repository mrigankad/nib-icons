import { createElement as h, forwardRef } from 'react';

export const NibPassport = forwardRef(function NibPassport({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "2", width: "14", height: "20", rx: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "10", r: "3.5", fill: "none" }),
    h('path', { d: "M8.5 10h7M12 6.5c-1 1-1.5 2-1.5 3.5s.5 2.5 1.5 3.5M12 6.5c1 1 1.5 2 1.5 3.5s-.5 2.5-1.5 3.5M9 17.5h6", fill: "none" })
  );
});

export default NibPassport;
