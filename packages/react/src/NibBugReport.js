import { createElement as h, forwardRef } from 'react';

export const NibBugReport = forwardRef(function NibBugReport({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 8a4 4 0 0 1 8 0v1H8zM7 9h10v5a5 5 0 0 1-10 0zM12 9v10M3 13h4M17 13h4M4 8l3 2M20 8l-3 2M4 19l3-2M20 19l-3-2M9 4L8 2M15 4l1-2", fill: "none" })
  );
});

export default NibBugReport;
