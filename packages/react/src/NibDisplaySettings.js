import { createElement as h, forwardRef } from 'react';

export const NibDisplaySettings = forwardRef(function NibDisplaySettings({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M8 21h8M12 17v4", fill: "none" }),
    h('circle', { cx: "12", cy: "10", r: "2.5", fill: "none" }),
    h('path', { d: "M12 6v1M12 13v1M16 10h-1M9 10H8", fill: "none" })
  );
});

export default NibDisplaySettings;
