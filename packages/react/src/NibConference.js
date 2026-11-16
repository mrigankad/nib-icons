import { createElement as h, forwardRef } from 'react';

export const NibConference = forwardRef(function NibConference({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "2", width: "14", height: "8", rx: "1", fill: "none" }),
    h('circle', { cx: "5", cy: "15", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "15", r: "2", fill: "none" }),
    h('circle', { cx: "19", cy: "15", r: "2", fill: "none" }),
    h('path', { d: "M2 21a3 3 0 0 1 6 0M9 21a3 3 0 0 1 6 0M16 21a3 3 0 0 1 6 0", fill: "none" })
  );
});

export default NibConference;
