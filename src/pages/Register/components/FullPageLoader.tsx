import Loader from '@components/Loader';

const FullPageLoader = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 cursor-progress">
      <div className="flex min-h-screen w-full items-center justify-center bg-white/30">
        <Loader />
      </div>
    </div>
  );
};

export default FullPageLoader;
