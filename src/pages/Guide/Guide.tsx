import { ColorGuide, ComponentGuide, IconographyGuide, LayoutGuide, TypographyGuide } from './components';

// TODO: mobile
const Guide = () => {
  return (
    <div className="min-h-screen min-w-378 bg-gray-100/50 px-10 py-16 bg-grid">
      <div className="space-y-10 py-10">
        <TypographyGuide />
        <ColorGuide />
        <IconographyGuide />
        <LayoutGuide />
        <ComponentGuide />
      </div>
    </div>
  );
};

export default Guide;
