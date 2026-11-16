import { createElement as h, forwardRef } from 'react';

export const NibDns = forwardRef(function NibDns({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "14", width: "18", height: "7", rx: "1.5", fill: "none" }),
    h('circle', { cx: "12", cy: "7", r: "4.5", fill: "none" }),
    h('path', { d: "M7.5 7h9M12 2.5c1.5 1.5 1.5 7.5 0 9M12 2.5c-1.5 1.5-1.5 7.5 0 9M12 11.5V14M7 17.5h.01", fill: "none" })
  );
});

export default NibDns;
