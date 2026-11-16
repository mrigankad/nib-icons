import { createElement as h, forwardRef } from 'react';

export const NibGripVertical = forwardRef(function NibGripVertical({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "6", r: "1", fill: "currentColor" }),
    h('circle', { cx: "15", cy: "6", r: "1", fill: "currentColor" }),
    h('circle', { cx: "9", cy: "12", r: "1", fill: "currentColor" }),
    h('circle', { cx: "15", cy: "12", r: "1", fill: "currentColor" }),
    h('circle', { cx: "9", cy: "18", r: "1", fill: "currentColor" }),
    h('circle', { cx: "15", cy: "18", r: "1", fill: "currentColor" })
  );
});

export default NibGripVertical;
