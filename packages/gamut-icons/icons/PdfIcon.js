import * as React from 'react';
const SvgPdf = ({ title, size, color, width, height, ...props }) =>
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
        'M7.8 8.5c-.1-.2-.1-.6-.1-.9.1-.3.2-.3.3 0 0 .2-.1.7-.2.9zm-2.3 4c-.2.3-.1.5.2.2.1-.1.3-.4.5-.7-.2.2-.5.4-.7.5zM7.4 11c.3-.1.9-.2 1-.3 0 0-.4-.5-.6-.7 0 .3-.4.9-.4 1zm3.2-11v3.9h3.9L10.6 0zm0 11.1h-.7c.2.1.5.3.8.3.3-.1.3-.3-.1-.3zm3.9-5.8V16h-13V0h7.7v5.3h5.3zm-3.8 5.2c-.4-.1-1.1 0-1.5.1-.3-.3-.7-.7-1-1.2.2-.5.3-1 .4-1.3.3-1.6-1.7-1.7-1.4 0 .1.5.2.9.4 1.3-.3.6-.6 1.2-1 1.8-.6.3-1.1.5-1.4.8-1 1 .2 2.2 1.2.8.2-.3.5-.8.7-1.2.6-.2 1.3-.4 1.9-.5.4.3 1.1.7 1.6.7 1.1.1 1.2-1.2.1-1.3z',
    })
  );
export default SvgPdf;
//# sourceMappingURL=PdfIcon.js.map
