import { withRouter } from 'react-router-dom';
import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Title, Loading, PrimaryButton, Paginator} from '@reutilizables';
import {Table} from '@components/common';
import {isEmpty} from 'lodash';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class List extends Component{
    componentDidMount(){
        const {page} = this.props.match.params;
        this.props.fetchDiccionarios(page);
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            const {page} = this.props.match.params;
            this.props.fetchDiccionarios(page);
        }
      }
    
    render(){
        const {
            formHeaders,
            tableHeaders,
            diccionarios,
            total,
            limit,
            page
        } = this.props;
        return(
            <Container className="themed-container" fluid={true}>
                <Row>
                    <Col >
                        <Title title='DICCIONARIO LINGUISTICO'/>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <PrimaryButton 
                            icono = {faPlus}
                            to='/diccionario-linguistico/new'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {isEmpty(diccionarios)?
                            <Loading />
                            :
                            <Table
                                headers = {tableHeaders}
                                rows = {diccionarios}
                                information = {formHeaders}
                                route='diccionarioLinguistico'
                                deleteFunction = {this.props.deleteDiccionario}
                            />
                            /*<Table
                                rows = {diccionarios}
                                headers = {tableHeaders}
                                information = {formHeaders}
                                acciones = {{
                                    editar:{
                                        to:'/diccionario-linguistico',
                                        attributes : ['DESCRIPCION_ORIGINAL', 'ID_TIPOLOGIA_DE_DICCIONARIO', 'ID_VARIABLE']
                                    },
                                    eliminar : {
                                        onClick : (ids)=>this.props.delete(ids),
                                        attributes : ['DESCRIPCION_ORIGINAL', 'ID_TIPOLOGIA_DE_DICCIONARIO', 'ID_VARIABLE']
                                    }
                                }}
                            />*/
                        }
                    </Col>

                </Row>
                <Row>
                    <Col md={{ size: 3, offset:4}}>
                        {!isEmpty(diccionarios) &&
                            <Paginator
                                total={total}
                                limit={limit}
                                url='/diccionario-linguistico'
                                actualPage={page}
                            />
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default List;
