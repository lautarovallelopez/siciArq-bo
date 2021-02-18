export default class User {
    id = null;
    name = null;
    email = null;
    surname = null;
    documentId = null;
    deleted = false;
    roles = [];
    assignment = {};
    attributes = {
        phone: null,
        stateId: null,
        department: null,
        fraction: null,
        radius: null,
        cuit: ''
    };

    constructor(obj) {
        Object.assign(this, obj);
    }
}
