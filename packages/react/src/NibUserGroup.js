import { createElement as h, forwardRef } from 'react';

export const NibUserGroup = forwardRef(function NibUserGroup({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "7", r: "3", fill: "none" }),
    h('circle', { cx: "5", cy: "9.5", r: "2", fill: "none" }),
    h('circle', { cx: "19", cy: "9.5", r: "2", fill: "none" }),
    h('path', { d: "M6.5 19a5.5 5.5 0 0 1 11 0M2 17.5a3 3 0 0 1 4-2.8M22 17.5a3 3 0 0 0-4-2.8", fill: "none" })
  );
});

export default NibUserGroup;
