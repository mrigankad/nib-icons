import { createElement as h, forwardRef } from 'react';

export const NibHotspot = forwardRef(function NibHotspot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "10", r: "2", fill: "none" }),
    h('path', { d: "M8 6a5.5 5.5 0 0 0 0 8M16 6a5.5 5.5 0 0 1 0 8M5 3a9.5 9.5 0 0 0 0 14M19 3a9.5 9.5 0 0 1 0 14M12 12v9", fill: "none" })
  );
});

export default NibHotspot;
