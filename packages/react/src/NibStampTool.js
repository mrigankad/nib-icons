import { createElement as h, forwardRef } from 'react';

export const NibStampTool = forwardRef(function NibStampTool({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "5", r: "2.5", fill: "none" }),
    h('path', { d: "M10.5 7.5L10 12h4l-.5-4.5M5 12h14v4H5zM5 20h14", fill: "none" })
  );
});

export default NibStampTool;
