import { createElement as h, forwardRef } from 'react';

export const NibMri = forwardRef(function NibMri({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "9.5", r: "7.5", fill: "none" }),
    h('circle', { cx: "12", cy: "9.5", r: "3.5", fill: "none" }),
    h('rect', { x: "3", y: "18.5", width: "18", height: "3", rx: "1.5", fill: "none" })
  );
});

export default NibMri;
