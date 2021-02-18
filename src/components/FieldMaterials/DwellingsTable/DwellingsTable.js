/* global window */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {Container, Table} from 'reactstrap';
import {faListAlt} from '@fortawesome/free-solid-svg-icons';

import {fieldMaterialsPropTypes} from '@util/propTypes';
import BackButton from '@components/common/BackButton';
import Spinner from '@components/common/Spinner';
import routes from '@constants/routes';
import transformRoute from '@util/transformRoute';
import {getValueOrSD} from '@util/ui';
import NoFoundResults from '@components/common/NoFoundResults';

import {BackButtonContainer, StyledButton} from './styled';

const DwellingsTable = ({
    getFieldMaterials, fieldMaterials, loading, stateName, requested
}) => {
    const {state, ups, area} = useParams();

    useEffect(() => {
        getFieldMaterials(state, ups, area);
    }, []);

    return (
        <Container fluid>
            <Spinner loading={loading || !stateName}>
                <BackButtonContainer>
                    <BackButton
                        to={transformRoute(routes.FIELD_MATERIALS_BY_UPS, {state, ups})}
                        title={`Composición de la muestra - Jurisdicción: ${stateName}, Ups: ${ups}, Área: ${area}`}
                    />
                    <StyledButton outline color="primary" onClick={() => window.print()} className="d-print-none">
                        Imprimir
                    </StyledButton>
                </BackButtonContainer>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Manzana</th>
                            <th>Lado</th>
                            <th>Localidad</th>
                            <th>Nº de listado</th>
                            <th>Calle</th>
                            <th>Número</th>
                            <th>Piso</th>
                            <th>Casa</th>
                            <th>Departamento</th>
                            <th>Tipo de vivienda</th>
                            <th>Sector</th>
                            <th>Entrada</th>
                            <th>Edificio</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fieldMaterials.map((fieldMaterial, index) => (
                            <tr key={fieldMaterial.id}>
                                <td
                                    data-testid={`block-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.block)}
                                </td>
                                <td
                                    data-testid={`side-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.side)}
                                </td>
                                <td
                                    data-testid={`locality-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.locality)}
                                </td>
                                <td
                                    data-testid={`list-number-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.listNumber)}
                                </td>
                                <td
                                    data-testid={`street-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.street)}
                                </td>
                                <td
                                    data-testid={`cadastral-number-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.cadastralNumber)}
                                </td>
                                <td
                                    data-testid={`floor-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.floor)}
                                </td>
                                <td
                                    data-testid={`house-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.house)}
                                </td>
                                <td
                                    data-testid={`room-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.room)}
                                </td>
                                <td
                                    data-testid={`dwelling-type-code-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.dwellingTypeCode)}
                                </td>
                                <td
                                    data-testid={`sector-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.sector)}
                                </td>
                                <td
                                    data-testid={`entrance-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.entrance)}
                                </td>
                                <td
                                    data-testid={`building-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.building)}
                                </td>
                                <td
                                    data-testid={`description-${index}`}
                                    className="text-center"
                                >
                                    {getValueOrSD(fieldMaterial.description)}
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

DwellingsTable.propTypes = {
    getFieldMaterials: PropTypes.func.isRequired,
    fieldMaterials: PropTypes.arrayOf(fieldMaterialsPropTypes),
    loading: PropTypes.bool.isRequired,
    requested: PropTypes.bool.isRequired,
    stateName: PropTypes.string
};

DwellingsTable.defaultProps = {
    fieldMaterials: [],
    stateName: undefined
};

export default DwellingsTable;
