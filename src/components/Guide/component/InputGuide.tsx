import { ChangeEvent, useCallback, useState } from 'react';

import { CustomizedColorPicker, Input, Textarea, Typography } from 'components';
import tw from 'twin.macro';

import { useTheme } from 'hooks';

const SAMPLE_TEXT =
    '설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력';

const customStyle = {
    input: tw`w-10`
};

export default function InputGuide() {
    const { theme, handleClick } = useTheme();
    const [value, setValue] = useState(SAMPLE_TEXT);

    const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.currentTarget.value), []);

    return (
        <div className="relative flex-1">
            <div className="absolute right-5 top-5 space-x-1">
                <CustomizedColorPicker onClick={handleClick} />
            </div>
            <div className="w-max space-y-5 rounded bg-white p-5 shadow-md">
                <Typography variant="b24" fontWeight="700" component="h3">
                    Input
                </Typography>
                <div className="flex min-w-480pxr items-center gap-x-10">
                    <Typography variant="b12" fontWeight="600" component="h4" twStyle={customStyle.input}>
                        Default
                    </Typography>
                    <Input theme={theme} variant="text" placeholder="닉네임을 입력해 주세요." />
                </div>
                <div className="flex w-480pxr items-center gap-x-10">
                    <Typography variant="b12" fontWeight="600" component="h4" twStyle={customStyle.input}>
                        Outlined
                    </Typography>
                    <Input theme={theme} labelText="닉네임" helperText="최소 3자 입력해 주세요" isError variant="outlined" placeholder="닉네임을 입력해 주세요." />
                </div>
                <div className="flex w-480pxr items-center gap-x-10">
                    <Typography variant="b12" fontWeight="600" component="h4" twStyle={customStyle.input}>
                        Contained
                    </Typography>
                    <Input theme={theme} labelText="닉네임" helperText="최소 3자 입력해 주세요" isError variant="contained" placeholder="닉네임을 입력해 주세요." />
                </div>
                <Typography variant="b24" fontWeight="700" component="h3">
                    Textarea
                </Typography>
                <div>
                    <Textarea labelText="Auto Height" placeholder="설명을 입력해 주세요" height={100} isAutoHeight value={value} onChange={handleChange} />
                    <Textarea labelText="Scrollable" height={100} placeholder="설명을 입력해 주세요" value={SAMPLE_TEXT.concat(SAMPLE_TEXT)} />
                </div>
            </div>
        </div>
    );
}
