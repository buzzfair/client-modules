import * as React from 'react';
const SvgProjects = ({ title, size, color, width, height, ...props }) =>
  React.createElement(
    'svg',
    Object.assign(
      {
        viewBox: '0 0 32 32',
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
        'M26.4 21.6L32 16l-7.2-7.2-1.2 1.4v2L22 13.8h-2.2l-1.6-1.6V10l1.6-1.6h2l1.4-1.2L19 3l-1.2 1.2 2.6 2.6h-1.2l-2.6 2.4v3.6l2.6 2.6h3.6l2.4-2.6v-1.2l4.4 4.4-5.8 6 1.2 1.2h2l1.6 1.6V27L27 28.6h-2.2L23.2 27v-2L22 23.8l-6 5.8-4.4-4.4h1.2l2.6-2.4v-3.6l-2.6-2.6H9.2l-2.4 2.6v1.2L2.4 16l5.8-6L7 8.8H5L3.4 7.2V5L5 3.4h2.2L8.8 5v2L10 8.2l7.2-7L16 0l-5.6 5.6V4.4L8 1.8H4.4L1.8 4.4V8l2.6 2.4h1.2L0 16l7.2 7.2 1.2-1.4v-2l1.6-1.6h2.2l1.6 1.6V22l-1.6 1.6h-2l-1.4 1.2L16 32l5.6-5.6v1.4l2.6 2.4h3.6l2.4-2.4v-3.6l-2.4-2.6z',
    })
  );
export default SvgProjects;
//# sourceMappingURL=ProjectsIcon.js.map