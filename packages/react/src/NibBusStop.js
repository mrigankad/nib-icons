import { createElement as h, forwardRef } from 'react';

export const NibBusStop = forwardRef(function NibBusStop({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 22V9", fill: "none" }),
    h('circle', { cx: "5", cy: "6", r: "3", fill: "none" }),
    h('rect', { x: "10", y: "7", width: "11", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M10 13h11M12 19v2M19 19v2", fill: "none" })
  );
});

export default NibBusStop;
