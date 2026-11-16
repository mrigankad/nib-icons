import { createElement as h, forwardRef } from 'react';

export const NibSmartLock = forwardRef(function NibSmartLock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "2", width: "12", height: "20", rx: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "9", r: "2.5", fill: "none" }),
    h('path', { d: "M12 11.5V14M9.5 18h5", fill: "none" })
  );
});

export default NibSmartLock;
