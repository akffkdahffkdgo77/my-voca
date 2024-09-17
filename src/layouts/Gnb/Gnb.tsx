import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import dayjs from 'dayjs';
import tw, { theme as twinTheme } from 'twin.macro';

import { DocumentArrowUpIcon } from '@heroicons/react/24/outline';

import Button from '@components/Button';
import Typography from '@components/Typography';
import { useModal } from '@contexts/Modal';
import { useToast } from '@contexts/Toast';

import { getWords } from '@utils/data';
import { getLocalStorage } from '@utils/localStorage';
import { getBackgroundColor, getLightBorderColor, getTextColor, StyleThemes } from '@utils/theme';

interface Props {
  theme: StyleThemes;
}

const MILLISECONDS = 1000;
const SECONDS = MILLISECONDS * 60;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 24;

const Gnb = ({ theme }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleModal = useModal();
  const { setMessage } = useToast();

  const [time, setTime] = useState('');
  const timerId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const startTime = Number(getLocalStorage('startTime'));
    const dueDate = dayjs(startTime).add(1, 'day').set('hour', 0).set('minute', 0).set('second', 0);

    if (startTime) {
      timerId.current = setInterval(() => {
        const today = new Date();
        const diff = dueDate.diff(today);
        if (diff < 0) {
          clearInterval(timerId.current);
          handleModal({
            message: `모든 데이터가 초기화되었습니다.\n새로운 데이터를 등록하세요!`,
            confirmText: '등록하러 가기!',
          }).then(() => {
            localStorage.clear();
            window.location.reload();
          });
        } else {
          const hours = Math.floor((diff % HOURS) / MINUTES);
          const minutes = Math.floor((diff % MINUTES) / SECONDS);
          const seconds = Math.floor((diff % SECONDS) / MILLISECONDS);
          setTime(
            `${`${hours}`.padStart(2, '0')} : ${`${minutes}`.padStart(2, '0')} : ${`${seconds}`.padStart(2, '0')}`,
          );
        }
      }, 1000);
    }

    return () => clearInterval(timerId.current);
  }, [pathname]);

  const handleClick = useCallback(() => {
    if (getWords().length === 0) {
      setMessage('등록된 단어장이 없습니다.\n단어장을 먼저 등록하세요.', { variant: 'warning' });
    } else {
      navigate('/export');
    }
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-10 h-14 p-3 text-right shadow-md backdrop-blur-sm">
      {time && (
        <div className="m-auto flex max-w-7xl items-center justify-end gap-x-2.5">
          <div className="group relative">
            <Typography
              align="center"
              fontFamily="nanumpenscript"
              fontWeight="700"
              twStyle={{ ...customStyle.timeStyle, ...getTextColor(theme) }}
              variant="h4"
            >
              {time}
            </Typography>
            <TWTriangle theme={theme} />
            <Typography
              fontWeight="600"
              twStyle={{ ...customStyle.tooltipStyle, ...getBackgroundColor(theme) }}
              variant="b14"
            >
              <Fragment>
                모든 테스트 종료까지 남은 시간입니다.
                <br />
                종료 후 모든 데이터가 초기화됩니다.
                <br />
                <br />
                <Typography color={twinTheme`colors.red.500`} component="small" fontWeight="600" variant="b12">
                  데이터를 백업하고 싶다면 <DocumentArrowUpIcon className="mb-1 inline h-5 w-5 text-gray-950" />{' '}
                  아이콘을 클릭하세요.
                </Typography>
              </Fragment>
            </Typography>
          </div>
          <Button
            backgroundColor="transparent"
            height={32}
            title="데이터 백업하기"
            variant="icon"
            width={32}
            onClick={handleClick}
          >
            <DocumentArrowUpIcon className="m-auto h-7 w-7 text-gray-950" />
          </Button>
        </div>
      )}
    </header>
  );
};

export default Gnb;

const customStyle = {
  timeStyle: tw`h-8 w-36 px-2 leading-8`,
  tooltipStyle: tw`absolute right-0 top-11 hidden h-auto w-max rounded bg-gray-100 p-5 shadow-xl group-hover:block`,
};

const TWTriangle = styled.div(({ theme }: Props) => [
  tw`absolute right-5 top-5 hidden h-4 border-4 group-hover:block`,
  theme && [getLightBorderColor(theme), tw`border-x-transparent border-t-transparent`],
]);
