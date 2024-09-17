import { Link } from 'react-router-dom';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import Typography from '@components/Typography';

const Footer = () => {
  return (
    <footer className="flex h-32 w-full items-center bg-gray-950 px-5 text-white">
      <div className="mx-auto flex w-full max-w-7xl justify-between">
        <Link to="/">
          <Typography color="inherit" component="h1" fontFamily="nanumpenscript" variant="h2">
            My Voca
          </Typography>
        </Link>
        <nav>
          <ul className="flex flex-col items-center gap-x-5 gap-y-2.5 tablet:flex-row tablet:gap-y-0">
            <li>
              <Link className="flex items-start" to="/register">
                <Typography color="inherit" component="span" fontFamily="nanumpenscript" variant="b24">
                  데이터 등록
                </Typography>
                <ArrowTopRightOnSquareIcon className="h-3 w-3" />
              </Link>
            </li>
            <li>
              <Link className="flex items-start" to="/guide">
                <Typography color="inherit" component="span" fontFamily="nanumpenscript" variant="b24">
                  Guide
                </Typography>
                <ArrowTopRightOnSquareIcon className="h-3 w-3" />
              </Link>
            </li>
            <li>
              <Link
                className="flex items-start"
                rel="noopener noreferrer"
                target="_blank"
                to="https://github.com/akffkdahffkdgo77/my-voca"
              >
                <Typography color="inherit" component="span" fontFamily="nanumpenscript" variant="b24">
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
};

export default Footer;
