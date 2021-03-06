import React, { SVGProps } from 'react';

import { defaultIconProps } from '../defaultIconProps';

export const ReactIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props}>
      <title>React Icon</title>
      <g transform="translate(2 2)" fill="none" stroke="currentColor">
        <ellipse
          transform="rotate(30 9.816 10.082)"
          cx="9.816"
          cy="10.082"
          rx="3.136"
          ry="9.599"
        />
        <ellipse
          fill="currentColor"
          stroke="none"
          cx="9.792"
          cy="9.809"
          rx="1.667"
          ry="1.683"
        />
        <ellipse
          transform="scale(-1 1) rotate(30 0 -26.551)"
          cx="9.816"
          cy="10.082"
          rx="3.136"
          ry="9.599"
        />
        <ellipse
          transform="matrix(0 1 1 0 .095 -.095)"
          cx="10"
          cy="9.905"
          rx="3.136"
          ry="9.599"
        />
      </g>
    </svg>
  );
};

ReactIcon.defaultProps = defaultIconProps;

export default ReactIcon;
