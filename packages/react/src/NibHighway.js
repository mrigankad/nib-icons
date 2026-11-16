import { createElement as h, forwardRef } from 'react';

export const NibHighway = forwardRef(function NibHighway({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3L4 21M15 3l5 18M12 4v2M12 9v2M12 14v2M12 19v2", fill: "none" }),
    h('path', { d: "M7 3h10", fill: "none" })
  );
});

export default NibHighway;
