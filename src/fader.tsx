import React from 'react';
import CSS from 'csstype'; // eslint-disable-line import/default

export type Visibility = 'show' | 'hide' | 'none';
export type Scaling = null | 'x' | 'xy' | 'y';

function getVisibilityStyle(visibility: Visibility): CSS.Properties {
  switch (visibility) {
    case 'show':
      return { opacity: 1 };
    case 'hide':
      return { opacity: 0 };
    case 'none':
      return { display: 'none' };
  }
}

function getScalingStyle(
  visibility: Visibility,
  scaling: Scaling
): CSS.Properties {
  if (visibility === 'none') {
    return {};
  }
  const a = visibility === 'show' ? 1 : 0;
  switch (scaling) {
    case 'x':
      return { transform: `scale(${a}, 1)` };
    case 'xy':
      return { transform: `scale(${a}, ${a})` };
    case 'y':
      return { transform: `scale(1, ${a})` };
    default:
      return {};
  }
}

function getStyle(visibility: Visibility, scaling: Scaling): CSS.Properties {
  return {
    ...getScalingStyle(visibility, scaling),
    ...getVisibilityStyle(visibility),
    transition: 'all 0.3s'
  };
}

export interface FaderProps extends React.HTMLAttributes<HTMLDivElement> {
  scaling?: Scaling;
  visibility?: Visibility;
}

export function Fader({
  scaling = null,
  visibility = 'show',
  children,
  ...props
}: FaderProps): React.ReactElement {
  const style = getStyle(visibility, scaling);

  return (
    <div className="Fader" {...props} style={style}>
      {children}
    </div>
  );
}
