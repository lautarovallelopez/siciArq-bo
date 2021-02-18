import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import routes from '@constants/routes';

import ReviewOverview from './ReviewOverview';
import ReviewList from './Review';

const Review = ({match: {path}}) => (
    <Switch>
        <Route path={routes.REVIEW_OVERVIEW} key="overview" exact component={ReviewOverview}/>
        <Route path={path} key="list" component={ReviewList}/>
    </Switch>
);

Review.propTypes = {
    match: PropTypes.shape({path: PropTypes.string}).isRequired
};

export default Review;
