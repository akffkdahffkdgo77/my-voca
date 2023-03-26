export default function Fab() {
    return (
        <button
            type="button"
            onClick={() => document.documentElement.scrollTo(0, 0)}
            className="absolute w-[50px] h-[50px] font-mono font-bold right-5 bottom-5 rounded-full bg-black text-white animate-bounce"
        >
            TOP
        </button>
    );
}
