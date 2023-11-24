import { Link } from 'react-router-dom';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Typography } from 'components';

export default function Footer() {
    return (
        <footer className="tablet:min-w-1512pxr flex h-32 w-full items-center bg-gray-950 text-white under-tablet:px-5">
            <div className="mx-auto flex w-full max-w-7xl justify-between">
                <Link to="/">
                    <Typography variant="h2" component="h1" fontFamily="nanumpenscript" color="inherit">
                        My Voca
                    </Typography>
                </Link>
                <nav>
                    <ul className="flex items-center gap-x-5">
                        <li>
                            <Link to="/guide" target="_blank" rel="noopener noreferrer" className="flex items-start">
                                <Typography variant="b24" component="span" fontFamily="nanumpenscript" color="inherit">
                                    Guide
                                </Typography>
                                <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/akffkdahffkdgo77/my-voca" target="_blank" rel="noopener noreferrer" className="flex items-start">
                                <Typography variant="b24" component="span" fontFamily="nanumpenscript" color="inherit">
                                    GitHub
                                </Typography>
                                <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
