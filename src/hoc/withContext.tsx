import React from 'react';
import PageContext from 'context/context';

export interface PageContextProps {
  pageContext: string;
}

export function withContext<ComponentProps>(Component: React.ComponentType<ComponentProps & PageContextProps>) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (props: ComponentProps) => (
    <PageContext.Consumer>
      {(context: string) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Component {...props} pageContext={context} />
      )}
    </PageContext.Consumer>
  );
}

export default withContext;
