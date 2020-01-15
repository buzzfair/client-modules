import * as React from 'react';
const SvgGear = ({ title, size, color, width, height, ...props }) =>
  React.createElement(
    'svg',
    Object.assign(
      {
        viewBox: '0 0 16 16',
        width: size || width || '1em',
        height: size || height || '1em',
        fill: color || 'currentColor',
        role: 'img',
      },
      props
    ),
    React.createElement('title', null, title),
    React.createElement('path', {
      fill: color || 'currentColor',
      d:
        'M8 9.9c-1.1 0-1.9-.8-1.9-1.9S7 6.1 8 6.1s1.9.8 1.9 1.9c0 1.1-.8 1.9-1.9 1.9zm7.8-3c0-.1-.1-.2-.2-.2h-2.1c-.1-.6-.4-1.2-.7-1.7l1.5-1.5c.1-.1.1-.2 0-.3l-1.5-1.5c-.1-.1-.2-.1-.3 0L11 3.1c-.5-.3-1.1-.6-1.7-.7v-2c0-.1-.1-.2-.2-.2H6.9c-.1 0-.2.1-.2.2v2c-.6.1-1.2.4-1.7.7L3.5 1.7c-.1-.1-.2-.1-.3 0L1.7 3.2c-.1.1-.1.2 0 .3L3.2 5c-.3.5-.5 1-.6 1.6H.4c-.1 0-.2.1-.2.2V9c0 .1.1.2.2.2h2.2c.1.6.4 1.1.7 1.6l-1.6 1.6c-.1.1-.1.2 0 .3l1.5 1.5c.1.1.2.1.3 0L5 12.7c.5.3 1 .5 1.6.7v2.2c0 .1.1.2.2.2H9c.1 0 .2-.1.2-.2v-2.2c.6-.1 1.1-.4 1.6-.7l1.5 1.5c.1.1.2.1.3 0l1.5-1.5c.1-.1.1-.2 0-.3l-1.5-1.5c.3-.5.5-1 .7-1.6h2.1c.1 0 .2-.1.2-.2V6.9z',
    })
  );
export default SvgGear;
//# sourceMappingURL=GearIcon.js.map