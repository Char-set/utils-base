if(process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/utils-base.min.js')
} else {
    module.exports = require('./dist/utils-base.js')
}