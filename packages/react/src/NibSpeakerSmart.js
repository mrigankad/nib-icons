import { createElement as h, forwardRef } from 'react';

export const NibSpeakerSmart = forwardRef(function NibSpeakerSmart({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "5.5", rx: "6", ry: "2.5", fill: "none" }),
    h('path', { d: "M6 5.5v13c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-13M9 13h.01M12 14h.01M15 13h.01", fill: "none" })
  );
});

export default NibSpeakerSmart;
