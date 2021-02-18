import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Dropdown, DropdownItem, Row} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

import {BackButton} from '@components/common';
import routes from '@constants/routes';
import roles from '@constants/roles';
import {operations} from '@constants';
import {getOptions, hasOptions} from '@util/reviewOperations';
import {addressPropTypes} from '@util/propTypes';

import ReviewOperationsModal from './ReviewOperationsModal';

import {
    StyledBeginningCol, StyledEndingCol, StyledDropdownMenu, StyledDropdownToggle
} from './styled';

const OverviewHeader = ({
    role, address, finishSurvey, approveSurvey, reopenSurvey, recoverSurvey
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modalContext, setModalContext] = useState({isOpen: false});

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleFinish = () => finishSurvey(address.id, address.address);

    const handleApprove = () => approveSurvey(address.id, address.address);

    const handleReopen = () => reopenSurvey(address.id, address.address);

    const handleRecover = () => recoverSurvey(address.id, address.address);

    const openModal = (title, assigneeRoles, user) => setModalContext({
        isOpen: true,
        stateId: address.state,
        surveyId: address.id,
        addressId: address.address,
        onClose: () => setModalContext({isOpen: false}),
        title,
        assigneeRoles,
        user
    });

    const handleReassign = () => openModal(
        operations.REASSIGN, [roles.TEAM_LEADER, roles.POLLSTER], address.user?.id
    );

    const handleSupervise = () => openModal(operations.SUPERVISE, [roles.SUPERVISOR]);

    const options = [{
        ...getOptions(operations.FINISH),
        operation: handleFinish
    }, {
        ...getOptions(operations.APPROVE),
        operation: handleApprove
    }, {
        ...getOptions(operations.REASSIGN),
        operation: handleReassign
    }, {
        ...getOptions(operations.REOPEN),
        operation: handleReopen
    }, {
        ...getOptions(operations.RECOVER),
        operation: handleRecover
    }, {
        ...getOptions(operations.SUPERVISE),
        operation: handleSupervise
    }];

    return (
        <>
            <Row data-testid="overview-header">
                <StyledBeginningCol sm={11} className="text-left">
                    <BackButton title="Revisión" to={routes.REVIEW}/>
                </StyledBeginningCol>
                {hasOptions(role, address.situation) && (
                    <StyledEndingCol sm={1} className="text-right">
                        <Dropdown
                            isOpen={dropdownOpen}
                            toggle={toggleDropdown}
                            direction="left"
                            data-testid="operations"
                        >
                            <StyledDropdownToggle
                                tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpen}
                                isopen={String(dropdownOpen)}
                            >
                                <FontAwesomeIcon icon={faEllipsisH}/>
                            </StyledDropdownToggle>
                            <StyledDropdownMenu>
                                {options.map((option, index) => address && option.situations.includes(address.situation)
                                    && option.roles.includes(role) && (
                                    <div key={option.label}>
                                        <DropdownItem
                                            onClick={option.operation}
                                            data-testid={`option-${index}`}
                                        >
                                            {option.label}
                                        </DropdownItem>
                                    </div>
                                ))}
                            </StyledDropdownMenu>
                        </Dropdown>
                    </StyledEndingCol>
                )}
            </Row>
            {modalContext.isOpen && (
                <ReviewOperationsModal
                    context={modalContext}
                />
            )}
        </>
    );
};

OverviewHeader.propTypes = {
    role: PropTypes.string.isRequired,
    address: addressPropTypes,
    finishSurvey: PropTypes.func.isRequired,
    approveSurvey: PropTypes.func.isRequired,
    reopenSurvey: PropTypes.func.isRequired,
    recoverSurvey: PropTypes.func.isRequired
};

OverviewHeader.defaultProps = {
    address: undefined
};

export default OverviewHeader;
