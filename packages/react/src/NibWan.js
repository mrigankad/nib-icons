import { createElement as h, forwardRef } from 'react';

export const NibWan = forwardRef(function NibWan({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "6", r: "4", fill: "none" }),
    h('rect', { x: "2", y: "17", width: "5", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "17", y: "17", width: "5", height: "4", rx: "1", fill: "none" }),
    h('path', { d: "M8 6h8M12 2c1.5 1.2 1.5 6.8 0 8M12 2c-1.5 1.2-1.5 6.8 0 8M12 10v4M4.5 17v-3h15v3", fill: "none" })
  );
});

export default NibWan;
