import { Fragment } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import Fab from '../Fab';
import Footer from '../Footer';
import DesignGnb from '../Gnb/DesignGnb';

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
      <Fab />
      <ScrollRestoration />
    </Fragment>
  );
};

export default DesignLayout;
