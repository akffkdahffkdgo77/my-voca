import { Button, Typography } from 'components';
import { theme } from 'twin.macro';

interface Props {
    onClick: (selected: number) => void;
}

// 선택 화면
export default function Step1({ onClick }: Props) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-5">
            <Button variant="contained" width={300} height={300} onClick={() => onClick(2)}>
                <Typography variant="b24" fontWeight="600" color={theme`colors.white`}>
                    파일
                    <br />
                    등록하기
                </Typography>
            </Button>
            <Button variant="contained" width={300} height={300} onClick={() => onClick(3)}>
                <Typography variant="b24" fontWeight="600" color={theme`colors.white`}>
                    직접
                    <br />
                    등록하기
                </Typography>
            </Button>
        </div>
    );
}
