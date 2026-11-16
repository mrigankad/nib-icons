import { createElement as h, forwardRef } from 'react';

export const NibMergeConflict = forwardRef(function NibMergeConflict({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "18", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "19", r: "2", fill: "none" }),
    h('path', { d: "M6 7c0 5 6 5 6 10M18 7c0 2-1 3.2-2.4 4.2M10.5 10.5l3 3M13.5 10.5l-3 3", fill: "none" })
  );
});

export default NibMergeConflict;
