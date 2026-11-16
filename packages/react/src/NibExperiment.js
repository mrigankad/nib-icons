import { createElement as h, forwardRef } from 'react';

export const NibExperiment = forwardRef(function NibExperiment({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 2h6M10 2v7L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-10V2", fill: "none" }),
    h('circle', { cx: "10", cy: "16", r: "1", fill: "none" }),
    h('circle', { cx: "14", cy: "18", r: "1", fill: "none" }),
    h('circle', { cx: "13", cy: "14", r: ".5", fill: "none" })
  );
});

export default NibExperiment;
