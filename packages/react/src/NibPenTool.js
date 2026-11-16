import { createElement as h, forwardRef } from 'react';

export const NibPenTool = forwardRef(function NibPenTool({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 20l3-10 10-6 3 3-6 10zM4 20l6.5-6.5", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1.5", fill: "none" })
  );
});

export default NibPenTool;
