import { createElement as h, forwardRef } from 'react';

export const NibFlowerSunflower = forwardRef(function NibFlowerSunflower({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "8", r: "2.5", fill: "none" }),
    h('path', { d: "M12 2.5v1M12 12.5v1M6.5 8h1M16.5 8h1M8.1 4.1l.7.7M15.2 11.2l.7.7M8.1 11.9l.7-.7M15.2 4.8l.7-.7M12 13.5V22M12 18c2.5 0 4-1.5 4-3.5-2.5 0-4 1.5-4 3.5z", fill: "none" })
  );
});

export default NibFlowerSunflower;
