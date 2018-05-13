Package.describe({
  name: 'vulcan:ui-reactstrap',
  summary: 'Vulcan Reactstrap UI components.',
  version: '1.10.0',
  git: "https://github.com/VulcanJS/Vulcan.git"
});

Package.onUse(function (api) {

  api.versionsFrom('1.6.1');

  api.use([
    'vulcan:lib@1.10.0'
  ]);

  api.addAssets('bootstrap/dist/css/bootstrap.min.css', 'client')

  api.mainModule("lib/server/main.js", "server");
  api.mainModule("lib/client/main.js", "client");

});

Npm.depends({
  bootstrap: '4.1.1'
});