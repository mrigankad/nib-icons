import { createElement as h, forwardRef } from 'react';

export const NibCiPipeline = forwardRef(function NibCiPipeline({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5", cy: "12", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "2", fill: "none" }),
    h('circle', { cx: "19", cy: "12", r: "2", fill: "none" }),
    h('path', { d: "M7 12h3M14 12h3M5 10V5h14M19 14v5H5", fill: "none" })
  );
});

export default NibCiPipeline;
