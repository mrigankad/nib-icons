import { createElement as h, forwardRef } from 'react';

export const NibTeam = forwardRef(function NibTeam({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "8", r: "2.5", fill: "none" }),
    h('circle', { cx: "12", cy: "6", r: "2.5", fill: "none" }),
    h('circle', { cx: "18", cy: "8", r: "2.5", fill: "none" }),
    h('path', { d: "M2.5 17a3.5 3.5 0 0 1 5.5-2.9M8 15.5a4 4 0 0 1 8 0M16 14.1a3.5 3.5 0 0 1 5.5 2.9M3 20.5h18", fill: "none" })
  );
});

export default NibTeam;
