import { useCallback } from 'react';

import { Button, Typography } from 'components/Core';
import { useModal } from 'components/Modal';

import { textStyle } from 'utils/theme';

export default function ModalGuide() {
    const handleModal = useModal();

    const handleClick = useCallback(() => handleModal({ message: '수정하시겠습니까?', messageType: 'confirm' }), []);

    return (
        <div className="h-max w-full space-y-5 rounded bg-white p-5 shadow-md">
            <Typography variant="b24" fontWeight="700" component="h3">
                Modal
            </Typography>
            <Button variant="outlined" size="medium" onClick={handleClick}>
                Open Modal
            </Button>
            <div className="min-w-320pxr overflow-hidden rounded-lg border border-gray-950 bg-white p-30pxr shadow-inner ">
                <Typography variant="b16" fontWeight="500" component="p" gutterBottom={40} twStyle={textStyle.modalText}>
                    수정하시겠습니까?
                </Typography>
                <div className="mx-auto w-full space-x-2.5 text-right">
                    <Button shape="square" variant="outlined" size="large" type="button">
                        취소
                    </Button>
                    <Button shape="square" variant="contained" size="large" type="button">
                        확인
                    </Button>
                </div>
            </div>
        </div>
    );
}
