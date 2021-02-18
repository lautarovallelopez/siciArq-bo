const dwellings = {
    DWELLING_RESPONSE: 'dwellingResponse',
    DWELLING_COMMENTS: 'dwellingComments'
};

const households = {
    DWELLING_CHARACTERISTICS: 'dwellingCharacteristics',
    HOUSEHOLD_CHARACTERISTICS: 'householdCharacteristics',
    HOUSEHOLD_DETECTION: 'householdDetection',
    HOUSEHOLD_INCOME: 'householdIncome',
    CHARACTERISTICS: 'characteristics',
    HOUSEHOLD_RESPONSE: 'householdResponse',
    HOUSEHOLD_COMMENTS: 'householdComments',
    VOLUNTARY_WORK: 'voluntaryWork',
    CARE_SEEKERS: 'careSeekers',
    DOMESTIC_WORK_ACTIVITIES: 'domesticWorkActivities',
    CARE_PEOPLE_OUTSIDE_HOME: 'carePeopleOutsideHome',
    MEMBER_SELECTED_TO_RESPONSE: 'memberSelectedToResponse'
};

const members = {
    LABOR_SITUATION: 'laborSituation',
    MEMBER_RESPONSE: 'memberResponse',
    TIME_USE_INTRODUCTION: 'timeUseIntroduction',
    ACTIVITY_DIARY: 'activityDiary',
    RESCUE_QUESTIONS: 'rescueQuestions'
};

export default {
    ...dwellings,
    ...households,
    ...members
};
