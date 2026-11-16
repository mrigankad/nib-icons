import { createElement as h, forwardRef } from 'react';

export const NibPartyPopper = forwardRef(function NibPartyPopper({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21l5-14 9 9zM8 7c1-2 3-2 4 0M17 16c2-1 2-3 0-4M14 3l1 2M19 4l-1 2M21 9l-2 1M12 8l3-3M16 12l3-3", fill: "none" })
  );
});

export default NibPartyPopper;
