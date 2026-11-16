import { createElement as h, forwardRef } from 'react';

export const NibWaterfall = forwardRef(function NibWaterfall({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h18M5 4v16M19 4v16M9 7v9M12 7v11M15 7v8M3 20c2-1.5 4 1 6 0s4 1 6 0 4 1 6 0", fill: "none" })
  );
});

export default NibWaterfall;
