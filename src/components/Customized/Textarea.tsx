import { TextareaHTMLAttributes, forwardRef, useEffect } from 'react';

import useForwardRef from 'hooks/useForwardRef';

type CustomizedTextareaType = TextareaHTMLAttributes<HTMLTextAreaElement>;

const CustomizedTextarea = forwardRef<HTMLTextAreaElement, CustomizedTextareaType>(function useCreateTextarea({ value, onChange, ...rest }, ref) {
    const textareaRef = useForwardRef<HTMLTextAreaElement>(ref);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = '0px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [value, textareaRef]);

    return <textarea {...rest} ref={textareaRef} value={value} onChange={onChange} />;
});

export default CustomizedTextarea;
