import { useEffect } from 'react';

function scrollingElement() {
    return document.scrollingElement || document.documentElement;
}

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

export default function useScrollingElement(trigger) {
    useEffect(() => {
        if (trigger) {
            scrollingElement().style.paddingRight = `${getScrollbarWidth()}px`;
            scrollingElement().style.overflow = 'hidden';
        } else {
            scrollingElement().style.overflow = 'auto';
            scrollingElement().style.paddingRight = 0;
        }
    }, [trigger]);
}

