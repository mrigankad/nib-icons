import { createElement as h, forwardRef } from 'react';

export const NibPrayerHands = forwardRef(function NibPrayerHands({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 4v13M12 4c-1 0-2 1-2.5 3L7 13l-3 4 3 3 5-3M12 4c1 0 2 1 2.5 3l2.5 6 3 4-3 3-5-3", fill: "none" })
  );
});

export default NibPrayerHands;
