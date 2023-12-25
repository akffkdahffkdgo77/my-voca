import { CustomizedColorPicker } from 'components';

import { StyleThemes } from 'utils/theme';

interface Props {
    onClick: (newTheme: StyleThemes) => void;
}

function TestAside({ onClick }: Props) {
    return (
        <aside className="fixed right-10 top-1/2 hidden -translate-y-1/2 flex-col gap-y-2.5 rounded-full bg-white p-1 shadow-md desktop:flex">
            <CustomizedColorPicker onClick={onClick} />
        </aside>
    );
}

export default TestAside;
