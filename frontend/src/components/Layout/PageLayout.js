import { Fragment } from 'react';
import MainHeader from './MainHeader';

const PageLayout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default PageLayout;
