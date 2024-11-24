import { Fragment } from 'react';

import ColorPicker from '@components/ColorPicker';
import { TopIconButton } from '@components/IconButton';
import Typography from '@components/Typography';
import Footer from '@layouts/Footer';

import { useColor } from '@hooks/utils';

const LayoutGuide = () => {
  const { onColorChange } = useColor();

  return (
    <Fragment>
      <Typography component="h2" id="layout" variant="h3">
        Layout
      </Typography>
      <div className="space-y-5 rounded bg-white p-5 shadow-md">
        <div className="space-y-5">
          <Typography component="h3" fontWeight="700" variant="b24">
            Top Button&emsp;
            <Typography component="small" variant="b12">
              클릭 시 페이지 상단으로 이동
            </Typography>
          </Typography>
          <TopIconButton />
        </div>
        <div className="w-full space-y-5">
          <Typography component="h3" fontWeight="700" variant="b24">
            Aside&emsp;
            <Typography component="small" variant="b12">
              Desktop(min-width: 1280px)부터 노출
            </Typography>
          </Typography>
          <div className="flex w-max flex-col gap-y-2.5 rounded-full p-1 shadow-md">
            <ColorPicker onClick={onColorChange} />
          </div>
        </div>
        <div className="w-full space-y-5">
          <Typography component="h3" fontWeight="700" variant="b24">
            Footer&emsp;
            <Typography component="small" variant="b12">
              max-width : 1280px
            </Typography>
          </Typography>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default LayoutGuide;
