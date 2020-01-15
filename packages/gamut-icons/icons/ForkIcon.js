import * as React from 'react';
const SvgFork = ({ title, size, color, width, height, ...props }) =>
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
        'M15.8 12.1l-3.6-3.3c-.2 0-.2-.1-.2-.1-.1 0-.2 0-.3.1v2.3h-.4c-.5 0-.9-.2-1.2-.5L5.5 6c-.8-.9-2-1.3-3.2-1.3h-2c-.1 0-.2.1-.2.3v2c0 .2.1.3.2.3h2c.5 0 1 .2 1.4.6l4.5 4.6c.8.8 1.8 1.2 3 1.3h.5v2.3c.1.1.2.1.3 0 0 0 .1 0 .2-.1l3.6-3.3c.1-.3.1-.4 0-.6zm0-8.7L12.2.1 12 0h-.3v2.3h-.5c-1.1 0-2.2.5-3 1.3l-.8 1c-.1.1-.1.2 0 .3l1.4 1.5c.1.1.2.1.3 0l.9-.9c.3-.3.8-.5 1.2-.6h.4v2.3c.1.1.2.1.3 0 0 0 .1 0 .2-.1l3.6-3.3c.2-.1.2-.2.1-.4z',
    })
  );
export default SvgFork;
//# sourceMappingURL=ForkIcon.js.map
