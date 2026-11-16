import { createElement as h, forwardRef } from 'react';

export const NibPlayingCard = forwardRef(function NibPlayingCard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "2", width: "14", height: "20", rx: "2", fill: "none" }),
    h('path', { d: "M12 9c-1.5-1.5-3.5-.5-3.5 1 0 2 3.5 4 3.5 4s3.5-2 3.5-4c0-1.5-2-2.5-3.5-1zM8 5h.01M16 19h.01", fill: "none" })
  );
});

export default NibPlayingCard;
