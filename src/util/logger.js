import log from 'loglevel';
import remote from 'loglevel-plugin-remote';

const customJSON = logData => ({
    msg: logData.message,
    level: logData.level.label,
    stacktrace: logData.stacktrace
});

remote.apply(log, {format: customJSON, url: '/logger'});

log.enableAll();

export default log;
