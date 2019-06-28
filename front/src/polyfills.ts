import 'core-js/es6';
import 'core-js/es7/reflect';
import 'materialize-css/dist/js/materialize.min'
require('zone.js/dist/zone');
// @ts-ignore
M.AutoInit();

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development and test
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
