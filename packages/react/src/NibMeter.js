import { createElement as h, forwardRef } from 'react';

export const NibMeter = forwardRef(function NibMeter({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "2", width: "16", height: "20", rx: "2", fill: "none" }),
    h('rect', { x: "7", y: "5", width: "10", height: "4", rx: ".5", fill: "none" }),
    h('circle', { cx: "12", cy: "15", r: "3", fill: "none" }),
    h('path', { d: "M12 15l1.5-1.5", fill: "none" })
  );
});

export default NibMeter;
