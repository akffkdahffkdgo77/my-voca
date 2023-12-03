import { Input, Typography } from 'components/Core';
import { CustomizedColorPicker, CustomizedMobileTextInput, CustomizedTextInput } from 'components/Customized';
import tw from 'twin.macro';

import { useTheme } from 'hooks';

export default function TextInputGuide() {
    const { theme, handleClick } = useTheme();

    return (
        <div className="relative w-full">
            <div className="absolute right-5 top-5 space-x-1">
                <CustomizedColorPicker onClick={handleClick} />
            </div>
            <div className="h-max space-y-5 rounded bg-white p-5 shadow-md">
                <Typography variant="b24" fontWeight="700" component="h3">
                    Title Input
                </Typography>
                <Input
                    hiddenText="단어장 이름"
                    type="text"
                    variant="text"
                    theme={theme}
                    maxLength={20}
                    placeholder="단어장 이름을 입력해 주세요"
                    twStyle={tw`bg-inherit text-h1 h-full px-0 font-nanumpenscript`}
                />
                <Typography variant="b24" fontWeight="700" component="h3">
                    Single TextInput
                </Typography>
                <div>
                    <CustomizedTextInput theme={theme} />
                    <CustomizedTextInput theme={theme} />
                </div>
                <Typography variant="b24" fontWeight="700" component="h3">
                    Double TextInput
                </Typography>
                <div>
                    <CustomizedTextInput isDouble theme={theme} />
                    <CustomizedTextInput isDouble theme={theme} />
                </div>
                <Typography variant="b24" fontWeight="700" component="h3">
                    Mobile TextInput
                </Typography>
                <CustomizedMobileTextInput theme={theme} />
            </div>
        </div>
    );
}