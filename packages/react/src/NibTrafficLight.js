import { createElement as h, forwardRef } from 'react';

export const NibTrafficLight = forwardRef(function NibTrafficLight({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "8", y: "2", width: "8", height: "17", rx: "3", fill: "none" }),
    h('circle', { cx: "12", cy: "6", r: "1.3", fill: "none" }),
    h('circle', { cx: "12", cy: "10.5", r: "1.3", fill: "none" }),
    h('circle', { cx: "12", cy: "15", r: "1.3", fill: "none" }),
    h('path', { d: "M12 19v3M8 6H5l3 3M16 6h3l-3 3", fill: "none" })
  );
});

export default NibTrafficLight;
