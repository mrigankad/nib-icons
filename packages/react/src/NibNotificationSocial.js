import { createElement as h, forwardRef } from 'react';

export const NibNotificationSocial = forwardRef(function NibNotificationSocial({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5.500 16.500V11a6.500 6.500 0 0 1 8-6.300M5.500 16.500 4 18.500h16l-1.500-2M18.500 11v5.500", fill: "none" }),
    h('path', { d: "M10 21a2 2 0 0 0 4 0", fill: "none" }),
    h('circle', { cx: "18.500", cy: "5.500", r: "2.500", fill: "none" })
  );
});

export default NibNotificationSocial;
