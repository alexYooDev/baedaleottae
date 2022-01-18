const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api/**', {
      target: 'https://elice-kdt-3rd-team-04.koreacentral.cloudapp.azure.com',
    })
  );
  app.use(
    proxy('/otherApi/**', {
      target: 'https://elice-kdt-3rd-team-04.koreacentral.cloudapp.azure.com',
    })
  );
};
