import { createElement as h, forwardRef } from 'react';

export const NibPodcast = forwardRef(function NibPodcast({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "10", r: "2.5", fill: "none" }),
    h('path', { d: "M12 14v8M7.5 15a6.5 6.5 0 1 1 9 0M5 18a10 10 0 1 1 14 0", fill: "none" })
  );
});

export default NibPodcast;
