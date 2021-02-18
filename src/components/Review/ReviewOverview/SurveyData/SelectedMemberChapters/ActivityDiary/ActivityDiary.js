import React from 'react';
import {Table} from 'reactstrap';

import activityDiaryPropTypes from '@util/propTypes/chapters/activityDiary';

import {
    StyledUncontrolledCollapse, CardContainer, ChapterLabel, StyledChapterTitle
} from '@util/ui';

import activities from '@constants/activities';
import groups from '@constants/groups';

const getActivity = (group, activity) => {
    const currentGroup = activities[group].activities;
    const selectedActivity = currentGroup.find(({id}) => id === activity);
    if (selectedActivity) {
        return `${selectedActivity.label} (${selectedActivity.id})`;
    }
    return '';
};

const ActivityDiary = ({activityDiary}) => (
    <CardContainer>
        <StyledChapterTitle id="activity-diary">
            <ChapterLabel>
                2. Diario de actividades
            </ChapterLabel>
        </StyledChapterTitle>
        <StyledUncontrolledCollapse toggler="#activity-diary">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Hora</th>
                        <th>Minutos</th>
                        <th>Grupo - Actividad</th>
                        <th>Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    {activityDiary.activities.map(activity => (
                        <tr key={`${activity.hour}${activity.minute}`}>
                            <td className="text-center">{activity.hour}</td>
                            <td className="text-center">{activity.minute}</td>
                            <Table responsive>
                                <tbody>
                                    {activity.data.map(datum => (
                                        <tr key={`${datum.tab}${datum.column}${datum.activity}`} className="text-center">
                                            <td>{groups[datum.tab]}</td>
                                            <td>{getActivity(datum.tab, datum.activity)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <td className="text-center">{activity.comment}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </StyledUncontrolledCollapse>
    </CardContainer>
);

ActivityDiary.propTypes = {
    activityDiary: activityDiaryPropTypes.isRequired
};

export default ActivityDiary;
