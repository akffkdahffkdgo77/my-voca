import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { DocumentArrowUpIcon } from '@heroicons/react/24/outline';
import { Button, Typography, useModal, useToast } from 'components';
import tw, { theme as twinTheme } from 'twin.macro';

import dayjs from 'dayjs';

import { getWords } from 'utils/data';
import { StyleThemes, getBackgroundColor, getLightBorderColor, getTextColor } from 'utils/theme';

interface Props {
    theme: StyleThemes;
}

const MILLISECONDS = 1000;
const SECONDS = MILLISECONDS * 60;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 24;

const customStyle = {
    timeStyle: tw`px-2 h-8 w-36 leading-8`,
    tooltipStyle: tw`group-hover:block absolute top-11 right-0 hidden bg-gray-100 rounded shadow-xl w-max h-auto p-5`
};

const TwTriangle = styled.div(({ theme }: Props) => [
    tw`border-16 absolute right-5 top-5 hidden h-4 group-hover:block`,
    theme && [getLightBorderColor(theme), tw`border-x-transparent border-t-transparent`]
]);

export default function Header({ theme }: Props) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isRegister = pathname === '/register';

    const [time, setTime] = useState('');
    const timerId = useRef<NodeJS.Timer>();
    const handleModal = useModal();
    const { setMessage } = useToast();

    const dueDate = useMemo(() => {
        const startTime = Number(localStorage.getItem('startTime'));
        return dayjs(startTime).add(1, 'day').set('hour', 0).set('minute', 0).set('second', 0);
    }, []);

    useEffect(() => {
        timerId.current = setInterval(() => {
            const today = new Date();
            const diff = dueDate.diff(today);

            if (diff < 0) {
                if (isRegister) {
                    localStorage.clear();
                    localStorage.setItem('startTime', `${new Date().getTime()}`);
                    setMessage('모든 데이터가 초기화되었습니다.', { variant: 'info' });
                } else {
                    handleModal({
                        message: '새로운 데이터를 등록해주세요!',
                        confirmText: '등록하러 가기!'
                    }).then(() => {
                        localStorage.clear();
                        localStorage.setItem('startTime', `${new Date().getTime()}`);
                        navigate('/register', { replace: true });
                    });
                }
                setTime('00:00:00');
                clearInterval(timerId.current);
            } else {
                const hours = Math.floor((diff % HOURS) / MINUTES);
                const minutes = Math.floor((diff % MINUTES) / SECONDS);
                const seconds = Math.floor((diff % SECONDS) / MILLISECONDS);
                setTime(`${`${hours}`.padStart(2, '0')} : ${`${minutes}`.padStart(2, '0')} : ${`${seconds}`.padStart(2, '0')}`);
            }
        }, 1000);

        return () => clearInterval(timerId.current);
    }, [dueDate, isRegister]);

    const handleClick = useCallback(() => {
        if (getWords().length === 0) {
            setMessage('등록된 단어장이 없습니다.\n단어장을 먼저 등록해 주세요.', { variant: 'warning' });
        } else {
            navigate('/export');
        }
    }, []);

    return (
        <header className="fixed left-0 right-0 top-0 z-10 h-14 p-3 text-right shadow-md backdrop-blur-sm">
            {time && (
                <div className="m-auto flex max-w-7xl items-center justify-end gap-x-2.5">
                    <div className="group relative">
                        <Typography variant="h4" fontFamily="nanumpenscript" fontWeight="700" align="center" twStyle={{ ...customStyle.timeStyle, ...getTextColor(theme) }}>
                            {time}
                        </Typography>
                        <TwTriangle theme={theme} />
                        <Typography variant="b14" fontWeight="600" twStyle={{ ...customStyle.tooltipStyle, ...getBackgroundColor(theme) }}>
                            {isRegister ? (
                                <>
                                    모든 테스트 종료까지 남은 시간입니다.
                                    <br />
                                    종료 후 모든 데이터가 초기화됩니다.
                                    <br />
                                    <br />
                                    <Typography component="small" variant="b12" fontWeight="600" color={twinTheme`colors.red.500`}>
                                        데이터를 백업하고 싶다면 <DocumentArrowUpIcon className="mb-1 inline h-5 w-5 text-gray-950" /> 아이콘을 클릭해 주세요.
                                    </Typography>
                                </>
                            ) : (
                                <>
                                    테스트 종료까지 남은 시간입니다.
                                    <br />
                                    종료 후 새로운 단어를 등록해 주세요.
                                </>
                            )}
                        </Typography>
                    </div>
                    <Button variant="icon" width={32} height={32} backgroundColor="transparent" title="데이터 백업하기" onClick={handleClick}>
                        <DocumentArrowUpIcon className="m-auto h-7 w-7 text-gray-950" />
                    </Button>
                </div>
            )}
        </header>
    );
}
