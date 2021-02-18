import {
    getDateOrSD,
    getValueOrSD,
    getFullName,
    getUserNameAndSurname,
    getRoleName,
    getFullNameAndRole,
    parseStateId
} from '../ui';

describe('getValueOrSD', () => {
    let value;
    describe('when value is defined', () => {
        beforeEach(() => {
            value = 'test';
        });

        it('should return the value', () => {
            expect(getValueOrSD(value)).toBe('test');
        });

        it('should not return `S/D`', () => {
            expect(getValueOrSD(value)).not.toBe('S/D');
        });
    });

    describe('when value is not defined', () => {
        beforeEach(() => {
            value = undefined;
        });

        it('should return `S/D`', () => {
            expect(getValueOrSD(value)).toBe('S/D');
        });

        it('should not return another value', () => {
            expect(getValueOrSD(value)).not.toBe('test');
        });
    });
});

describe('getFullName', () => {
    let user;

    describe('when user is provided', () => {
        beforeEach(() => {
            user = {
                name: 'Nombre',
                surname: 'Apellido'
            };
        });

        it('shold return surname and name', () => {
            expect(getFullName(user)).toBe('Apellido, Nombre');
        });
    });

    describe('when user is not provided', () => {
        beforeEach(() => {
            user = null;
        });

        it('shold return `S/D`', () => {
            expect(getFullName(user)).toBe('S/D');
        });
    });
});

describe('getRoleName', () => {
    const user = {
        id: 1,
        name: 'userName',
        surname: 'userSurname'
    };
    const roles = [{
        id: 'cn',
        name: 'Coordinador Nacional'
    }];

    describe('when a role name is found', () => {
        beforeEach(() => {
            user.roles = ['cn'];
        });

        it('should return role name', () => {
            expect(getRoleName(user, roles)).toBe('Coordinador Nacional');
        });
    });

    describe('when a role name is not found', () => {
        beforeEach(() => {
            user.roles = ['su'];
        });

        it('should return `S/D`', () => {
            expect(getRoleName(user, roles)).toBe('S/D');
        });
    });
});

describe('getFullNameAndRole', () => {
    const user = {
        id: 1,
        name: 'userName',
        surname: 'userSurname',
        role: 'Coordinador Nacional'
    };

    describe('when user has not isSessionUser attribute', () => {
        beforeEach(() => {
            user.isSessionUser = undefined;
        });

        it('should return user name and role', () => {
            expect(getFullNameAndRole(user)).toBe('userSurname, userName - Coordinador Nacional');
        });
    });

    describe('when user has isSessionUser attribute', () => {
        beforeEach(() => {
            user.isSessionUser = true;
        });

        it('should return `Asignarme a mí` and the role name', () => {
            expect(getFullNameAndRole(user)).toBe('Asignarme a mí - Coordinador Nacional');
        });
    });
});

describe('getUserNameAndSurname', () => {
    let users;
    let userId;

    describe('when an user is found', () => {
        beforeEach(() => {
            users = [
                {
                    id: 1,
                    name: 'userName',
                    surname: 'userSurname'
                }
            ];
            userId = 1;
        });

        it('should return user name and surname', () => {
            expect(getUserNameAndSurname(users, userId)).toBe('userSurname, userName');
        });
    });

    describe('when an user is not found', () => {
        beforeEach(() => {
            users = [
                {
                    id: 1,
                    name: 'userName',
                    surname: 'userSurname'
                }
            ];
            userId = 2;
        });

        it('should return `S/D`', () => {
            expect(getUserNameAndSurname(users, userId)).toBe('S/D');
        });
    });
});

describe('getDateOrSD', () => {
    let date;
    let format;
    describe('when a valid date is defined', () => {
        beforeEach(() => {
            date = '2020-09-25T07:48:30Z';
        });

        it('should not return `S/D`', () => {
            expect(getDateOrSD(date, format)).not.toBe('S/D');
        });

        describe('when format is not provided', () => {
            beforeEach(() => {
                format = undefined;
            });

            it('should return the date value with default format', () => {
                expect(getDateOrSD(date, format)).toBe('25/09/2020 04:48:30');
            });
        });

        describe('when format is provided', () => {
            beforeEach(() => {
                format = 'YYYYMMDD';
            });

            it('should return the date value with specified format', () => {
                expect(getDateOrSD(date, format)).toBe('20200925');
            });
        });
    });

    describe('when a not valid date is defined', () => {
        beforeEach(() => {
            date = 'This is not a valid date!';
            format = undefined;
        });

        it('should return `S/D`', () => {
            expect(getDateOrSD(date, format)).toBe('S/D');
        });

        it('should not return a date value with provided format', () => {
            expect(getDateOrSD(date, format)).not.toBe('25/09/2020 07:48:30');
        });
    });

    describe('when date is not defined', () => {
        beforeEach(() => {
            date = undefined;
            format = undefined;
        });

        it('should return `S/D`', () => {
            expect(getDateOrSD(date, format)).toBe('S/D');
        });

        it('should not return a date value with provided format', () => {
            expect(getDateOrSD(date, format)).not.toBe('25/09/2020 07:48:30');
        });
    });
});

describe('parseStateId', () => {
    let id;

    describe('when id is string', () => {
        beforeEach(() => {
            id = '06';
        });

        it('should return the state code', () => {
            expect(parseStateId(id)).toBe('06');
        });
    });

    describe('when id is a two or more digits number', () => {
        beforeEach(() => {
            id = 10;
        });

        it('should return the string state code', () => {
            expect(parseStateId(id)).toBe('10');
        });
    });

    describe('when id is a one digit number', () => {
        beforeEach(() => {
            id = 6;
        });

        it('should return the string state code with trailing zero', () => {
            expect(parseStateId(id)).toBe('06');
        });
    });
});
