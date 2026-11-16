import { createElement as h, forwardRef } from 'react';

export const NibGrapes = forwardRef(function NibGrapes({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "8", r: "2.3", fill: "none" }),
    h('circle', { cx: "15", cy: "8", r: "2.3", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "2.3", fill: "none" }),
    h('circle', { cx: "7", cy: "12.5", r: "2.3", fill: "none" }),
    h('circle', { cx: "17", cy: "12.5", r: "2.3", fill: "none" }),
    h('circle', { cx: "9.5", cy: "16.5", r: "2.3", fill: "none" }),
    h('circle', { cx: "14.5", cy: "16.5", r: "2.3", fill: "none" }),
    h('circle', { cx: "12", cy: "20", r: "2", fill: "none" }),
    h('path', { d: "M12 5.5V2l2 1", fill: "none" })
  );
});

export default NibGrapes;
