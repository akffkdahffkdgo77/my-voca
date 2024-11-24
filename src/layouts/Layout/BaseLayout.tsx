import { Fragment, useEffect, useMemo, useState } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import { COLOR } from '@utils/color';
import { getLocalStorage } from '@utils/localStorage';

import Fab from '../Fab';
import Footer from '../Footer';
import Gnb from '../Gnb/Gnb';

const BaseLayout = () => {
  const { pathname } = useLocation();
  const [startTime, setStartTime] = useState('');

  const hasHeader = useMemo(() => pathname !== '/export', [pathname]);
  const hasFab = useMemo(() => pathname.includes('/test'), [pathname]);

  useEffect(() => {
    if (!startTime && getLocalStorage('startTime')) {
      setStartTime(getLocalStorage('startTime'));
    }
  }, [pathname, startTime]);

  return (
    <Fragment>
      {hasHeader && startTime && <Gnb color={COLOR.Gray} />}
      <main className="relative w-full">
        <Outlet />
      </main>
      <Footer />
      {hasFab && <Fab />}
      <ScrollRestoration />
    </Fragment>
  );
};

export default BaseLayout;
