import { createElement as h, forwardRef } from 'react';

export const NibSecuritySettings = forwardRef(function NibSecuritySettings({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "11", width: "12", height: "10", rx: "2", fill: "none" }),
    h('path', { d: "M7 11V8a3 3 0 0 1 6 0v3M10 15v2", fill: "none" }),
    h('circle', { cx: "19", cy: "7", r: "2", fill: "none" }),
    h('path', { d: "M19 3.5v1.5M19 9v1.5M22.5 7H21M17 7h-1.5", fill: "none" })
  );
});

export default NibSecuritySettings;
