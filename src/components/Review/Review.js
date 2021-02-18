import React from 'react';
import {faClipboardCheck} from '@fortawesome/free-solid-svg-icons';

import Title from '@components/common/Title';

import ReviewTable from './ReviewTable';
import SearchParams from './SearchParams';

const Review = () => (
    <>
        <Title title="Revisión" icon={faClipboardCheck}/>
        <SearchParams/>
        <ReviewTable/>
    </>
);

export default Review;
