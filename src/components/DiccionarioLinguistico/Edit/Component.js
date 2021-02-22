import React, {Component} from 'react';
import {Form, Col, Row} from 'reactstrap';
import find from 'lodash/find';
import {
    RegularInput,
    InputText,
    CheckBox,
    PrimaryButton,
    Select,
    Title
} from '@reutilizables'
import {
    faBook,
    faComment,
    faFileDownload
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Container from 'reactstrap/lib/Container';
const variablesEstadisticas = [
    {
        "ID_VARIABLE":"100  ",
        "nombre":"Actividad económica",
        "abreviatura":"Actividad económica"
    },
    {
        "ID_VARIABLE":"10011",
        "nombre":"Actividad económico de la producción",
        "abreviatura":"Act. Econ. Producción","digitos":5
    },
    {
        "ID_VARIABLE":"200  ",
        "nombre":"Ocupación",
        "abreviatura":"Ocupación"
    },
    {
        "ID_VARIABLE":"20011",
        "nombre":"Ocupación o trabajo realizado",
        "abreviatura":"Ocupación"
    },
    {
        "ID_VARIABLE":"20012",
        "nombre":"Tareas que realiza",
        "abreviatura":"Tarea"
    },
    {
        "ID_VARIABLE":"20013",
        "nombre":"Herramientas utilizadas en el trabajo u ocupación",
        "abreviatura":"Herramientas"
    },
    {
        "ID_VARIABLE":"20014",
        "nombre":"Pública o Privada",
        "abreviatura":"Pública y Privada"
    },
    {
        "ID_VARIABLE":"20015",
        "nombre":"Tamaño en cantidad de personas que trabajan",
        "abreviatura":"Tamaño de la empresa"
    },
    {
        "ID_VARIABLE":"20017",
        "nombre":"Categoría ocupacional",
        "abreviatura":"Categoría Ocupacional"
    },
    {
        "ID_VARIABLE":"20018",
        "nombre":"Servicio doméstico",
        "abreviatura":"Ser dom"
    },
    {
        "ID_VARIABLE":"300  ",
        "nombre":"Comunidad humana",
        "abreviatura":"Comunidad humana"
    },
    {
        "ID_VARIABLE":"30011",
        "nombre":"Pueblos originarios",
        "abreviatura":"Pueblos originarios"
    },
    {
        "ID_VARIABLE":"400  ",
        "nombre":"Geográfico",
        "abreviatura":"Geográfico"
    },
    {
        "ID_VARIABLE":"40011",
        "nombre":"Continentes",
        "abreviatura":"Continentes"
    },
    {
        "ID_VARIABLE":"40012",
        "nombre":"Países",
        "abreviatura":"Países"
    },
    {
        "ID_VARIABLE":"40013",
        "nombre":"Provincia",
        "abreviatura":"Provincia"
    },
    {
        "ID_VARIABLE":"500  ",
        "nombre":"Educación",
        "abreviatura":"Educación"
    },
    {
        "ID_VARIABLE":"50011",
        "nombre":"Carreras",
        "abreviatura":"Carreras"
    },
    {
        "ID_VARIABLE":"40014",
        "nombre":"Localidad",
        "abreviatura":"Localidad"
    }
];
class Edit extends Component{
    componentDidMount(){
        const {DESCRIPCION_ORIGINAL, ID_TIPOLOGIA_DE_DICCIONARIO, ID_VARIABLE} = this.props.match.params;
        if(DESCRIPCION_ORIGINAL && ID_TIPOLOGIA_DE_DICCIONARIO && ID_VARIABLE){
            this.props.getOne({DESCRIPCION_ORIGINAL, ID_TIPOLOGIA_DE_DICCIONARIO, ID_VARIABLE})
        }
    }
    componentWillUnmount(){
        this.props.update({});
    }
    handleChange(e){
        const changes = {[e.target.id]: e.target.value}
        const {diccionario} = this.props;
        Object.assign(diccionario, changes)
        this.props.update(diccionario);
        this.forceUpdate();
    }
    handleClick(){
        this.props.submit();
    }
    render(){
        const {
            DESCRIPCION_DESTINO,
            DESCRIPCION_ORIGINAL,
            DOMINIO,
            ID_TIPOLOGIA_DE_DICCIONARIO,
            ID_VARIABLE,
            OBSERVACION,
            SUPERVISADO
        } = this.props.diccionario;
        return (
            <Container>
                <Title title='DICCIONARIO LINGUISTICO'/>
                <Form>
                    <Row form>
                        <Col md='8'>
                            <Select
                                id='ID_TIPOLOGIA_DE_DICCIONARIO'
                                label='Descripción del tipo de diccionario'
                                options={[
                                    {
                                        "id_tipologia_de_diccionario":"ANU",
                                        "descripcion":"Anuladas Comunes"
                                    },
                                    {
                                        "id_tipologia_de_diccionario":"CON",
                                        "descripcion":"Conectores Comunes"
                                    },
                                    {
                                        "id_tipologia_de_diccionario":"COR",
                                        "descripcion":"Corrector Especial"
                                    },
                                    {
                                        "id_tipologia_de_diccionario":"ESP",
                                        "descripcion":"Espúreas Comunes"
                                    },
                                    {
                                        "id_tipologia_de_diccionario":"EST",
                                        "descripcion":"Estandarizado Ocupación"
                                    },
                                    {
                                        "id_tipologia_de_diccionario":"FAM",
                                        "descripcion":"Familias de Actividad"
                                    },
                                    {
                                        "id_tipologia_de_diccionario":"NOA",
                                        "descripcion":"Normalizado especial"
                                    },
                                    {
                                        "id_tipologia_de_diccionario":"FCA",
                                        "descripcion":"Familia para CAES"
                                    },
                                    {
                                        "id_tipologia_de_diccionario":"FCL",
                                        "descripcion":"Familia para CLANAE"
                                    }
                                ]}
                                selectedOne={ID_TIPOLOGIA_DE_DICCIONARIO}
                                optionValue='id_tipologia_de_diccionario'
                                optionLabel='descripcion'
                                onChange={(e)=>this.handleChange(e)}
                            />
                        </Col>
                        <Col md={{ size: 4}}>
                            <FontAwesomeIcon icon={faFileDownload} className='fa-3x icon'/>
                            <FontAwesomeIcon icon={faComment} className='fa-3x icon'/>
                            <FontAwesomeIcon icon={faBook} className='fa-3x icon'/>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md='2'>
                            <RegularInput
                                label='Id Variable'
                                id='ID_VARIABLE'
                                value={ID_VARIABLE}
                                onChange={(e)=>this.handleChange(e)}
                            />
                        </Col>
                        <Col md='3'>
                            <RegularInput
                                label='Abreviatura'
                                value={find(variablesEstadisticas, {ID_VARIABLE:ID_VARIABLE})?.abreviatura || ''}
                            />
                        </Col>
                        <Col md='7'>
                            <Select
                                label='Variable Estadística'
                                id='ID_VARIABLE'
                                options={variablesEstadisticas}
                                optionValue='ID_VARIABLE'
                                optionLabel='nombre'
                                selectedOne={ID_VARIABLE}
                                onChange={(e)=>this.handleChange(e)}
                            />
                        </Col>
                    </Row>
                    <Row form>
                        <Col md='6'>
                            <RegularInput
                                label='Palabra/Frase Origen'
                                id='DESCRIPCION_ORIGINAL'
                                value={DESCRIPCION_ORIGINAL}
                                onChange={(e)=>this.handleChange(e)}
                            />
                        </Col>
                        <Col md='6'>
                            <RegularInput
                                label='Palabra/Frase Destino'
                                id='DESCRIPCION_DESTINO'
                                value={DESCRIPCION_DESTINO}
                                onChange={(e)=>this.handleChange(e)}
                            />
                        </Col>
                    </Row>
                    <Row form>
                        <Col md='6'>
                            <InputText
                                label='Observación'
                                id='OBSERVACION'
                                value={OBSERVACION}
                                onChange={(e)=>this.handleChange(e)}
                            />
                        </Col>
                        <Col md='6'>
                            <InputText
                                label='Dominio'
                                id='DOMINIO'
                                value={DOMINIO}
                                onChange={(e)=>this.handleChange(e)}
                            />
                        </Col>
                    </Row>
                    <Row form>
                        <Col md='6' class='check-container'>
                            <CheckBox
                                label='Supervisado'
                            />
                        </Col>
                        <Col md='6'>
                            <PrimaryButton
                                label='GUARDAR'
                                onClick={()=>this.handleClick()}
                            />
                        </Col>
                        
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default Edit;
