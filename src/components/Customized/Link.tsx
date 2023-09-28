import { Link } from 'react-router-dom';

type CustomizedLinkType = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string;
    children: React.ReactNode;
};

export default function CustomizedLink({ to, children, ...props }: CustomizedLinkType) {
    return (
        <Link {...props} to={to}>
            {children}
        </Link>
    );
}
