export default {
    diccionarios : [],
    diccionarioActual : {
        DESCRIPCION_DESTINO: '',
        DESCRIPCION_ORIGINAL: '',
        DOMINIO: '',
        FECHA_ALTA: null,
        ID_TIPOLOGIA_DE_DICCIONARIO: '',
        ID_USUARIO_ALTA: 1,
        ID_VARIABLE: '',
        OBSERVACION: '',
        SUPERVISADO: ''
    },
    diccionarioOriginal: {
        DESCRIPCION_DESTINO: '',
        DESCRIPCION_ORIGINAL: '',
        DOMINIO: '',
        ID_TIPOLOGIA_DE_DICCIONARIO: '',
        ID_USUARIO_ALTA: 1,
        ID_VARIABLE: '',
        OBSERVACION: '',
        SUPERVISADO: ''
    },
    page: 1,
    total: 0,
    limit: 20,
    tableHeaders : [
        'DESCRIPCION_ORIGINAL',
        'ID_TIPOLOGIA_DE_DICCIONARIO',
        'ID_VARIABLE',
        'DESCRIPCION_DESTINO',
        'OBSERVACION',
        'DOMINIO'
    ],
    formHeaders : [
        'DESCRIPCION_ORIGINAL',
        'ID_TIPOLOGIA_DE_DICCIONARIO',
        'ID_VARIABLE',
        'DESCRIPCION_DESTINO',
        'OBSERVACION',
        'DOMINIO',
        'SUPERVISADO',
        'ID_USUARIO_ALTA',
        'FECHA_ALTA'
    ]
}