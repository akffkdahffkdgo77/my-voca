import { Link } from 'react-router-dom';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Typography } from 'components';

export default function Footer() {
    return (
        <footer className="flex h-32 w-full items-center bg-gray-950 px-5 text-white">
            <div className="mx-auto flex w-full max-w-7xl justify-between">
                <Link to="/">
                    <Typography variant="h2" component="h1" fontFamily="nanumpenscript" color="inherit">
                        My Voca
                    </Typography>
                </Link>
                <nav>
                    <ul className="flex flex-col items-center gap-x-5 gap-y-2.5 tablet:flex-row tablet:gap-y-0">
                        <li>
                            <Link to="/register" className="flex items-start">
                                <Typography variant="b24" component="span" fontFamily="nanumpenscript" color="inherit">
                                    데이터 등록
                                </Typography>
                                <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                            </Link>
                        </li>
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
