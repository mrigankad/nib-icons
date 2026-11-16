import { createElement as h, forwardRef } from 'react';

export const NibProfileSettings = forwardRef(function NibProfileSettings({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "8", r: "4", fill: "none" }),
    h('path', { d: "M2 21a7 7 0 0 1 10-6.3", fill: "none" }),
    h('circle', { cx: "18", cy: "17", r: "2.5", fill: "none" }),
    h('path', { d: "M18 13v1.5M18 19.5V21M22 17h-1.5M15.5 17H14", fill: "none" })
  );
});

export default NibProfileSettings;
