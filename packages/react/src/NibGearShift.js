import { createElement as h, forwardRef } from 'react';

export const NibGearShift = forwardRef(function NibGearShift({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "19", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "5", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "19", r: "2", fill: "none" }),
    h('path', { d: "M5 7v10M12 7v10M19 7v5H5", fill: "none" })
  );
});

export default NibGearShift;
