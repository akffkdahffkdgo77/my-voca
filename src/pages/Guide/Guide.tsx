import { useIntersectionObserver } from '@hooks/utils';

import { ColorGuide, ComponentGuide, IconographyGuide, LayoutGuide, TypographyGuide } from './components';

// TODO: mobile
const Guide = () => {
  const { ref } = useIntersectionObserver((intersectedId) => {
    const header = document.getElementById('gnb');
    const listItem = header?.getElementsByTagName('li') || [];
    [...listItem].forEach((element) => {
      const button = element.firstChild as HTMLElement;
      if (element.id.replace(/gnb-/gi, '') === intersectedId.toLowerCase()) {
        button.classList.replace('font-normal', 'font-bold');
        button.classList.replace('hover:font-medium', 'hover:font-extrabold');
      } else {
        button.classList.replace('font-bold', 'font-normal');
        button.classList.replace('hover:font-extrabold', 'hover:font-medium');
      }
    });
  });

  return (
    <div className="min-h-screen min-w-378 bg-gray-100/50 px-10 py-16 bg-grid">
      <div ref={ref} className="space-y-10 py-10">
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
