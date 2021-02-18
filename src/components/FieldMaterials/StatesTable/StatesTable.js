import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
    Button, Container, Table, Row
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faListAlt, faChartPie} from '@fortawesome/free-solid-svg-icons';

import Spinner from '@components/common/Spinner';
import routes from '@constants/routes';
import transformRoute from '@util/transformRoute';
import NoFoundResults from '@components/common/NoFoundResults';

const StatesTable = ({
    fieldMaterials, getFieldMaterials, loading, requested
}) => {
    useEffect(() => {
        getFieldMaterials();
    }, []);

    return (
        <Container fluid>
            <Spinner loading={loading}>
                <Row>
                    <FontAwesomeIcon icon={faChartPie} size="2x" className="mr-3"/>
                    <h2>Composición de la muestra</h2>
                </Row>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Jurisdicción</th>
                            <th>Cant. ups</th>
                            <th>Cant. áreas</th>
                            <th>Cant. viviendas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fieldMaterials.map((fieldMaterial, index) => (
                            <tr key={fieldMaterial.id}>
                                <td data-testid={`state-${index}`} className="text-center">
                                    <Button
                                        outline
                                        color="primary"
                                        tag={Link}
                                        to={transformRoute(routes.FIELD_MATERIALS_BY_STATE, {state: fieldMaterial.state})}
                                    >
                                        {fieldMaterial.name}
                                    </Button>
                                </td>
                                <td data-testid={`ups-${index}`} className="text-center">
                                    {fieldMaterial.ups}
                                </td>
                                <td data-testid={`areas-${index}`} className="text-center">
                                    {fieldMaterial.areas}
                                </td>
                                <td data-testid={`dwellings-${index}`} className="text-center">
                                    {fieldMaterial.dwellings}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <NoFoundResults icon={faListAlt} show={fieldMaterials.length === 0 && requested} title="No se encontraron materiales de campo."/>
            </Spinner>
        </Container>
    );
};

StatesTable.propTypes = {
    getFieldMaterials: PropTypes.func.isRequired,
    fieldMaterials: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            state: PropTypes.number.isRequired,
            ups: PropTypes.number.isRequired,
            areas: PropTypes.number.isRequired,
            dwellings: PropTypes.number.isRequired
        }).isRequired
    ),
    loading: PropTypes.bool.isRequired,
    requested: PropTypes.bool.isRequired
};

StatesTable.defaultProps = {
    fieldMaterials: []
};

export default StatesTable;
