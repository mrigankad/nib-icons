import { createElement as h, forwardRef } from 'react';

export const NibPrivacySettings = forwardRef(function NibPrivacySettings({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l7 3v6c0 5-3 9-7 11-4-2-7-6-7-11V5zM9 11s1.5-2 3-2 3 2 3 2-1.5 2-3 2-3-2-3-2z", fill: "none" })
  );
});

export default NibPrivacySettings;
