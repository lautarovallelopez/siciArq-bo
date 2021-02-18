import React from 'react';
import {CardHeader, Row} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser} from '@fortawesome/free-solid-svg-icons';

import {
    StyledResponse, StyledRow, StyledDwelling
} from '@components/Review/ReviewOverview/styled';
import {dwellingPropTypes} from '@util/propTypes';
import {StyledCard} from '@util/ui';
import {getResponseLabel} from '@util/chaptersData';
import {entities, answers} from '@constants/review';

const DwellingSummary = ({dwelling}) => (
    <StyledCard>
        <CardHeader>
            Resumen de la vivienda
        </CardHeader>
        <StyledRow
            className="align-items-center"
            response={dwelling.dwellingResponse?.response}
        >
            {dwelling?.dwellingResponse && (
                <StyledDwelling>
                    {getResponseLabel(dwelling?.dwellingResponse, entities.DWELLING)}
                </StyledDwelling>
            )}
            {dwelling.dwellingResponse?.response === answers.YES && (
                <StyledDwelling>
                    {dwelling.households?.map(household => (
                        <Row
                            className="align-items-center"
                            key={household.id}
                        >
                            <StyledResponse
                                sm={household?.hasMemberResponse ? 6 : 12}
                                response={household?.householdResponse?.response}
                            >
                                <FontAwesomeIcon icon={faHome} className="mr-4"/>
                                    &nbsp;
                                {getResponseLabel(household?.householdResponse, entities.HOUSEHOLD)}
                            </StyledResponse>
                            {household?.hasMemberResponse && (
                                <StyledResponse
                                    sm={6}
                                    response={household?.memberResponse?.response}
                                >
                                    <FontAwesomeIcon icon={faUser} className="mr-2"/>
                                        &nbsp;
                                    {getResponseLabel(household?.memberResponse, entities.MEMBER)}
                                </StyledResponse>
                            )}
                        </Row>
                    ))}
                </StyledDwelling>
            )}
        </StyledRow>
    </StyledCard>
);

DwellingSummary.propTypes = {
    dwelling: dwellingPropTypes.isRequired
};

export default DwellingSummary;
