import React from 'react';
import PropTypes from 'prop-types';

import householdDetection from '@config/household/householdDetection';
import dwellingCharacteristics from '@config/household/dwellingCharacteristics';
import householdCharacteristics from '@config/household/householdCharacteristics';
import householdIncome from '@config/household/householdIncome';
import characteristics from '@config/household/characteristics';
import comments from '@config/household/comments';
import careSeekers from '@config/member/careSeekers';
import laborSituation from '@config/member/laborSituation';
import carePeopleOutsideHome from '@config/household/carePeopleOutsideHome';
import domesticWorkActivities from '@config/household/domesticWorkActivities';
import voluntaryWork from '@config/member/voluntaryWork';

import householdPropTypes from '@util/propTypes/household';

import ChapterCard from '../ChapterCard';

const HouseholdChapters = ({household, index}) => (
    <>
        {household.householdDetection && (
            <ChapterCard
                id={`household-detection-${index}`}
                model={householdDetection}
                chapters={[household.householdDetection]}
            />
        )}
        {household.dwellingCharacteristics && (
            <ChapterCard
                id={`dwelling-characteristics-${index}`}
                model={dwellingCharacteristics}
                chapters={[household.dwellingCharacteristics]}
            />
        )}
        {household.householdCharacteristics && (
            <ChapterCard
                id={`household-characteristics-${index}`}
                model={householdCharacteristics}
                chapters={[household.householdCharacteristics]}
            />
        )}
        {household.householdIncome && (
            <ChapterCard
                id={`household-income-${index}`}
                model={householdIncome}
                chapters={[household.householdIncome]}
            />
        )}
        {household.members?.some(member => member.characteristics)
        && (
            <ChapterCard
                id={`member-characteristics-${index}`}
                model={characteristics}
                chapters={household.members.map(member => ({
                    ...member.characteristics,
                    memberName: member.characteristics.name,
                    memberAge: member.characteristics.quantity
                }))}
                showMemberData
            />
        )}
        {household.members?.some(member => member.laborSituation)
        && (
            <ChapterCard
                id={`labor-situation-${index}`}
                model={laborSituation}
                chapters={household.members.filter(member => member.laborSituation)
                    .map(member => ({
                        ...member.laborSituation,
                        memberName: member.characteristics.name,
                        memberAge: member.characteristics.quantity
                    }))}
                showMemberData
            />
        )}
        {household.members?.some(member => member.voluntaryWork)
        && (
            <ChapterCard
                id={`voluntary-work-${index}`}
                model={voluntaryWork}
                chapters={household.members.filter(member => member.voluntaryWork)
                    .map(member => ({
                        ...member.voluntaryWork,
                        memberName: member.characteristics.name,
                        memberAge: member.characteristics.quantity
                    }))}
                showMemberData
            />
        )}
        {household.members?.some(member => member.isCareSeeker)
        && (
            <ChapterCard
                id={`care-seeker-${index}`}
                model={careSeekers}
                chapters={household.members.filter(member => member.isCareSeeker)
                    .map(member => ({
                        ...member.careSeekers,
                        memberName: member.characteristics.name,
                        memberAge: member.characteristics.quantity
                    }))}
                showMemberData
            />
        )}
        {household.carePeopleOutsideHome && (
            <ChapterCard
                id={`care-people-outside-home-${index}`}
                model={carePeopleOutsideHome}
                chapters={[household.carePeopleOutsideHome]}
            />
        )}
        {household.domesticWorkActivities && (
            <ChapterCard
                id={`domestic-work-activities-${index}`}
                model={domesticWorkActivities}
                chapters={[household.domesticWorkActivities]}
            />
        )}
        {household.householdComments && (
            <ChapterCard
                id={`household-comments-${index}`}
                model={comments}
                chapters={[household.householdComments]}
            />
        )}
    </>
);

HouseholdChapters.propTypes = {
    household: householdPropTypes.isRequired,
    index: PropTypes.number.isRequired
};

export default HouseholdChapters;
