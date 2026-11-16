import { createElement as h, forwardRef } from 'react';

export const NibNotificationSettings = forwardRef(function NibNotificationSettings({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M13 19H4c0-1 2-2 2-7a6 6 0 0 1 10-4.5M9 21a2 2 0 0 0 3 0", fill: "none" }),
    h('circle', { cx: "18", cy: "15", r: "2.5", fill: "none" }),
    h('path', { d: "M18 11v1.5M18 17.5V19M22 15h-1.5M15.5 15H14", fill: "none" })
  );
});

export default NibNotificationSettings;
