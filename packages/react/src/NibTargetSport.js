import { createElement as h, forwardRef } from 'react';

export const NibTargetSport = forwardRef(function NibTargetSport({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "10", r: "7", fill: "none" }),
    h('circle', { cx: "12", cy: "10", r: "3.5", fill: "none" }),
    h('circle', { cx: "12", cy: "10", r: "0.8", fill: "none" }),
    h('path', { d: "M8 16l-2 6M16 16l2 6M12 17v5", fill: "none" })
  );
});

export default NibTargetSport;
