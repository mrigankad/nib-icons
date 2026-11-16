import { createElement as h, forwardRef } from 'react';

export const NibHierarchy = forwardRef(function NibHierarchy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "5", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "19", cy: "19", r: "2", fill: "none" }),
    h('path', { d: "M12 7v10M5 17v-4h14v4", fill: "none" })
  );
});

export default NibHierarchy;
