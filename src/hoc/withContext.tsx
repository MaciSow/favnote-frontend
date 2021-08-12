import React from 'react';
import PageContext from 'context/context';

export interface PageContextProps {
  pageContext: string;
}

// export function withContext<ComponentProps>(Component: React.ComponentType<ComponentProps & PageContextProps>) {
//   // eslint-disable-next-line react/jsx-props-no-spreading
//   return (props: ComponentProps) => <PageContext.Consumer>{(context:string) =>
//     // eslint-disable-next-line react/jsx-props-no-spreading
//     <Component {...props} pageContext={context} />}</PageContext.Consumer>;
// }

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//
// function withContext<P extends { pageContext?: PageContextProps },
//   R = Omit<P, 'pageContext'>>(Component: React.ElementType): React.FunctionComponent<R> {
//   return function contextComponent(props: R) {
//     /* eslint-disable react/jsx-props-no-spreading */
//     return <PageContext.Consumer>{(context) => context && <Component {...props as unknown as P} pageContext={context} />}</PageContext.Consumer>;
//     /* eslint-enable */
//   };
// }

const withContext = (Component: React.ElementType) =>
  function contextComponent(props: any) {
    /* eslint-disable react/jsx-props-no-spreading */
    return <PageContext.Consumer>{(context) => <Component {...props} pageContext={context} />}</PageContext.Consumer>;
    /* eslint-enable */
  };

export default withContext;
