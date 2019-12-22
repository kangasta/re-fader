import React, { useState, useEffect } from 'react';

import { Fader, Scaling, Visibility } from './index';

export interface ChangerProps extends React.HTMLAttributes<HTMLDivElement> {
  fadeIn?: boolean;
  scaling?: Scaling;
  transitionTime?: number;
}

export function Changer({
  fadeIn = false,
  children,
  transitionTime = 300,
  ...props
}: ChangerProps): React.ReactElement {
  const [visibility, setVisibility] = useState<Visibility>('show');
  const [content, setContent] = useState<React.ReactNode>(
    fadeIn ? undefined : children
  );

  useEffect(() => {
    if (content === children) {
      return;
    }

    setVisibility('hide');
    const timeout = !content ? 50 : transitionTime + 50;
    const id = setTimeout((): void => {
      setContent(children);
      setVisibility('show');
    }, timeout);

    return (): void => clearTimeout(id);
  }, [children, content, transitionTime]);

  return (
    <Fader visibility={visibility} transitionTime={transitionTime} {...props}>
      {content}
    </Fader>
  );
}
