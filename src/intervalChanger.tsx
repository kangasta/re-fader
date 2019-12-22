import React, { useState, useEffect } from 'react';

import { Changer, ChangerProps } from './index';

export interface IntervalChangerProps extends ChangerProps {
  interval: number;
}

export function IntervalChanger({
  interval,
  children,
  ...props
}: IntervalChangerProps): React.ReactElement {
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const id = setInterval((): void => {
      setActive(
        (i: number): number => (i + 1) % React.Children.count(children)
      );
    }, interval);

    return (): void => {
      clearInterval(id);
    };
  }, [children, interval]);

  return (
    <Changer {...props}>{React.Children.toArray(children)[active]}</Changer>
  );
}
