import * as React from 'react';
const SvgInstagram = ({ title, size, color, width, height, ...props }) =>
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
        'M14 16H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zM8 4.9c-1.2 0-2.3.7-2.8 1.8 0 .1-.1.1-.1.2V7c-.1.1-.1.2-.1.2v.7C5 9.6 6.4 11 8.1 11s3.1-1.4 3.1-3.1v-.7s0-.1-.1-.2v-.1c0-.1-.1-.1-.1-.2-.7-1.1-1.8-1.8-3-1.8zm6.2-2.3c0-.4-.4-.8-.8-.8h-1.6c-.4 0-.8.4-.8.8v1.6c0 .4.4.8.8.8h1.6c.4 0 .8-.4.8-.8V2.6zm0 4.1h-1.5c.1.4.2.8.2 1.3 0 2.7-2.2 4.9-4.9 4.9S3.1 10.7 3.1 8c0-.5.1-.9.2-1.3H1.8v6.7c0 .4.4.8.8.8h10.8c.4 0 .8-.4.8-.8V6.7z',
    })
  );
export default SvgInstagram;
//# sourceMappingURL=InstagramIcon.js.map
