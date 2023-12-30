import { useCallback, useState } from 'react';

import { Button } from 'components';
import tw from 'twin.macro';

const HEADINGS = ['typography', 'color', 'iconography', 'layout', 'component'];

export default function DesignHeader() {
    const [selectedHeading, setSelectedHeading] = useState('');

    const handleScrollIntoView = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setSelectedHeading(id);
        }
    }, []);

    return (
        <header className="flex-end fixed left-0 right-0 top-0 z-10 flex h-16 items-center bg-gray-100/50 px-10 shadow-md backdrop-blur-sm">
            <nav className="ml-auto w-auto">
                <ul className="flex items-center gap-x-2.5">
                    {HEADINGS.map((heading) => (
                        <li key={heading}>
                            <Button variant="text" onClick={() => handleScrollIntoView(heading)} twStyle={{ ...tw`capitalize`, ...(selectedHeading === heading && tw`font-bold`) }}>
                                {heading}
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
