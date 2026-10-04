import { useEffect } from 'react';

const SITE_NAME = 'Raza Alaqaband';

// Sets the tab title for the current route. No title means just the site name.
const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    }, [title]);
};

export default useDocumentTitle;
