import { createElement as h, forwardRef } from 'react';

export const NibSlotMachine = forwardRef(function NibSlotMachine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "5", width: "15", height: "16", rx: "2", fill: "none" }),
    h('rect', { x: "5.5", y: "9", width: "10", height: "5", rx: "1", fill: "none" }),
    h('path', { d: "M9 9v5M12 9v5M18 9h2v-5M7 18h7", fill: "none" }),
    h('circle', { cx: "20", cy: "3", r: "1.3", fill: "none" })
  );
});

export default NibSlotMachine;
