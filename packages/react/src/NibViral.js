import { createElement as h, forwardRef } from 'react';

export const NibViral = forwardRef(function NibViral({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "2.5", fill: "none" }),
    h('circle', { cx: "4", cy: "5", r: "1.5", fill: "none" }),
    h('circle', { cx: "20", cy: "5", r: "1.5", fill: "none" }),
    h('circle', { cx: "4", cy: "19", r: "1.5", fill: "none" }),
    h('circle', { cx: "20", cy: "19", r: "1.5", fill: "none" }),
    h('circle', { cx: "12", cy: "3", r: "1", fill: "none" }),
    h('circle', { cx: "12", cy: "21", r: "1", fill: "none" }),
    h('path', { d: "M5 6l5 4.5M19 6l-5 4.5M5 18l5-4.5M19 18l-5-4.5M12 4v5.5M12 14.5V20", fill: "none" })
  );
});

export default NibViral;
