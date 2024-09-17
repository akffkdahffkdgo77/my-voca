import { Fragment } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import Footer from '../Footer';
import DesignGnb from '../Gnb/DesignGnb';
import TopButton from '../TopButton';

const DesignLayout = () => {
  return (
    <Fragment>
      <DesignGnb />
      <main className="relative w-full">
        <Outlet />
      </main>
      <div className="min-w-378">
        <Footer />
      </div>
      <TopButton />
      <ScrollRestoration />
    </Fragment>
  );
};

export default DesignLayout;
