
import global from './global';

import catalogoData from './pages/catalogoData';

const getPageContext = ( page ) => {

    let pageVariables = {};
    switch ( page ) {
        case '/catalogo.html':
            pageVariables = catalogoData;
            break;
    }
    return {
        ...pageVariables,
        ...global(page),
    };
}

export default getPageContext;