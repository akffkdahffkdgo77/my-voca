import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import tw from 'twin.macro';

import Typography from '@components/Typography';

import { getWords } from '@utils/data';

const Home = () => {
  const words = useMemo(() => getWords(), []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center py-16 bg-grid-light">
      {words.length > 0 ? (
        <ul className="w-full max-w-5xl space-y-10 px-5">
          {words.map((word) => (
            <li
              key={word.wordListIdx}
              className="w-full rounded border border-gray-950 bg-white p-10 shadow-xl hover:opacity-50"
            >
              <Link to={`/test/${word.wordListIdx}`}>
                <Typography component="h2" fontFamily="nanumpenscript" gutterBottom={20} variant="h2">
                  {word.wordListName}
                </Typography>
                <div className="flex items-center gap-x-5">
                  {[word.status, word.category].map((val) => (
                    <Typography key={val} fontWeight="700" twStyle={customStyle.label}>
                      {val}
                    </Typography>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="h-full w-full max-w-5xl px-5">
          <Typography align="center" component="h2" fontFamily="nanumpenscript" gutterBottom={40} variant="h2">
            등록된 단어장이 없습니다...
          </Typography>
          <Link
            className="mx-auto block w-max rounded border border-gray-950 bg-white px-10 py-4 shadow-md hover:opacity-50"
            to="/register"
          >
            등록하러 가기!
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;

const customStyle = {
  label: tw`w-max rounded border-2 border-gray-950 px-2 py-1`,
};
