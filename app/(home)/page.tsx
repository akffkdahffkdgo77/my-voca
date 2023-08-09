'use client';

import LinkButton from './link-button';

export default function Home() {
    return (
        <div className="flex w-full items-center justify-center [height:calc(100vh-100px)]">
            <div className="flex items-center justify-between gap-5">
                <LinkButton path="/add" text="NEW" />
                <LinkButton path="/list" text="EXISTING" />
            </div>
        </div>
    );
}
