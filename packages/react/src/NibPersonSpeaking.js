import { createElement as h, forwardRef } from 'react';

export const NibPersonSpeaking = forwardRef(function NibPersonSpeaking({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "8", cy: "9", r: "3", fill: "none" }),
    h('path', { d: "M2 21a6 6 0 0 1 12 0M15 3h6v4.5h-2.5L16.5 9.5v-2H15z", fill: "none" })
  );
});

export default NibPersonSpeaking;
