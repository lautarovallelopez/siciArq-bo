import PropTypes from 'prop-types';

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string,
    subTitle: PropTypes.string,
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string
    })),
    subQuestions: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            label: PropTypes.string
        })),
        exclusive: PropTypes.bool,
        inputName: PropTypes.string
    }))
});
