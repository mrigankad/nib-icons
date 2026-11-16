import { createElement as h, forwardRef } from 'react';

export const NibOrchestrator = forwardRef(function NibOrchestrator({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "6", r: "3", fill: "none" }),
    h('circle', { cx: "4", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "20", cy: "19", r: "2", fill: "none" }),
    h('path', { d: "M12 9v8M10 8l-5 9M14 8l5 9", fill: "none" })
  );
});

export default NibOrchestrator;
