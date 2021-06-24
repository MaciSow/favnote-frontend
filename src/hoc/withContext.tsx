import React from 'react';
import PageContext from 'context/context';

const withContext = (Component: any) => {
  console.log();

  return function contextComponent(props: any) {
    /* eslint-disable react/jsx-props-no-spreading */
    return <PageContext.Consumer>{(context) => <Component {...props} pageContext={context} />}</PageContext.Consumer>;
    /* eslint-enable */
  };
};

export default withContext;
