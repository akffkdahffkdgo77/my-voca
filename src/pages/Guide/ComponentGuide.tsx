import { Typography } from 'components';
import { CoreEtcGuide, CustomizedEtcGuide, InputGuide, ModalGuide, TextInputGuide, ToastGuide } from 'components/Guide';

export default function ComponentGuide() {
    return (
        <>
            <Typography id="component" variant="h3" component="h2">
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
                    <CustomizedEtcGuide />
                </div>
                <TextInputGuide />
            </div>
        </>
    );
}
