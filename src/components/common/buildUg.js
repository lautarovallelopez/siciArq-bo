import React from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import find from 'lodash/find';
import get from 'lodash/get';

import {getStates} from '@state/StaticData/selectors';

const BuildUg = ({
    attributes: {
        stateId,
        department,
        fraction,
        radius,
        segment
    },
    states,
    statesFromStore,
    fullDescription = false
}) => {
    const ug = [];
    let internalState = states;
    if (!states) {
        internalState = statesFromStore;
    }
    if (stateId) {
        ug.push(
            <span>
                {fullDescription ? 'Provincia' : 'P.'}
                &nbsp;
                {get(find(internalState, state => state._id === stateId), 'name')}
            </span>
        );
    }

    if (department && !isEmpty(department)) {
        ug.push(
            <span className="ml-2">
                {fullDescription ? 'Departamento' : 'D.'}
                &nbsp;
                {department}
            </span>
        );
    }

    if (fraction && !isEmpty(fraction)) {
        ug.push(
            <span className="ml-2">
                {fullDescription ? 'Fracción' : 'F.'}
                &nbsp;
                {fraction}
            </span>
        );
    }

    if (radius && !isEmpty(radius)) {
        ug.push(
            <span className="ml-2">
                {fullDescription ? 'Radio' : 'R.'}
                &nbsp;
                {radius}
            </span>
        );
    }

    if (segment && !isEmpty(segment)) {
        ug.push(
            <span className="ml-2">
                {fullDescription ? 'Segmento' : 'S.'}
                &nbsp;
                {segment}
            </span>
        );
    }
    return ug;
};

export default connect(
    state => ({
        statesFromStore: getStates(state)
    })
)(BuildUg);
