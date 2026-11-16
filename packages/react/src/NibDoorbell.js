import { createElement as h, forwardRef } from 'react';

export const NibDoorbell = forwardRef(function NibDoorbell({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "7", y: "2", width: "10", height: "20", rx: "5", fill: "none" }),
    h('circle', { cx: "12", cy: "15", r: "2.5", fill: "none" }),
    h('path', { d: "M12 6v2", fill: "none" })
  );
});

export default NibDoorbell;
