type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export default function CustomizedButton({ children, type = 'button', onClick, ...props }: ButtonType) {
    return (
        <button
            {...props}
            // eslint-disable-next-line react/button-has-type
            type={type}
            onClick={(e) => {
                e.stopPropagation();
                if (onClick) {
                    onClick(e);
                }
            }}
        >
            {children}
        </button>
    );
}
