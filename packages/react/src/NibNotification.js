import { createElement as h, forwardRef } from 'react';

export const NibNotification = forwardRef(function NibNotification({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M13 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7", fill: "none" }),
    h('circle', { cx: "18", cy: "6", r: "3", fill: "none" })
  );
});

export default NibNotification;
