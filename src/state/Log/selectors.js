export const getLogs = state => state?.log?.getLogs;
export const getLogsData = state => getLogs(state)?.logs;
export const getLogsCount = state => getLogs(state)?.count;
export const getLogsLoading = state => getLogs(state)?.loading;
export const getLogsRequested = state => getLogs(state)?.requested;
