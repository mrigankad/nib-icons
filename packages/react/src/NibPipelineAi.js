import { createElement as h, forwardRef } from 'react';

export const NibPipelineAi = forwardRef(function NibPipelineAi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "4", cy: "12", r: "2", fill: "none" }),
    h('rect', { x: "9", y: "9", width: "6", height: "6", rx: "1", fill: "none" }),
    h('circle', { cx: "20", cy: "12", r: "2", fill: "none" }),
    h('path', { d: "M6 12h3M15 12h3M12 4l.6 1.4L14 6l-1.4.6L12 8l-.6-1.4L10 6l1.4-.6z", fill: "none" })
  );
});

export default NibPipelineAi;
