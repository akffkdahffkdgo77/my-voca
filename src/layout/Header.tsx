import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { Typography, useModal } from 'components';
import tw from 'twin.macro';

import dayjs from 'dayjs';

import { StyleThemes, getBackgroundColor, getLightBorderColor, getTextColor } from 'utils/theme';

interface Props {
    theme: StyleThemes;
}

const MILLISECONDS = 1000;
const SECONDS = MILLISECONDS * 60;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 24;
const DUE_DATE = dayjs().add(1, 'day').set('hour', 0).set('minute', 0).set('second', 0);

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

    const [time, setTime] = useState('');
    const timerId = useRef<NodeJS.Timer>();
    const handleModal = useModal();

    const countDown = () => {
        const today = new Date();
        const diff = DUE_DATE.diff(today);

        if (diff < 0) {
            handleModal({ message: '새로운 데이터를 등록해주세요!', confirmText: '등록하러 가기!' }).then(() => {
                localStorage.clear();
                navigate('/register', { replace: true });
            });
            setTime('00:00:00');
            clearInterval(timerId.current);
        } else {
            const hours = Math.floor((diff % HOURS) / MINUTES);
            const minutes = Math.floor((diff % MINUTES) / SECONDS);
            const seconds = Math.floor((diff % SECONDS) / MILLISECONDS);
            setTime(`${`${hours}`.padStart(2, '0')} : ${`${minutes}`.padStart(2, '0')} : ${`${seconds}`.padStart(2, '0')}`);
        }
    };

    useEffect(() => {
        timerId.current = setInterval(countDown, 1000);
        return () => clearInterval(timerId.current);
    }, []);

    return (
        <header className="fixed left-0 right-0 top-0 z-10 h-14 p-3 text-right backdrop-blur-sm">
            <div className="m-auto flex max-w-7xl items-center justify-end gap-x-2.5">
                {time && (
                    <div className="group relative">
                        <Typography variant="h4" fontFamily="nanumpenscript" fontWeight="700" align="center" twStyle={{ ...customStyle.timeStyle, ...getTextColor(theme) }}>
                            {time}
                        </Typography>
                        <TwTriangle theme={theme} />
                        <Typography variant="b14" fontWeight="600" twStyle={{ ...customStyle.tooltipStyle, ...getBackgroundColor(theme) }}>
                            테스트 종료까지 남은 시간입니다.
                            <br />
                            종료 후 새로운 단어를 등록해 주세요.
                        </Typography>
                    </div>
                )}
            </div>
        </header>
    );
}
