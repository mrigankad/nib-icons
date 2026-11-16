import { createElement as h, forwardRef } from 'react';

export const NibForklift = forwardRef(function NibForklift({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 16V9h7l3 4v3z", fill: "none" }),
    h('circle', { cx: "6.500", cy: "18.500", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "18.500", r: "2", fill: "none" }),
    h('path', { d: "M17 3v16M17 19h5M13 13h4", fill: "none" })
  );
});

export default NibForklift;
