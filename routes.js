const routes = module.exports = require('next-routes')();

routes
    .add('/campaings/new', '/campaings/new')
    .add('/campaings/:address', '/campaings/show');

module.exports = routes;