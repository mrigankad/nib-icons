import { createElement as h, forwardRef } from 'react';

export const NibNetwork = forwardRef(function NibNetwork({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "9", y: "2", width: "6", height: "5", rx: "1", fill: "none" }),
    h('rect', { x: "2", y: "17", width: "6", height: "5", rx: "1", fill: "none" }),
    h('rect', { x: "16", y: "17", width: "6", height: "5", rx: "1", fill: "none" }),
    h('path', { d: "M12 7v5M5 17v-5h14v5", fill: "none" })
  );
});

export default NibNetwork;
