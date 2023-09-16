'use client';

import Link from 'next/link';

type CustomizedLinkType = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: React.ReactNode;
};

export default function CustomizedLink({ href, children, ...props }: CustomizedLinkType) {
    return (
        <Link {...props} href={href}>
            {children}
        </Link>
    );
}
