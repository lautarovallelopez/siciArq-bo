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

const AreasTable = ({
    fieldMaterials, getFieldMaterials, loading, stateName, requested
}) => {
    const {state, ups} = useParams();

    useEffect(() => {
        getFieldMaterials(state, ups);
    }, []);

    return (
        <Container fluid>
            <Spinner loading={loading || !stateName}>
                <BackButton
                    to={transformRoute(routes.FIELD_MATERIALS_BY_STATE, {state})}
                    title={`Composición de la muestra - Jurisdicción: ${stateName}, Ups: ${ups}`}
                />
                <Table striped>
                    <thead>
                        <tr>
                            <th>Áreas</th>
                            <th>Cant. viviendas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fieldMaterials.map((fieldMaterial, index) => (
                            <tr key={fieldMaterial.id}>
                                <td data-testid={`area-${index}`} className="text-center">
                                    <Button
                                        outline
                                        color="primary"
                                        tag={Link}
                                        to={transformRoute(routes.FIELD_MATERIALS_BY_AREA, {
                                            state: fieldMaterial.state,
                                            ups: fieldMaterial.ups,
                                            area: fieldMaterial.area
                                        })}
                                    >
                                        {fieldMaterial.area}
                                    </Button>
                                </td>
                                <td data-testid={`dwellings-${index}`} className="text-center">
                                    {fieldMaterial.dwellings}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <NoFoundResults show={fieldMaterials.length === 0 && requested} title="No se encontraron materiales de campo." icon={faListAlt}/>
            </Spinner>
        </Container>
    );
};

AreasTable.propTypes = {
    getFieldMaterials: PropTypes.func.isRequired,
    fieldMaterials: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            state: PropTypes.number.isRequired,
            ups: PropTypes.number.isRequired,
            area: PropTypes.number.isRequired,
            dwellings: PropTypes.number.isRequired
        }).isRequired
    ),
    loading: PropTypes.bool.isRequired,
    requested: PropTypes.bool.isRequired,
    stateName: PropTypes.string
};

AreasTable.defaultProps = {
    fieldMaterials: [],
    stateName: undefined
};

export default AreasTable;
