import React, { lazy, Suspense } from "react";

interface LoadableProps {
  folder: string;
  componentName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export const Loadable = ({ folder, componentName, ...rest }: LoadableProps) => {
  const LazyComponent = lazy(() => {
    return import(`../${folder}/${componentName}`);
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...rest} />
    </Suspense>
  );
};
