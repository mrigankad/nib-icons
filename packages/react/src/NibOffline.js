import { createElement as h, forwardRef } from 'react';

export const NibOffline = forwardRef(function NibOffline({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M5.6 5.6l12.8 12.8M9 12.5a4 4 0 0 1 1.5-1.2M13.5 11.3a4 4 0 0 1 1.5 1.2M12 16h.01", fill: "none" })
  );
});

export default NibOffline;
