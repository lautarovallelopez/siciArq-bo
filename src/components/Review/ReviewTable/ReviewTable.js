import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Button, Container} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight, faListAlt} from '@fortawesome/free-solid-svg-icons';

import Spinner from '@components/common/Spinner';
import {addressPropTypes} from '@util/propTypes';
import NoFoundResults from '@components/common/NoFoundResults';
import Pagination from '@components/common/Pagination';
import {getDateOrSD, getFullName} from '@util/ui';
import routes from '@constants/routes';
import transformRoute from '@util/transformRoute';
import Address from '@components/common/Address';

import StyledTable from './styled';

const ReviewTable = ({
    getSurveys,
    surveys,
    loading,
    requested,
    searchParams,
    count
}) => {
    const [selectedPage, setSelectedPage] = useState(0);

    const handleChangePage = page => {
        setSelectedPage(page);
        getSurveys({...searchParams, skip: page});
    };

    return (
        <Container fluid data-testid="review-table">
            <Spinner loading={loading && requested}>
                <>
                    {!loading && requested && !!searchParams?.state && (
                        <>
                            <StyledTable striped responsive data-testid="table">
                                <thead>
                                    <tr>
                                        <th>UPS</th>
                                        <th>Área</th>
                                        <th>N° Listado</th>
                                        <th>Domicilio</th>
                                        <th>Jefe de equipo</th>
                                        <th>Encuestador</th>
                                        <th>Supervisor</th>
                                        <th>Nº de Hogar</th>
                                        <th>Respuesta del BH</th>
                                        <th>Respuesta del BI</th>
                                        <th>Estado</th>
                                        <th>Situación</th>
                                        <th>Resultado de última visita</th>
                                        <th>Visualizar encuesta</th>
                                        <th>Completitud</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {surveys.map((survey, index) => (
                                        <tr id={survey.id} key={survey.id}>
                                            <td className="text-center" data-testid={`ups-${index}`}>{survey.ups}</td>
                                            <td className="text-center" data-testid={`area-${index}`}>{survey.area}</td>
                                            <td className="text-center" data-testid={`list-number-${index}`}>
                                                {`${survey.listNumber}`}
                                            </td>
                                            <td className="text-center" data-testid={`address-${index}`}>
                                                <Address address={survey}/>
                                            </td>
                                            <td className="text-center" data-testid={`team-leader-${index}`}>
                                                {getFullName(survey.teamLeader)}
                                            </td>
                                            <td className="text-center" data-testid={`pollster-${index}`}>
                                                {getFullName(survey.pollster)}
                                            </td>
                                            <td className="text-center" data-testid={`supervisor-${index}`}>
                                                {getFullName(survey.supervisor)}
                                            </td>
                                            <td className="text-center" data-testid={`household-number-${index}`}/>
                                            <td className="text-center" data-testid={`houshold-block-answer-${index}`}/>
                                            <td className="text-center" data-testid={`individual-block-answer-${index}`}/>
                                            <td className="text-center" data-testid={`status-${index}`}>
                                                {survey.statusName}
                                            </td>
                                            <td className="text-center" data-testid={`situation-${index}`}>
                                                {survey.situationName}
                                            </td>
                                            <td className="text-center" data-testid={`last-visit-result-${index}`}>
                                                {getDateOrSD(survey.syncDate)}
                                            </td>
                                            <td className="text-center" data-testid={`watching-action-${index}`}>
                                                <Button
                                                    tag={Link}
                                                    to={transformRoute(routes.REVIEW_OVERVIEW, {id: survey.id})}
                                                    data-testid={`survey-${index}-overview`}
                                                >
                                                    <FontAwesomeIcon icon={faArrowCircleRight} size="1x" data-testid="view-icon"/>
                                                </Button>
                                            </td>
                                            <td className="text-center" data-testid={`fullness-${index}`}/>
                                        </tr>
                                    ))}
                                </tbody>
                            </StyledTable>
                            {count === 0 ? (
                                <NoFoundResults icon={faListAlt} show title="No se encontraron encuestas."/>
                            ) : (
                                <Pagination
                                    onChange={handleChangePage}
                                    selectedPage={selectedPage}
                                    resultsCount={count}
                                    pageSize={50}
                                />
                            )}
                        </>
                    )}
                </>
            </Spinner>
        </Container>
    );
};

ReviewTable.propTypes = {
    getSurveys: PropTypes.func.isRequired,
    surveys: PropTypes.arrayOf(addressPropTypes.isRequired),
    loading: PropTypes.bool.isRequired,
    requested: PropTypes.bool.isRequired,
    searchParams: PropTypes.shape({
        state: PropTypes.string
    }),
    count: PropTypes.number
};

ReviewTable.defaultProps = {
    surveys: [],
    searchParams: undefined,
    count: undefined
};

export default ReviewTable;
