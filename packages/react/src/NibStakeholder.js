import { createElement as h, forwardRef } from 'react';

export const NibStakeholder = forwardRef(function NibStakeholder({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" }),
    h('circle', { cx: "12", cy: "3.5", r: "1.5", fill: "none" }),
    h('circle', { cx: "20", cy: "16", r: "1.5", fill: "none" }),
    h('circle', { cx: "4", cy: "16", r: "1.5", fill: "none" }),
    h('path', { d: "M12 5v4M18.7 15.2l-4-2M5.3 15.2l4-2", fill: "none" })
  );
});

export default NibStakeholder;
