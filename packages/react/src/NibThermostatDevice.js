import { createElement as h, forwardRef } from 'react';

export const NibThermostatDevice = forwardRef(function NibThermostatDevice({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "5", fill: "none" }),
    h('path', { d: "M12 9v3l2 1", fill: "none" })
  );
});

export default NibThermostatDevice;
