import { Loader } from 'components/Core';

export default function CustomizedFullPageLoader() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-white/30">
            <Loader />
        </div>
    );
}
