import React from 'react';
import {CardBody, CardHeader, Row} from 'reactstrap';

import {
    StyledBlock, StyledCol, StyledListNumber
} from '@components/Review/ReviewOverview/styled';
import {
    getDateOrSD, getFullName, getValueOrSD, StyledCard
} from '@util/ui';
import {addressPropTypes} from '@util/propTypes';

import AddressAttribute from './AddressAttribute';

const AddressData = ({address}) => (
    <StyledCard>
        <CardHeader color="info">
            Identificación de la vivienda
        </CardHeader>
        <CardBody>
            <Row className="align-items-center">
                <StyledListNumber sm={2}>
                    Nro. Listado
                    <h3>{address.listNumber}</h3>
                </StyledListNumber>
                <StyledBlock sm={10}>
                    <Row>
                        <StyledCol sm={3}>
                            <AddressAttribute
                                id="state"
                                label="Jurisdicción"
                                value={address.stateName}
                            />
                            <AddressAttribute
                                id="ups"
                                label="UPS"
                                value={address.ups}
                            />
                            <AddressAttribute
                                id="area"
                                label="Área"
                                value={address.area}
                            />
                            <AddressAttribute
                                id="fraction"
                                label="Fracción"
                                value={address.fraction}
                            />
                            <AddressAttribute
                                id="radius"
                                label="Radio"
                                value={address.radius}
                            />
                            <AddressAttribute
                                id="block"
                                label="Manzana"
                                value={address.block}
                            />
                            <AddressAttribute
                                id="side"
                                label="Lado Manzana"
                                value={address.side}
                            />
                        </StyledCol>
                        <StyledCol sm={3}>
                            <AddressAttribute
                                id="street"
                                label="Dirección"
                                value={address.street}
                            />
                            <AddressAttribute
                                id="cadastral-number"
                                label="Número"
                                value={getValueOrSD(address.cadastralNumber)}
                            />
                            <AddressAttribute
                                id="floor"
                                label="Piso"
                                value={getValueOrSD(address.floor)}
                            />
                            <AddressAttribute
                                id="room"
                                label="Departamento"
                                value={getValueOrSD(address.room)}
                            />
                        </StyledCol>
                        <StyledCol sm={3}>
                            <AddressAttribute
                                id="pollster"
                                label="Encuestador"
                                value={getFullName(address.pollster)}
                            />
                            <AddressAttribute
                                id="team-leader"
                                label="Jefe de equipo"
                                value={getFullName(address.teamLeader)}
                            />
                            <AddressAttribute
                                id="supervisor"
                                label="Supervisor"
                                value={getFullName(address.supervisor)}
                            />
                            <AddressAttribute
                                id="user"
                                label="Usuario"
                                value={getFullName(address.user)}
                            />
                        </StyledCol>
                        <StyledCol sm={3}>
                            <AddressAttribute
                                id="sync-date"
                                label="Última sincronización"
                                value={getDateOrSD(address.syncDate)}
                            />
                            <AddressAttribute
                                id="status"
                                label="Estado"
                                value={address.statusName}
                            />
                            <AddressAttribute
                                id="situation"
                                label="Situación"
                                value={address.situationName}
                            />
                        </StyledCol>
                    </Row>
                </StyledBlock>
            </Row>
        </CardBody>
    </StyledCard>
);

AddressData.propTypes = {
    address: addressPropTypes.isRequired
};

export default AddressData;
