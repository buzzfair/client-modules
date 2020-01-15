import * as React from 'react';
const SvgHint = ({ title, size, color, width, height, ...props }) =>
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
        'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 11.9c0 .1-.1.1-.1.1H7.2c-.1 0-.2 0-.2-.1v-.8c0-.1 0-.1.1-.1h1.7c.1 0 .1 0 .1.1v.8zm.8-4.3l-.7 1.1c-.2.2-.2.5-.2.9v.3c0 .1 0 .1-.1.1H7.2c-.1 0-.2-.1-.2-.2v-.5c0-.5.2-.9.5-1.2L8.3 7c.3-.4.5-.7.5-1 0-.5-.3-.8-.8-.8s-.8.4-.9.9c0 .1-.1.1-.2.1L5.6 6s-.1 0-.1-.1c.2-1.2 1.1-2 2.5-2s2.4.9 2.4 2.2c.1.5-.2 1-.6 1.5z',
    })
  );
export default SvgHint;
//# sourceMappingURL=HintIcon.js.map
