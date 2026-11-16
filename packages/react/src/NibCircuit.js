import { createElement as h, forwardRef } from 'react';

export const NibCircuit = forwardRef(function NibCircuit({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "4.5", cy: "6", r: "1.5", fill: "none" }),
    h('circle', { cx: "19.5", cy: "15", r: "1.5", fill: "none" }),
    h('circle', { cx: "11", cy: "20", r: "1.5", fill: "none" }),
    h('path', { d: "M6 6h3l3 3v3l3 3h3M12 12l-1 1v5.5", fill: "none" })
  );
});

export default NibCircuit;
