type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    type?: 'button' | 'reset' | 'submit';
    isDisabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function CustomizedButton({ children, type = 'button', isDisabled = false, onClick, ...props }: ButtonType) {
    return (
        <button
            {...props}
            // eslint-disable-next-line react/button-has-type
            type={type}
            disabled={isDisabled}
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
