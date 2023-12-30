import ColorGuide from './ColorGuide';
import ComponentGuide from './ComponentGuide';
import IconographyGuide from './IconographyGuide';
import LayoutGuide from './LayoutGuide';
import TypographyGuide from './TypographyGuide';

// TODO: mobile
export default function Guide() {
    return (
        <div className="min-h-screen min-w-1512pxr bg-gray-100/50 px-10 py-16 bg-grid">
            <div className="space-y-10 py-10">
                <TypographyGuide />
                <ColorGuide />
                <IconographyGuide />
                <LayoutGuide />
                <ComponentGuide />
            </div>
        </div>
    );
}
