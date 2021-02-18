export const getUpsDropdown = state => state?.type?.getUpsDropdown;
export const getUpsDropdownData = state => getUpsDropdown(state)?.ups;

export const getAreasDropdown = state => state?.type?.getAreasDropdown;
export const getAreasDropdownData = state => getAreasDropdown(state)?.areas;

export const getSegmentsDropdown = state => state?.type?.getSegmentsDropdown;
export const getSegmentsDropdownData = state => getSegmentsDropdown(state)?.segments;

export const getFiles = state => state?.type?.getFiles;
export const getFilesData = state => getFiles(state)?.files;
export const getFilesLoading = state => getFiles(state)?.loading;

export const getStatuses = state => state?.type?.getStatuses;
export const getStatusesData = state => getStatuses(state)?.statuses;

export const getSituations = state => state?.type?.getSituations;
export const getSituationsData = state => getSituations(state)?.situations;

export const getAssignmentsTypes = state => state?.type?.getAssignmentsTypes;
export const getAssignmentsTypesData = state => getAssignmentsTypes(state)?.assignmentsTypes;
