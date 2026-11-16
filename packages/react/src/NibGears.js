import { createElement as h, forwardRef } from 'react';

export const NibGears = forwardRef(function NibGears({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "9", r: "4.5", fill: "none" }),
    h('circle', { cx: "9", cy: "9", r: "1.5", fill: "none" }),
    h('path', { d: "M9 2v2M9 14v2M2 9h2M14 9h2M4 4l1.5 1.5M12.5 12.5L14 14M4 14l1.5-1.5M12.5 5.5L14 4", fill: "none" }),
    h('circle', { cx: "17", cy: "17", r: "3", fill: "none" }),
    h('path', { d: "M17 12.5V14M17 20v1.5M21.5 17H20", fill: "none" })
  );
});

export default NibGears;
