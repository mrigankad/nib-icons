import { createElement as h, forwardRef } from 'react';

export const NibSafeBox = forwardRef(function NibSafeBox({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "4", width: "18", height: "16", rx: "2", fill: "none" }),
    h('rect', { x: "6", y: "7", width: "12", height: "10", rx: "1", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "2", fill: "none" }),
    h('path', { d: "M12 10v.01", fill: "none" })
  );
});

export default NibSafeBox;
