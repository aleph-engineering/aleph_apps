var connections = {
    PRODUCTION_URL : process.env.MONGOLAB_URI,
    DEVELOPMENT_URL: 'mongodb://localhost/aleph_apps'
};
module.exports = connections;
