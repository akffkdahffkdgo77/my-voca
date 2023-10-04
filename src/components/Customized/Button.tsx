type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

/**
 *  TODO LIST
 *  - shape : rounded, square
 *  - variant : outlined, contained, text
 *  - size : mini, small, medium, large
 *  - theme : rust, buttered-rum, christi, blue-chill, blue-gem, jazzberry-jam
 *  - customizable properties:
 *      - border-radius
 *      - background-color
 *      - dimension (width & height)
 *  - state:
 *      - disabled
 *      - focus
 *      - hover
 *      - active
 */
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
