var ComUtils = require('./ComUtils')

var BrowserUtils = {}, DomUtils = {};

if(typeof window !== 'undefined') {
    BrowserUtils = require('./BrowserUtils')
}

if(typeof document !== 'undefined') {
    DomUtils = require('./DomUtils')
}

export default {
    ...ComUtils,
    ...BrowserUtils,
    ...DomUtils
}