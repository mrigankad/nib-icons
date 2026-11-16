import { createElement as h, forwardRef } from 'react';

export const NibSpeechToText = forwardRef(function NibSpeechToText({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "6", height: "10", rx: "3", fill: "none" }),
    h('path', { d: "M1 10a5 5 0 0 0 10 0M6 15v3M12 9h3M14 7l2 2-2 2M17 14h5M17 17h5M17 20h3", fill: "none" })
  );
});

export default NibSpeechToText;
