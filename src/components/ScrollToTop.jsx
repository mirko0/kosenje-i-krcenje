import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (hash) {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
                // If hash exists but element not found, don't scroll to top yet
                // Let the next timeout retry
                return;
            }

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        };

        handleScroll();

        // Fallback for cases where browser restoration happens after layout
        const timeoutId = setTimeout(handleScroll, 0);
        const timeoutId2 = setTimeout(handleScroll, 100);

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(timeoutId2);
        };
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
