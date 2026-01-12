'use client';

import React from 'react';
import { useFlipbook } from './FlipbookContext';

const FlipbookTrigger = ({ pdfUrl, title, children, className = '' }) => {
    const { openFlipbook } = useFlipbook();

    const handleClick = (e) => {
        e.preventDefault();
        openFlipbook(pdfUrl, title);
    };

    // If multiple children or just text, wrap in a div. 
    // If single child, clone it and add onClick.
    if (React.Children.count(children) === 1 && React.isValidElement(children)) {
        return React.cloneElement(children, {
            onClick: handleClick,
            className: `${children.props.className || ''} ${className} cursor-pointer`.trim()
        });
    }

    return (
        <div onClick={handleClick} className={`cursor-pointer ${className}`}>
            {children}
        </div>
    );
};

export default FlipbookTrigger;
