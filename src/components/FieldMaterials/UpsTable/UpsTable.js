import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import {Button, Container, Table} from 'reactstrap';
import {faListAlt} from '@fortawesome/free-solid-svg-icons';

import Spinner from '@components/common/Spinner';
import BackButton from '@components/common/BackButton';
import routes from '@constants/routes';
import transformRoute from '@util/transformRoute';
import NoFoundResults from '@components/common/NoFoundResults';

const UpsTable = ({
    fieldMaterials, getFieldMaterials, loading, stateName, requested
}) => {
    const {state} = useParams();

    useEffect(() => {
        getFieldMaterials(state);
    }, []);

    return (
        <Container fluid>
            <Spinner loading={loading || !stateName}>
                <BackButton to={routes.FIELD_MATERIALS} title={`Composición de la muestra - Jurisdicción: ${stateName}`}/>
                <Table striped>
                    <thead>
                        <tr>
                            <th>UPS</th>
                            <th>Cant. áreas</th>
                            <th>Cant. viviendas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fieldMaterials.map((fieldMaterial, index) => (
                            <tr key={fieldMaterial.id}>
                                <td data-testid={`ups-${index}`} className="text-center">
                                    <Button
                                        outline
                                        color="primary"
                                        tag={Link}
                                        to={transformRoute(routes.FIELD_MATERIALS_BY_UPS, {state: fieldMaterial.state, ups: fieldMaterial.ups})}
                                    >
                                        {fieldMaterial.ups}
                                    </Button>
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

UpsTable.propTypes = {
    getFieldMaterials: PropTypes.func.isRequired,
    fieldMaterials: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            state: PropTypes.number.isRequired,
            ups: PropTypes.number.isRequired,
            areas: PropTypes.number.isRequired,
            dwellings: PropTypes.number.isRequired
        }).isRequired
    ),
    loading: PropTypes.bool.isRequired,
    requested: PropTypes.bool.isRequired,
    stateName: PropTypes.string
};

UpsTable.defaultProps = {
    fieldMaterials: [],
    stateName: undefined
};

export default UpsTable;
