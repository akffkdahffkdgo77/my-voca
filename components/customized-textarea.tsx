'use client';

import { TextareaHTMLAttributes, forwardRef, ForwardedRef, useEffect, useRef } from 'react';

const useForwardRef = (ref: ForwardedRef<HTMLTextAreaElement>) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (ref) {
            if (typeof ref === 'function') {
                ref(textareaRef.current);
            } else {
                ref.current = textareaRef.current;
            }
        }
    }, [ref]);

    return textareaRef;
};

type CustomizedTextareaType = TextareaHTMLAttributes<HTMLTextAreaElement>;

const CustomizedTextarea = forwardRef<HTMLTextAreaElement, CustomizedTextareaType>(function createTextarea({ value, onChange, ...rest }, ref) {
    const textareaRef = useForwardRef(ref);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = '0px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [value]);

    return <textarea {...rest} ref={textareaRef} value={value} onChange={onChange} />;
});

export default CustomizedTextarea;
