import { Fragment } from 'react';

import Typography from '@components/Typography';

import CoreEtcGuide from './CoreEtcGuide';
import InputGuide from './InputGuide';
import ModalGuide from './ModalGuide';
import TextInputGuide from './TextInputGuide';
import ToastGuide from './ToastGuide';

const ComponentGuide = () => {
  return (
    <Fragment>
      <Typography component="h2" id="component" variant="h3">
        Component
      </Typography>
      <div className="flex flex-wrap gap-10">
        <InputGuide />
        <div className="flex-1 space-y-10">
          <CoreEtcGuide />
          <ModalGuide />
        </div>
        <div className="flex-1 space-y-10">
          <ToastGuide />
        </div>
        <TextInputGuide />
      </div>
    </Fragment>
  );
};

export default ComponentGuide;
