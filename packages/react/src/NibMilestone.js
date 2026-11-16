import { createElement as h, forwardRef } from 'react';

export const NibMilestone = forwardRef(function NibMilestone({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 22v-8M12 3v2M5 5h12l3 4.5-3 4.5H5z", fill: "none" })
  );
});

export default NibMilestone;
