import { createElement as h, forwardRef } from 'react';

export const NibVoiceControl = forwardRef(function NibVoiceControl({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "9", y: "2", width: "6", height: "12", rx: "3", fill: "none" }),
    h('path', { d: "M5 11a7 7 0 0 0 14 0M12 18v4M2 9v4M22 9v4", fill: "none" })
  );
});

export default NibVoiceControl;
