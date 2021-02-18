import {connect} from 'react-redux';

import {getFilesData, getFilesLoading} from '@state/Type/selectors';

import FilesList from './FilesList';

const mapStateToProps = state => ({
    files: getFilesData(state),
    loading: getFilesLoading(state)
});

const FilesListContainer = connect(mapStateToProps)(FilesList);

export default FilesListContainer;
