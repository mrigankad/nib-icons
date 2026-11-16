import { createElement as h, forwardRef } from 'react';

export const NibIdCard = forwardRef(function NibIdCard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M2 9h20M5 15.5a2.5 2.5 0 0 1 5 0M14 13h5M14 16h3", fill: "none" }),
    h('circle', { cx: "7.5", cy: "12.5", r: "1.5", fill: "none" })
  );
});

export default NibIdCard;
