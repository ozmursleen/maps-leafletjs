// Configuration Options
require.config({
  baseUrl: "js/", //for reading app.js and main.js under js/ folder
  // paths: maps ids with paths (no extension)
  paths: {
    "angular": ["../scripts/lib/angularjs/angular.min"],
    "angular-ui-bootstrap": ["../scripts/lib/angular-ui-bootstrap/ui-bootstrap-tpls-2.1.3.min"],
    "leaflet": ["../scripts/lib/leaflet/leaflet"]
  },
  // shim: makes external libraries reachable
  shim: {
    angular: {
      exports: "angular"
    },
    "angular-ui-bootstrap":{
      deps: ["angular"]
    }
  }
});

// Angular Bootstrap 
require(["app", "leaflet", "../controllers/main", "../directives/main"], function (app, L) {
  // initialisation code defined within app.js
  app.init();
});