import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { Typography } from 'components';
import tw, { theme } from 'twin.macro';

import { useGetList } from 'hooks/useFetch';
import { STATUS } from 'mocks/dummy/word';
import { formatDate } from 'utils/format';
import { StyleThemes, getBorderColor } from 'utils/theme';

type StyleType = {
    status: STATUS;
};

const TwListItem = styled.li(({ status }: StyleType) => [
    status === STATUS.TODO && tw`shadow-gray-200/50 shadow-md`,
    status === STATUS.PROGRESS && tw`shadow-christi-200/50 shadow-md`,
    status === STATUS.DONE && tw`shadow-red-200/50 shadow-md`,
    tw`relative h-full w-full rounded p-5 pb-[100%] transition-transform will-change-transform hover:-translate-y-5 tablet:h-80 tablet:w-80 tablet:pb-5`
]);

const TwStatus = styled.div(({ status }: StyleType) => [
    status === STATUS.TODO && tw`border-gray-950`,
    status === STATUS.PROGRESS && tw`border-christi-500 `,
    status === STATUS.DONE && tw`border-red-500`,
    tw`border-20 absolute right-0 top-0 border-b-transparent border-l-transparent`
]);

export default function List() {
    const { data } = useGetList();

    return (
        <div className="flex min-h-[calc(100vh-128px)] w-full items-start justify-center p-16">
            <ul className="flex w-full max-w-screen-desktop flex-wrap items-center gap-10">
                {data.map((val) => (
                    <TwListItem key={val.wordListIdx} status={val.status}>
                        <TwStatus status={val.status} />
                        <Link to={`/${val.wordListIdx}`} className="flex h-full w-full flex-col justify-between">
                            <div className="w-full space-y-1">
                                <Typography fontFamily="nanumpenscript" variant="h3" className="line-clamp-1">
                                    {val.wordListName}
                                </Typography>
                            </div>
                            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-x-1">
                                <Typography
                                    variant="b12"
                                    fontWeight="700"
                                    color={val.status === STATUS.TODO ? theme`colors.gray.950` : val.status === STATUS.PROGRESS ? theme`colors.christi.500` : theme`colors.red.500`}
                                    twStyle={{
                                        ...tw`w-max rounded border p-1 uppercase`,
                                        ...getBorderColor(val.status === STATUS.TODO ? StyleThemes.Gray : val.status === STATUS.PROGRESS ? StyleThemes.Christi : StyleThemes.Red)
                                    }}
                                >
                                    {val.status}
                                </Typography>
                                <Typography variant="b12" fontWeight="500" twStyle={tw`w-max rounded border border-gray-950 p-1`}>
                                    {val.category}
                                </Typography>
                                <div className="ml-auto flex items-end">
                                    <Typography fontFamily="nanumpenscript" variant="h4">
                                        {formatDate(val.wordListDate, 'DD')}
                                    </Typography>
                                    <Typography fontFamily="nanumpenscript" variant="h5">
                                        /
                                    </Typography>
                                    <Typography fontFamily="nanumpenscript" variant="h6">
                                        {formatDate(val.wordListDate, 'MM')}
                                    </Typography>
                                </div>
                            </div>
                        </Link>
                    </TwListItem>
                ))}
            </ul>
        </div>
    );
}
