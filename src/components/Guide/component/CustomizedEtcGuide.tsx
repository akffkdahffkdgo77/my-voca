import { CustomizedColorPicker, CustomizedLabelButton, CustomizedSelect, Typography } from 'components';

import { useTheme } from 'hooks';

export default function CustomizedEtcGuide() {
    const { theme, handleClick } = useTheme();

    return (
        <div className="relative w-full">
            <div className="absolute right-5 top-5 space-x-1">
                <CustomizedColorPicker onClick={handleClick} />
            </div>
            <div className="min-w-400pxr space-y-5 rounded bg-white p-5 shadow-md">
                <Typography variant="b24" fontWeight="700" component="h3">
                    Status Select
                </Typography>
                <div className="flex w-max gap-x-5">
                    <CustomizedSelect
                        theme={theme}
                        caption="Status"
                        options={[
                            { label: 'TODO', value: 'todo' },
                            { label: 'PROGRESS', value: 'progress' },
                            { label: 'DONE', value: 'done' }
                        ]}
                        value="todo"
                    />
                </div>
                <Typography variant="b24" fontWeight="700" component="h3">
                    Layout Button
                </Typography>
                <div className="flex items-center gap-x-2.5">
                    {['1x', '2x'].map((val) => (
                        <CustomizedLabelButton key={val} buttonText={val} theme={theme} />
                    ))}
                </div>
            </div>
        </div>
    );
}
