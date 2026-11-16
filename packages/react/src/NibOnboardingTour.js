import { createElement as h, forwardRef } from 'react';

export const NibOnboardingTour = forwardRef(function NibOnboardingTour({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "19", cy: "5", r: "2", fill: "none" }),
    h('path', { d: "M7 19h6a3 3 0 0 0 0-6h-2a3 3 0 0 1 0-6h6", fill: "none" }),
    h('path', { d: "M5 3v6l3-1.5L5 6", fill: "none" })
  );
});

export default NibOnboardingTour;
