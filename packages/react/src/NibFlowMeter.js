import { createElement as h, forwardRef } from 'react';

export const NibFlowMeter = forwardRef(function NibFlowMeter({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 16h6M16 16h6M2 13v6M22 13v6", fill: "none" }),
    h('circle', { cx: "12", cy: "16", r: "4", fill: "none" }),
    h('path', { d: "M12 12V6M9 3h6v3H9zM10 16h4M13 15l1 1-1 1", fill: "none" })
  );
});

export default NibFlowMeter;
