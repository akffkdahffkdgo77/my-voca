import ColorPicker from '@components/ColorPicker';

import { StyleThemes } from '@utils/theme';

interface Props {
  onClick: (newTheme: StyleThemes) => void;
}

const Aside = ({ onClick }: Props) => {
  return (
    <aside className="fixed right-10 top-1/2 hidden -translate-y-1/2 flex-col gap-y-2.5 rounded-full bg-white p-1 shadow-md desktop:flex">
      <ColorPicker onClick={onClick} />
    </aside>
  );
};

export default Aside;
