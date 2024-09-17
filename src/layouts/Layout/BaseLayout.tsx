import { Fragment, useEffect, useMemo, useState } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import { getLocalStorage } from '@utils/localStorage';
import { StyleThemes } from '@utils/theme';

import Footer from '../Footer';
import Gnb from '../Gnb/Gnb';
import TopButton from '../TopButton';

const BaseLayout = () => {
  const { pathname } = useLocation();
  const [startTime, setStartTime] = useState('');

  const hasHeader = useMemo(() => pathname !== '/export', [pathname]);
  const hasTopButton = useMemo(() => pathname.includes('/test'), [pathname]);

  useEffect(() => {
    if (!startTime && getLocalStorage('startTime')) {
      setStartTime(getLocalStorage('startTime'));
    }
  }, [pathname, startTime]);

  return (
    <Fragment>
      {hasHeader && startTime && <Gnb theme={StyleThemes.Gray} />}
      <main className="relative w-full">
        <Outlet />
      </main>
      <Footer />
      {hasTopButton && <TopButton />}
      <ScrollRestoration />
    </Fragment>
  );
};

export default BaseLayout;
