import Loader from '@components/Loader';

const FullPageLoader = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex cursor-progress items-center justify-center bg-black/30">
      <Loader />
    </div>
  );
};

export default FullPageLoader;
