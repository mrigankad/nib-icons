import { createElement as h, forwardRef } from 'react';

export const NibFirewallBrick = forwardRef(function NibFirewallBrick({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6zM4.2 10.5h15.6M5.5 15h13M9 6v4.5M15 6v4.5M12 10.5V15M9 15v4M15 15v4", fill: "none" })
  );
});

export default NibFirewallBrick;
