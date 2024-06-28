
import global from './global';

import catalogoData from './pages/catalogoData';
import aboutData from './pages/aboutData';
const getPageContext = ( page ) => {

    let pageVariables = {};
    switch ( page ) {
        case '/catalogo.html':
            pageVariables = catalogoData;
            break;
        case '/about.html':
            pageVariables = aboutData;
            break;
    }
    return {
        ...pageVariables,
        ...global(page),
    };
}

export default getPageContext;