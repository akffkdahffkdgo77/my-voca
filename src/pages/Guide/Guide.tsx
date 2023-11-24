import { useState } from 'react';

import { Button } from 'components';
import tw from 'twin.macro';

import ColorGuide from './ColorGuide';
import ComponentGuide from './ComponentGuide';
import IconographyGuide from './IconographyGuide';
import LayoutGuide from './LayoutGuide';
import TypographyGuide from './TypographyGuide';

const headings = ['typography', 'color', 'iconography', 'layout', 'component'];

// TODO: mobile
export default function Guide() {
    const [selectedHeading, setSelectedHeading] = useState('');

    const handleScrollIntoView = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setSelectedHeading(id);
        }
    };

    return (
        <div className="min-w-1512pxr bg-gray-100/50 py-16">
            <header className="flex-end fixed left-0 right-0 top-0 z-10 flex h-16 items-center bg-gray-100/50 px-10 shadow-md backdrop-blur-sm">
                <nav className="ml-auto w-auto">
                    <ul className="flex items-center gap-x-2.5">
                        {headings.map((heading) => (
                            <li key={heading}>
                                <Button variant="text" onClick={() => handleScrollIntoView(heading)} twStyle={{ ...tw`capitalize`, ...(selectedHeading === heading && tw`font-bold`) }}>
                                    {heading}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div className="min-h-screen w-full space-y-10 overflow-x-auto p-10">
                <TypographyGuide />
                <ColorGuide />
                <IconographyGuide />
                <LayoutGuide />
                <ComponentGuide />
            </div>
        </div>
    );
}
