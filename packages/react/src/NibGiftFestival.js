import { createElement as h, forwardRef } from 'react';

export const NibGiftFestival = forwardRef(function NibGiftFestival({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "9", width: "16", height: "12", rx: "1", fill: "none" }),
    h('path', { d: "M4 13h16M12 9v12M12 9c-2-4-6-4-6-1.5S10 9 12 9zM12 9c2-4 6-4 6-1.5S14 9 12 9zM19 2l.5 1.2 1.2.5-1.2.5L19 5.4l-.5-1.2-1.2-.5 1.2-.5z", fill: "none" })
  );
});

export default NibGiftFestival;
