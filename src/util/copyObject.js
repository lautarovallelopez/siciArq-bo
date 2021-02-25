import assign from 'lodash/assign';

const copyObject = objeto => {
    return assign({}, objeto);
}

export default copyObject;