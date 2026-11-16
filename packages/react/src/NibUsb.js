import { createElement as h, forwardRef } from 'react';

export const NibUsb = forwardRef(function NibUsb({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "7.5", cy: "8", r: "1.2", fill: "none" }),
    h('rect', { x: "15.3", y: "7.5", width: "2.4", height: "2.4", rx: ".3", fill: "none" }),
    h('path', { d: "M12 17V3M9.5 5.5L12 3l2.5 2.5M12 14l-4.5-3V9.2M12 15.5l4.5-3V10", fill: "none" })
  );
});

export default NibUsb;
