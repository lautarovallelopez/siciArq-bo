export const getSurveys = state => state?.review?.getSurveys;
export const getSurveysData = state => getSurveys(state)?.surveys;
export const getSurveysCount = state => getSurveys(state)?.count;
export const getSurveysLoading = state => getSurveys(state)?.loading;
export const getSurveysRequested = state => getSurveys(state)?.requested;

export const getSurvey = state => state?.review?.getSurvey;
export const getSurveyData = state => getSurvey(state)?.survey;

export const getDwelling = state => {
    const survey = getSurveyData(state)?.data;

    if (survey?.dwelling?.households) {
        survey.dwelling.households = survey.dwelling.households.map(household => ({
            ...household,
            hasMemberResponse: household.members?.some(
                member => member?.selectedMember
            ),
            memberResponse: household.members?.find(
                member => member?.selectedMember && member?.memberResponse
            )?.memberResponse
        }));
    }

    return survey;
};

export const getSurveyLoading = state => getSurvey(state)?.loading;
export const getSurveyRequested = state => getSurvey(state)?.requested;

export const getAddress = state => state?.review?.getAddress;
export const getAddressData = state => getAddress(state)?.address;

export const getMembersByChapter = (state, householdId, chapter) => {
    const survey = getSurveyData(state);
    if (survey.dwelling) {
        const householdFound = survey.dwelling?.households.find(household => household?.id === householdId);
        return householdFound?.members?.filter(member => member?.[chapter]);
    }
    return null;
};
