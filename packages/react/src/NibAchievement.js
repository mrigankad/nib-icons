import { createElement as h, forwardRef } from 'react';

export const NibAchievement = forwardRef(function NibAchievement({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l7 4v8l-7 4-7-4V6zM9 10l2 2 4-4M8 17l-2 5 3-1 1 2 2-3M16 17l2 5-3-1-1 2-2-3", fill: "none" })
  );
});

export default NibAchievement;
