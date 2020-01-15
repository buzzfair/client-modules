import * as React from 'react';
const SvgCall = ({ title, size, color, width, height, ...props }) =>
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
        'M15.7 12.7l-2.5-2.5c-.5-.5-1.3-.5-1.8 0l-1.2 1.2c-.1 0-.2-.1-.2-.1-.8-.4-1.9-1-3-2.2-1.3-1.1-1.9-2.2-2.3-3 0-.1-.1-.2-.1-.2l1.2-1.2c.5-.5.5-1.3 0-1.8L3.4.4c-.5-.5-1.3-.5-1.8 0l-.8.7c-.2.3-.4.6-.6 1 0 .4-.1.7-.2 1.1-.3 2.7.9 5.2 4.3 8.6C9 16.4 12.7 16 12.9 16c.4 0 .7-.1 1-.3.4-.1.7-.3 1-.6l.7-.7c.5-.4.6-1.3.1-1.7z',
    })
  );
export default SvgCall;
//# sourceMappingURL=CallIcon.js.map
