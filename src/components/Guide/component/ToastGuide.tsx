/* eslint-disable no-console */
import { Typography, Toast } from 'components';

export default function ToastGuide() {
    const handleClose = () => console.log('toast guide');

    return (
        <div className="h-max w-full space-y-5 rounded bg-white p-5 shadow-md">
            <Typography variant="b24" fontWeight="700" component="h3">
                Toast
            </Typography>
            <div className="space-y-5">
                <Toast options={{ variant: 'default' }} onClose={handleClose}>
                    This is default!
                </Toast>
                <Toast options={{ variant: 'success' }} onClose={handleClose}>
                    This is success!
                </Toast>
                <Toast options={{ variant: 'error' }} onClose={handleClose}>
                    This is error!
                </Toast>
                <Toast options={{ variant: 'warning' }} onClose={handleClose}>
                    This is warning!
                </Toast>
                <Toast options={{ variant: 'info' }} onClose={handleClose}>
                    This is info!
                </Toast>
            </div>
        </div>
    );
}
