import React, { useState, useEffect } from 'react';

import { Fader, Scaling, Visibility } from './index';

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  scaling?: Scaling;
}

export function Switch({
  children,
  ...props
}: SwitchProps): React.ReactElement {
  const [visibility, setVisibility] = useState<Visibility>('show');
  const [content, setContent] = useState<React.ReactNode>(children);

  useEffect(() => {
    if (content === children) {
      return;
    }

    setVisibility('hide');

    const id = setTimeout((): void => {
      setContent(children);
      setVisibility('show');
    }, 350);

    return (): void => clearTimeout(id);
  }, [children, content]);

  return (
    <Fader visibility={visibility} {...props}>
      {content}
    </Fader>
  );
}
