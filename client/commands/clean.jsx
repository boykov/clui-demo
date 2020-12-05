import React from 'react';

const Clean = props => {
  React.useEffect(() => {
    if (props.item) {
      props.item.session.reset();
    }

    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return <div />;
};

export default {
  description: 'Cleans screen',
  run: () => <Clean />
};
