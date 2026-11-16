import { createElement as h, forwardRef } from 'react';

export const NibEmojiText = forwardRef(function NibEmojiText({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h8M3 11h5M3 16h4", fill: "none" }),
    h('circle', { cx: "16.5", cy: "15", r: "5.5", fill: "none" }),
    h('path', { d: "M14.3 16.3a2.6 2.6 0 0 0 4.4 0M14.8 13.5h.01M18.2 13.5h.01", fill: "none" })
  );
});

export default NibEmojiText;
