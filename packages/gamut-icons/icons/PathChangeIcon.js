import * as React from 'react';
const SvgPathChange = ({ title, size, color, width, height, ...props }) =>
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
      d:
        'M13 7.1c-.3.2-1.5 1-4 .8-3-.3-3.6 0-3.6 0l.6 5.9c0 .3-.2.6-.5.7-.3 0-.6-.2-.7-.5L3.7 2.7c0-.1 0-.1.1-.1 1.8-1 3.2-.8 4.8-.6 1.4.2 3-.3 3.5-.5 0 0 .1 0 .1.1l-1.2 3L13 7v.1z',
    })
  );
export default SvgPathChange;
//# sourceMappingURL=PathChangeIcon.js.map
