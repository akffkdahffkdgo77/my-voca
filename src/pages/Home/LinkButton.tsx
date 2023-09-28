import { CustomizedLink } from 'components';

type LinkButtonPropsType = {
    text: string;
    path: string;
};

export default function LinkButton({ text, path }: LinkButtonPropsType) {
    return (
        <CustomizedLink
            to={path}
            className="h-40 w-40 rounded-md bg-slate-900 text-center text-2xl font-bold leading-[160px] text-slate-50 hover:animate-pulse dark:border-0 dark:bg-slate-50 dark:text-slate-900 max-sm:h-32 max-sm:w-32 max-sm:text-lg max-sm:leading-[128px]"
        >
            {text}
        </CustomizedLink>
    );
}
